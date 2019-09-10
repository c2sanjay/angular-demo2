var express = require('express');
var app = express();
var bodyParser = require('body-parser');

global.__basedir = __dirname;

require('./app/uploadfile/upload.multipartfile.js')(app);

// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})