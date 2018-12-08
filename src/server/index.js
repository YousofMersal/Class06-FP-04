require('dotenv').config()

const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const dbsettings = require('./settings')
const mentorsFilePath = path.join(__dirname, './api/Mentors.json')
const buildPath = path.join(__dirname, '../../build')
const port = process.env.PORT || 9001
app.use(bodyParser.json())
app.use(express.static(buildPath))

app.get('/api/getallmentors', (req, res) => {
  //creat connection to HerokuDB
  const connection = mysql.createConnection(dbsettings.settings)
  connection.connect()

  //Query to the database and send it back in the response to the client
  connection.query('SELECT * from mentors', (err, data, fields) => {
    if (err) {
      throw new Error()
    } else {
      res.send(data)
    }
  })

  //disconecting so we don't create errors with the HerokuDB
  connection.end()
})

//Sends all the data from the edit form to the database and replaces it all.
//i diden't know how to only update the relevant data. Will optimize in the future.
//placeholders on all data from the client to correctly escape them to avoid SQLinjection attacks.
app.post('/api/updatementor', (req, res) => {
  const connection = mysql.createConnection(dbsettings.settings)
  connection.connect()
  connection.query(
    'UPDATE mentors SET first_name = ?, last_name = ?, bday = ?, type = ?, slack_nickname = ?, admission_date = ?, status = ? WHERE id= ?',
    [
      req.body.data.fName,
      req.body.data.lName,
      req.body.data.bDay,
      req.body.data.memberType,
      req.body.data.slackName,
      req.body.data.admission_date,
      req.body.data.status,
      req.body.data.id
    ],
    (err, results, fields) => {
      if (err) {
        throw new Error('Whoops! Could not send data to database! \n' + err)
      } else {
        res.status(200).send(results)
      }
    }
  )
  connection.end()
})

//Sends all the data from the create form to the database, and escapes all data from the client.
app.post('/api/creatementor', (req, res) => {
  const connection = mysql.createConnection(dbsettings.settings)
  connection.connect()
  connection.query(
    'INSERT INTO mentors (first_name, last_name, bday, type, slack_nickname, admission_date, status) VALUES( ?, ?, ?, ?, ?, ?, ?)',
    [
      req.body.data.fName,
      req.body.data.lName,
      req.body.data.bDay,
      req.body.data.memberType,
      req.body.data.slackName,
      req.body.data.admission_date,
      req.body.data.status
    ],
    (err, results, fields) => {
      if (err) {
        throw new Error('Whoops! Could not send data to database! \n' + err)
      } else {
        res.status(200).send(results)
      }
    }
  )
  connection.end()
})

//Hands off the id of the entry to be deleted.
app.post('/api/deletementor', (req, res) => {
  const connection = mysql.createConnection(dbsettings.settings)
  connection.connect()
  connection.query(
    'DELETE FROM mentors WHERE id = (?)',
    [req.body.id],
    (err, results, fields) => {
      if (err) {
        throw new Error('Whoops! Could not send data to database! \n' + err)
      } else {
        res.status(200).send(results)
      }
    }
  )
  connection.end()
})

//path for responding to api call that won't interefere with react-router when implemented
app.get('/api/mentors', (req, res) => {
  fs.readFile(mentorsFilePath, 'utf8', (err, data) => {
    try {
      res.send(data)
    } catch (error) {
      throw new Error(err)
    }
  })
})

//catch-all path for serving the build folder (the react app)
app.get('/*', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(`Calender App Is being served! on port ${port}`)
})
