//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (item!==""){
	items.push(item);
  }
  
  
  res.redirect("/");
});

app.get("/", function (req, res) {
  let today = new Date();

  let day = "";
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItems: items });
  //res.send("Hello");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port : 3000");
});
