var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World again!');
});

app.get('/test', function(req, res){
  res.sendFile(path.join(__dirname+'/ILT.html'));
});

app.listen(8081, function(){
  console.log("Listening..");
});
