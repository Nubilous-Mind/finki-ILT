var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8081, function(){
  console.log("Listening..");
});
