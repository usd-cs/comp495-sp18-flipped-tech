
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//allows ejs files in views folder to locate css files in public
app.use(express.static("public"));
//allows for information sent from pages to be rendered and used
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("homePage");
});

app.post("/newComment", function(req, res){
    res.redirect("/lecturePage");
});

app.get("/lecturePage", function(req, res){
    res.render("lecturePage");
});

app.get("/lectureUpload", function(req, res){
    res.render("lectureUpload");
});

app.post("/newLecture", function(req, res){
    res.redirect("/lectureUpload");
});

//for get requests for any not defined
//order matters. Must be after the other routes
app.get("*", function(req, res){
    res.send("Page not yet set up");
});

//tell express to listen for requests(start server)
//process.env.PORT is used for cloud9. When programming on own comp, give it a port number
app.listen(3000, function(){
    console.log("server has started");
});