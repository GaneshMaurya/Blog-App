var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const PORT = 3000;

var posts = [
    {name: "Icy Mountains", image: "https://images.unsplash.com/photo-1579377204611-a99b7d1263a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Two Days In Amsterdam", image: "https://images.unsplash.com/photo-1561330099-cddf2a366667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Prague - Gorgeous & Well-Preserved", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Icy Mountains", image: "https://images.unsplash.com/photo-1579377204611-a99b7d1263a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Two Days In Amsterdam", image: "https://images.unsplash.com/photo-1561330099-cddf2a366667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Prague - Gorgeous & Well Preserved", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Icy Mountains", image: "https://images.unsplash.com/photo-1579377204611-a99b7d1263a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Two Days In Amsterdam", image: "https://images.unsplash.com/photo-1561330099-cddf2a366667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Prague - Gorgeous & Well-Preserved", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
];

app.use(bodyParser.urlencoded({extenden : true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/posts", function(req, res) {
    res.render("posts", {posts:posts});
});

app.post("/post", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;

    res.redirect("/posts");
});

app.listen(PORT, function(){
    console.log("Welcome to my blog app server.");
});