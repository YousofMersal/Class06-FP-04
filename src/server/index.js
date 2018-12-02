const express = require('express')
const path = require('path')
const app = express()

const buildPath = path.join(__dirname, '../../build')

app.use(express.static(buildPath))

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname, '../../build', 'index.html'))
  // res.sendFile(path.join(__dirname, 'build', 'index.html'))
  //res.sendFile(path.join(buildPath, 'index.html'))

  const indexPath = path.join(buildPath, 'index.html')

  res.sendFile(indexPath)
})

app.listen(process.env.PORT || 9001, () => {
  console.log('Test')
})
