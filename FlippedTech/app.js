//This file is the root to our server. It starts it up and creates the routes to different webpages
//once we begin to get further in the project, it will need to be refactored


//below are declarations for npm packages that we will be using
//express allows us to route to different pages
var express = require("express");
var app = express();
//body parser allows us to take input from pages and get it as a usable string
var bodyParser = require("body-parser");

//allows ejs files in views folder to locate css files in public
app.use(express.static("public"));
//allows for information sent from pages to be rendered and used
app.use(bodyParser.urlencoded({extended: true}));


//allows for code minimization
//when giving a file, just give name. Does not need .ejs
app.set("view engine", "ejs");


//the following .get and .post functions create the routes to different
//pages and we can then pass data in and out of the ejs files
//req and res found as paramters are typicala names for routes and their actions
//req is for request and is used when info is being submitted through a page
//res is a response and is used when responding and routing to a page
app.get("/", function(req, res){
    res.render("homePage");
});

app.get("/lecturePage", function(req, res){
    res.render("lecturePage");
});

app.post("/newComment", function(req, res){
    res.redirect("/lecturePage");
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
//this sets up the server on localhost 3000
app.listen(3000, function(){
    console.log("server has started");
});