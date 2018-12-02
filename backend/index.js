express = require('express')

const app = express()

app.use(express.static(__dirname + '/../client/build'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 9001, () => {
  console.log('Test')
})
