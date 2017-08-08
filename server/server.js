var express = require('express');
var app = express();
var http = require('http');

app.listen(6840, function() {
  console.log('Server is running on port 6840!');
});

app.use(express.static("public"));

app.get('/listings/new', function (req, res) {
  res.send("Hello World!");
})