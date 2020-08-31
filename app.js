var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const PORT = 3000;

app.use(bodyParser.urlencoded({extenden : true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render();
})

app.listen(PORT, function(){
    console.log("Welcome to my blog app server.");
})