var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');
var hike = require('routes/hike');

app.get('/hikes', hike.index);
app.post('/add_hike', hike.add_hike);

app.listen(8081, function(){
  console.log("Listening..");
});
