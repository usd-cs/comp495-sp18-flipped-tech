//This file is the root to our server. It starts it up and creates the routes to different webpages
//once we begin to get further in the project, it will need to be refactored
const express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
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
app.use(cors());
//allows ejs files in views folder to locate css files in public
app.use(express.static("public"));
//allows for information sent from pages to be rendered and used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//allows for code minimization
//when giving a file, just give name. Does not need .ejs
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3001));

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
//db.schema.dropTableIfExists('commentstest');

//the following .get and .post functions create the routes to different
//pages and we can then pass data in and out of the ejs files
//req and res found as paramters are typicala names for routes and their actions
//req is for request and is used when info is being submitted through a page
//res is a response and is used when responding and routing to a page
app.get('/adminLectureList', function(req,res) {
    console.log("retrrieving admin lectures");
    db.select().table('adminlectures')
    .then(ar => {
        console.log('admin lectures table adding: ' + ar);
        res.json(ar);
    });
});

app.get('/adminLectureList/:lectureId', function(req, res) {
    
});

app.get("/testLecture", function(req, res){
    console.log("IN RIGHT METHOD");
    db.select().table('commentstest')
    .then(ar => {
        console.log("table length: " + ar.length);
        res.json(ar);
    }); 
    
    //const data = [{commentlist : "comment"}];
    //res.json(data);
});

app.post("/newComment", function(req, res){
	//data taken from pages must be parsed into an object
	//before being used in regular js
    //const body = req.body;
	const newComment = req.body;//.body.text;
    console.log('newComment: ' + newComment.text);
    if(newComment.text == '')
        return;
    console.log('before date');
    const date = new Date();
	const table = db('commentstest').insert({
        username: "erickjperez", //Change in future sprints to reflect actual user account
        time: getTime(date),
        date: getDate(date),
        comment: newComment.text
    })
    //.returning('*')
    .then(ar => {
        console.log('ar: ' + ar);
        res.redirect("/testLecture");
    })

    console.log('table: ' + table);
});

app.get("/lectureUpload", function(req, res){
    res.render("lectureUpload");
});

/*
app.post("/newLecture", function(req, res){
    res.redirect("/lectureUpload");
});
*/


app.get("/", function(req, res){
    res.render("homePage");
});
//for get requests for any not defined
//order matters. Must be after the other routes
app.get("*", function(req, res){
    res.send("Page not yet set up");
});

//tell express to listen for requests(start server)
//this sets up the server on localhost 3001
app.listen(app.get('port'), function(){
    console.log("server has started on port " + app.get('port'));
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