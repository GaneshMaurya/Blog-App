var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const PORT = 3000;

var posts = [
    {name: "Icy Mountains", image: "https://images.unsplash.com/photo-1579377204611-a99b7d1263a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Two Days In Amsterdam", image: "https://images.unsplash.com/photo-1561330099-cddf2a366667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Prague - Gorgeous & Well-Preserved", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "A Day in Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Derby at the Ethihad", image: "https://images.unsplash.com/photo-1555862124-94036092ab14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
];

mongoose.connect('mongodb://localhost/blog_app', {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function(){
    console.log("Mongodb connection has been made");
}).on('error', function(error){
    console.log("The error is : ", error);
});

app.use(bodyParser.urlencoded({extenden : true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/posts", function(req, res) {
    res.render("posts", {posts:posts});
});

app.post("/posts", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newPost = {name: name, image: image};
    posts.push(newPost);

    res.redirect("/posts");
});

app.get("/posts/new", function(req, res) {
    res.render("new");
});

app.listen(PORT, function(){
    console.log("Welcome to my blog app server.");
});