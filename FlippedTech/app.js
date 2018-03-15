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


/*
dummy data for now until we can hook it up to a DB
*/
var commentsArr = [
    [
        {username:"alexanderalvarez", time:"3:34", date:"3-12-2018", commentData:"What advantage does this have over java?"},
        {username:"mroth", time:"3:35", date:"3-12-2019", commentData:"I'm still unsure about Gang of Four"}
    ],
    [
        {username:"eromney", time:"3:34", date:"3-12-2018", commentData:"Do we need to wait for all threads to finish working?"},
        {username:"mroth", time:"3:35", date:"3-12-2019", commentData:"Yes, Ethan"},
        {username:"nicholaswahl", time:"1:10", date:"3-13-2019", commentData:"Don't forget that you must create threads at the beginning"},
        {username:"mayamccaulife", time:"1:35", date:"3-13-2019", commentData:"What a great lecture. Thanks"}
    ],
    [
        {username:"sgarza", time:"3:34", date:"3-12-2018", commentData:"The lecture really begins at the 1:30 mark"}
    ]

];

//count is just temporary to keep track of how many lectures we have. Once DB is setup we will have to refactor
//all of the code
var count = 3;
var allLectures = [{num: 0, lecture: "Python Design Patterns", course: "COMP305", videoURL: "https://www.youtube.com/embed/vNHpsC5ng_E", videoDesc: "This leture describes what design patterns are when discussing python. This includes gang of four and singleton"},
                   {num: 1, lecture: "Parallel Programming", course: "COMP280", videoURL: "https://www.youtube.com/embed/q7sgzDH1cR8", videoDesc: "What is Parallel Programming. Click to learn more"},
                   {num: 2, lecture: "Java 101 Basics", course: "COMP150", videoURL: "https://www.youtube.com/embed/2Xa3Y4xz8_s", videoDesc: "Here is a quick rundown of java and what to expect as you continue with the course"}
];

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
    res.render("lecturePage", {commentsArr: commentsArr});
});

app.post("/newComment", function(req, res){
	//data taken from pages must be parsed into an object
	//before being used in regular js
	var newComment = req.body.comment;
    var time = new Date();
    var numLecture = req.body.num;
	comments = newComment;
    //automatically use username "erickjperez" until real users are added
    var commentEntry = {username: "erickjperez", time:getTime(time), date:getDate(time), commentData:newComment};
    console.log(commentEntry);
    commentsArr[numLecture].push(commentEntry);
    
    console.log(numLecture);
    //new comment will then add comment to array and reroute to same lecture page
    res.render("lecturePage", {lecture: allLectures[numLecture], commentsArr: commentsArr[numLecture]});
});

app.get("/lectureUpload", function(req, res){
    res.render("lectureUpload");
});

app.post("/newLecture", function(req, res){
    var lecture = req.body.lecture;
    var course = req.body.course;
    var videoURL = req.body.videolink;
    var videoDesc = req.body.describtion;
    var lectureContent = {num: count++, lecture: lecture, course: course, videoURL: videoURL, videoDesc: videoDesc};
    var time = new Date();
    commentsArr.push([]);
    allLectures.push(lectureContent);
    console.log(allLectures);
    res.redirect("/lectures");
});

app.get("/lectures", function(req,res){
    res.render("lectures",{allLectures: allLectures});
});

app.get("/lectures/:num", function(req,res){
    var numLecture = req.params.num;
    res.render("lecturePage", {lecture: allLectures[numLecture], commentsArr: commentsArr[numLecture]});
})

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

//function takes in the date and time of creation and returns the time as a string
//represented as hh:mm
//parameters time: raw time/date creation string. Not user friendly. Needs to be parsed
function getTime(time){

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var currTime = hours+":"+minutes;
    return currTime;
}

//function takes in the date and time of creation and returns the date as a string
//represented as mm:dd:yyyy
//parameters time: raw time/date creation string. Not user friendly. Needs to be parsed
function getDate(time){
    var month = time.getMonth();
    var day = time.getDate();
    var year = time.getFullYear();
    var currDate = month + "-" + day + "-" + year;
    return currDate;
}