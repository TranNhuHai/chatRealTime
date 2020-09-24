var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");
server.listen(port, () => {
  console.log('Server listening', port)
});

io.on('connection', socket => {

  console.log(socket.id + " connecting...");

  socket.on('disconnect', () => {

    console.log(socket.id + " disconnected.");

  });
});
app.get("/", (req, res) => {
  res.render("home");
});