const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require("express-ejs-layouts");
const db = require('./config/mongoose');


app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayout);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set("view engine", "ejs");
app.set("views", "./views");
db();

app.use("/", require("./routes"));

app.listen(port, function (err) {
    if (err) {
      console.log("There has been some error", err);
    }
    console.log("Server is running fine at port:", port);
  });
