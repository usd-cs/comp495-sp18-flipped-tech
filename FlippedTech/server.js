//This file is the root to our server. It starts it up and creates the routes to different webpages
//once we begin to get further in the project, it will need to be refactored
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

//Creates database object with given settings
const db = knex({
    client: 'pg',
    connection: {
        host: 'flippedtechdb.co5is9ipwn8u.us-west-1.rds.amazonaws.com',
        user: 'flippedtech',
        password: 'webdevapp',
        database: 'FlippedTechDB'
    }
})

const app = express();
//allows ejs files in views folder to locate css files in public
app.use(express.static("public"));
//allows for information sent from pages to be rendered and used
app.use(bodyParser.urlencoded({extended: true}));

//allows for code minimization
//when giving a file, just give name. Does not need .ejs
app.set("view engine", "ejs");


//===============================================================================================
//Uncomment this chunk of code, if you accidentally deleted the pre-entered entries in the table
//Run the code once, then comment it again to avoid duplicate entries
/*
db.insert([
    {
        username:"eromney", 
        time: getTime(new Date()), 
        date: getDate(new Date()), 
        comment:"Fast forward to 3:04. It's my favorite part"
    }
    ,
    {
        username:"mroth", 
        time: getTime(new Date()), 
        date: getDate(new Date()), 
        comment:"^^What he said"
    },
    {
        username:"jwahl", 
        time: getTime(new Date()), 
        date: getDate(new Date()), 
        comment:"So why don't you just cast it?"
    },
    {
        username:"nicholaswahl", 
        time: getTime(new Date()), 
        date: getDate(new Date()), 
        comment:"Idk"
    }]
).into('commentstest')
    .then( () => console.log('entered'));
*/
//===============================================================================================


//the following .get and .post functions create the routes to different
//pages and we can then pass data in and out of the ejs files
//req and res found as paramters are typicala names for routes and their actions
//req is for request and is used when info is being submitted through a page
//res is a response and is used when responding and routing to a page
app.get("/", function(req, res){
    res.render("homePage");
});

app.get("/lecturePage", function(req, res){
    db.select().table('commentstest')
    .then(ar => {
        res.render("lecturePage", {commentsArr: ar});
    }); 
});

app.post("/newComment", function(req, res){
	//data taken from pages must be parsed into an object
	//before being used in regular js
	const newComment = req.body.comment;
    const date = new Date();
	db('commentstest').insert({
        username: "erickjperez", //Change in future sprints to reflect actual user account
        time: getTime(date),
        date: getDate(date),
        comment: newComment
    })
    .returning('*')
    .then(ar => {
        res.redirect("/lecturePage");
    })
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

//Takes in Date Object and and returns formatted time as hh:mm
//parameters date: Date()
function getTime(date){
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours+":"+minutes;
}

//Takes in Date Object and and returns formatted date as mm-dd-yyyy
//parameters date: Date()
function getDate(date){
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return month + "-" + day + "-" + year;
}