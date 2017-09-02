const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const toDoList = ["Go to the store"];

//Create app

const app = express();


app.engine('mustache', mustacheExpress());
app.engine('js', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static( __dirname + '/public'));

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());

//let todoList = {
//  list: [
//    {"pending":"Go to the store"},
//    {"complete":"Feed the pets"},
//  ]};



app.get("/todo/", function (req, res) {
  res.render('todo', {displayList: toDoList});
});


app.post("/todo/", function (req, res) {
  toDoList.push(req.body.addTask);
  res.redirect('/todo/');
});


//app.post("/done", function (req, res) {
//  res.redirect('/todo');
//})

//Set app to use bodyPars






//app.get('/', function(req, res) {


//  var html = '<form action="/" method="post">' +

//})


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
