var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('This is simple server by Express');
});

var server = app.listen(3000, function () {
});

