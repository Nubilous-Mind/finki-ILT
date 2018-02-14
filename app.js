var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  connection.query("select * from worker", function (errorQuery, result, fields) {
    // if any error while executing above query, throw error
      if (errorQuery) throw errorQuery;
    // if there is no error, you have the result
      console.log(result);
  });                
  console.log('Connected to database.');
});

connection.end();

app.get('/', function(req, res){
  res.redirect('https://s3.eu-central-1.amazonaws.com/finki-ilt-tim5/ILT.html');
});

app.listen(8081, function(){
  console.log("Listening..");
});
