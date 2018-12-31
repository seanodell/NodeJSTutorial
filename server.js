var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/greeting', function (req, res) {
  res.send('Hello World, the client/server version!')
})

app.listen(3000)
