"use strict";

var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var PORT = 3000;
app.use(bodyParser.urlencoded({
  extenden: true
}));
app.set("view engine", "ejs");
app.use(express["static"](__dirname + '/public'));
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/posts", function (req, res) {
  res.send("Welcome to posts");
});
app.listen(PORT, function () {
  console.log("Welcome to my blog app server.");
});