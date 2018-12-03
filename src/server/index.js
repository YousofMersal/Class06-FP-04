const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const mentorsFilePath = path.join(__dirname, './api/Mentors.json')
const buildPath = path.join(__dirname, '../../build')

app.use(express.static(buildPath))

//path for responding to api call that won't interefere with react-router when implemented
app.get('/api/mentors', (req, res) => {
  fs.readFile(mentorsFilePath, 'utf8', (err, data) => {
    console.log(data)
    try {
      console.log(data)
      res.send(data)
    } catch (error) {
      throw new Error(err)
    }
  })
})

//catch-all path for sercing the build folder (the react app)
app.get('/*', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(process.env.PORT || 9001, () => {
  console.log('Test')
})
