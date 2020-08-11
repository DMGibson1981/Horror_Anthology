var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Routes
app.get("/", function(req, res){
    res.render("home");
});



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The horor anthology site is active.");
});