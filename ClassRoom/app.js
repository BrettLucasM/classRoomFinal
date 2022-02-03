const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
fs = require('fs');
app.use('../assets', express.static('assets')); //Calls stylesheet

app.get('/', function (req, res) {

    //res.render('home');
    console.log('Request was made: ' + req.url);
    var v = 0;
    let data ={
        v: v
    }
    res.render('home', {data: data});
});

app.get('/About', function (req, res) {

    //res.render('home');
    console.log('Request was made: ' + req.url);
    var v = 1;
    let data ={
        v: v
    }
    res.render('home', {data: data});
});

app.get('/create', function (req, res) {

    //res.render('home');
    console.log('Request was made: ' + req.url);
    var v = 1;
    let data ={
        v: v
    }
    res.render('Create', {data: data});
});

app.get('/Help', function (req, res) {

    //res.render('home');
    console.log('Request was made: ' + req.url);
    var v = 2;
    let data ={
        v: v
    }
    res.render('home', {data: data});
});

app.post('/creation', urlencodedParser, function (req, res){
    var Answer = req.body;
    var i = 2;
   // res.send(Answer);
    let data ={
        i: i,
        Answer: Answer
    }
    res.render('Create', {data: data});
   
});

app.listen(8080, '0.0.0.0', function(){

    console.log("Listening to Port 8080")
    console.log("Running...")
});