var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 3000;
app.use(express.static('public'));
server.listen(port, () => {console.log('Server listening', port)});