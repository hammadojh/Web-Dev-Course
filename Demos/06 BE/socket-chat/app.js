const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', message);
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});