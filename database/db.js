const mongoose = require('mongoose');



mongoose.connect("localhost", {
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