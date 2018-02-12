var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello World again!');
});

fs.readFile('ILT.html', function(err, html){
  if(err)
    throw err;

  http.createServer(function(req, res){
    res.writeHeader(200, {"Content-type": "text/html"});
    res.write(html);
    res.end();
  }).listen(8081);
});