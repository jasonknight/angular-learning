var express = require('express');
var path = require('path');

var app = express();
var root = path.normalize(__dirname + "/../");

app.use(express.static(root + "/app"));

app.listen(8000);
console.log("Listening on port 8000\n");
