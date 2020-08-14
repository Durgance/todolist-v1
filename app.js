//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
let items = [];
let workItems=[];
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  let item = req.body.newItem;
  //console.log(req.body);
  if (req.body.add==="Work"){
	  workItems.push(item);
		res.redirect("/work");
} 
 
  if (item!=="" && req.body.add!=="Work"){
	items.push(item);
  }
  
  
  res.redirect("/");
});

app.get("/", function (req, res) {
  let day=date.getDate();
  //console.log(date.getDay());
  //console.log(day);
  res.render("list", { listtitle: day, newListItems: items });
  //res.send("Hello");
});

app.get("/work",function (req, res){
	res.render("list",{listtitle:"Work list", newListItems:workItems});
})

app.post("/work",function (req, res){
	let item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port : 3000");
});
