// Importing necessary modules
const express = require('express'); // Express framework to handle HTTP requests
const http = require('http'); // HTTP module to create an HTTP server
const socketIO = require('socket.io'); // Socket.IO library for real-time communication

// Initializing the Express application
const app = express();
// Creating an HTTP server using the Express application
const server = http.createServer(app);
// Attaching Socket.IO to the HTTP server
const io = socketIO(server);

// Serving static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Handling a new Socket.IO connection
io.on('connection', socket => {
    console.log('New client connected'); // Log when a new client connects

    // Event listener for when the client disconnects
    socket.on('disconnect', () => {
        console.log('Client disconnected'); // Log when a client disconnects
    });

    // Event listener for receiving a message from a client
    socket.on('message', (message) => {
        console.log(message); // Log the received message
        io.emit('message', message); // Broadcast the message to all connected clients
    });
});

// Starting the server on port 3000
server.listen(3000, () => {
    console.log('Server running on port 3000'); // Log the server start
});