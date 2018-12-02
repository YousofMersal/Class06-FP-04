const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const mentorsFilePath = path.join(__dirname, './api/Mentors.json')
const buildPath = path.join(__dirname, '../../build')

app.use(express.static(buildPath))

app.get('/', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.get('/mentors', (req, res) => {
  fs.readFile(mentorsFilePath, 'utf8', (err, data) => {
    try {
      res.send(data)
    } catch (error) {
      throw new Error(err)
    }
  })
})

app.listen(process.env.PORT || 9001, () => {
  console.log('Test')
})
