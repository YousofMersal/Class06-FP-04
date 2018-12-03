const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const mysql = require('mysql')
const dbsettings = require('./dbsettings')
const mentorsFilePath = path.join(__dirname, './api/Mentors.json')
const buildPath = path.join(__dirname, '../../build')

app.use(express.static(buildPath))

app.get('/api/dbtest', (req, res) => {
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

app.listen(process.env.PORT || 9001, () => {
  console.log('Test')
})
