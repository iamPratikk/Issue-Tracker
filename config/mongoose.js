const mongoose = require('mongoose');
mongoose.connect('mongodb://%2Ftmp%2Fmongodb-27017.sock/issuetrackerDb');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in db"));
db.once("open", function () {
    console.log("Succesfully connected to DB");
  });
  
  module.exports= db;
  //mongodb://0.0.0.0:27017/db