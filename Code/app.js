var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('Code/public'));

app.get('/', function(_request, response){
  response.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('pamela', function(message){
    io.emit('PIZZA', message);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
