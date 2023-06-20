const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 8080;

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

io.on('error', (error) => {
  if (error.code === 'ECONNRESET') {
    console.log('Connection reset by client');
  } else {
    console.error('Socket.IO error:', error);
  }
});
