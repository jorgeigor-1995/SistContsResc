var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";

mongoose.connect( url, {
    useNewUrlParser: true,
      useFindAndModify: false,
       useCreateIndex: true,
       useUnifiedTopology: true
  });
  
  const db = mongoose.connection;
  
  db.on('connected', () => {
    console.log('Mongoose default connection is open')
  });
  
  db.on('error', err => {
    console.log(`Mongoose default connection has ocurred \n ${err}`);
  });
  
  db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
  });
  
  process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connnection is disconnected due to application termination')
    });
    process.exit(0);
  });
  //Armazenar a conexão realizada em uma variável global
  global.db = mongoose.connection;

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