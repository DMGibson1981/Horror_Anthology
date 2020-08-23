var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Comments = require("./models/comments");

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

app.post("/requests", function(req, res){
    var name = req.body.name;
    var work = req.body.work;
    var newRequest = {name: name, work: work};
    Comments.create(newRequest, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("requests");
        }
    });
    // Comments.find({}, function(err, allComments){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.render("/requests", {comments:allComments});
    //     }
    // });
});


//=========Author Routes==============
app.get("/dickens", function(req, res){
    res.render("dickens");
});

app.get("/james", function(req, res){
    res.render("james");
});

app.get("/lefanu", function(req, res){
    res.render("lefanu");
});

app.get("/lovecraft", function(req, res){
    res.render("lovecraft");
});

app.get("/poe", function(req, res){
    res.render("poe");
});

app.get("/stoker", function(req, res){
    res.render("stoker");
});

//===========Story Routes===========

app.get("/dickens/signal", function(req, res){
    res.render("dickens/signal");
});

app.get("/james/ashtree", function(req, res){
    res.render("james/ashtree");
});

app.get("/lefanu/bonesetter", function(req, res){
    res.render("lefanu/bonesetter");
});

app.get("/lovecraft/polaris", function(req, res){
    res.render("lovecraft/polaris");
});

app.get("/poe/reddeath", function(req, res){
    res.render("poe/reddeath");
});

app.get("/poe/telltaleheart", function(req, res){
    res.render("poe/telltaleheart");
});

app.get("/stoker/dracguest", function(req, res){
    res.render("stoker/dracguest");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The horor anthology site is active.");
});    