const mongoose = require('mongoose');
const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    console.log("connected to mongoDb succesfully")
  }catch(err){
    console.log("connection failed", err)
  }
}
// mongoose.connect(process.env.MONGODB_CONNECT_URI);
// const db = mongoose.connection;
// db.on("error", console.error.bind(error, "error in db"));
// db.once("open", function () {
//     console.log("Succesfully connected to DB");
//   });
  
  module.exports= connectDB;
  //mongodb://0.0.0.0:27017/db
  // netstat -antp tcp
  //KH!u47MwdC3ir23
  // lUWze5yFI6Ftq1T7vi 