// Main program (app.js)

const eventEmitter = require('./eventEmitter');

// Register event listeners
eventEmitter.on('userLoggedIn', (username,number) => {
    console.log(`User ${username} logged in.`);
});

// Simulate events every 0.5 seconds
setInterval(() => {
    eventEmitter.emit('userLoggedIn', 'Bob', 1);
}, 500);