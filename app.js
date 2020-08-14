//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.get("/", function(req, res){
  var today =new Date();
  today = today.getDay();
  var day="";
  if (today==6 || today==0){
    day+="weekend";
    
  }else{
    day+="weekday";
  }
  res.render("list",{kindOfDay:day});
  //res.send("Hello");
});

app.listen( process.env.PORT || 3000 , function(){
  console.log("Server started on port : 3000");
});
