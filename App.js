var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 3000;
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");
server.listen(port, () => {
  console.log('Server listening', port)
});

app.get("/",  (req, res) => {
  res.render("home");
});