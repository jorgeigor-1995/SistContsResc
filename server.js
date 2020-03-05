var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Conta = require('./routes/Contas');

app.use('/conta', Conta);


app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})