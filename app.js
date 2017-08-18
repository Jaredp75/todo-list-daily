const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');

//Create app

const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static( __dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


let todoList = {list: [
    {"onhold":"Brush teeth"},
    {"complete":"Take a shower"},
  ]};




app.get("/todo", function (req, res) {
  res.render('todo', todoList)
});


app.post("/", function (req, res) {
  todoList.list.push({"onhold": req.body.onhold});
  res.redirect('/todo');
});


app.post("/done", function (req, res) {
  res.redirect('/todo');
});

//Set app to use bodyPars






//app.get('/', function(req, res) {


//  var html = '<form action="/" method="post">' +

//})


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
