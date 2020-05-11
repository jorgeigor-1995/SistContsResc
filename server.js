var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var config = require('./config');
var mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
  keepAlive: true,
  useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.get('/api/', function (req, res, next) {
  res.json('online');
});

const Conta = require('./app/Conta');

app.use('/api/conta', Conta);

var port = parseInt(config.initialPort);

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})