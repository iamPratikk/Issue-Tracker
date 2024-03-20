const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/issuetrackerDb');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in db"));
db.once("open", function () {
    console.log("Succesfully connected to DB");
  });
  
  module.exports= db;
  //mongodb://0.0.0.0:27017/db