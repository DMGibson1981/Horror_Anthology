var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var authors = require("./models/authors");
// var seedDB = require("./seeds"); 

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
mongoose.connect("mongodb://localhost:27017/HorrorData", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("ERROR! " + err.message);
});
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({extended: true}));


//Routes
app.get("/", function(req, res){
    res.render("home");
});

app.get("/authors", function(req, res){
    res.render("authors");
});

app.get("/stories", function(req, res){
    res.render("stories");
});

app.get("/requests", function(req, res){
    res.render("requests");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The horor anthology site is active.");
});