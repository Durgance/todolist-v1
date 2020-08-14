//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine","ejs");

app.get("/", function(req, res){
  var today =new Date();
  today = today.getDay();
  if (today==6 || today==0){
    res.send("its the weekend");

  }else{
    res.send("its a workday");
  }
  //res.send("Hello");
});
 
app.listen( process.env.PORT ||3000, function(){
  console.log("Server started on port : 3000");
});
