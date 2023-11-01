const EventManager = require('./eventManager');

const eventManager = new EventManager();

eventManager.registerEvent('Webinar on Node.js', 5000); // Example event with a 5-second delay
eventManager.subscribeToEvent('Webinar on Node.js', 'Alice'); // Alice subscribes to the event

eventManager.on('eventStart', (eventName) => {
    console.log(`Event '${eventName}' has started!\n`);
});

eventManager.startEvent('Webinar on Node.js'); // Simulate the event starting

setTimeout(() => {
    eventManager.unsubscribeFromEvent('Webinar on Node.js', 'Alice'); // Alice unsubscribes after 3 seconds
}, 3000);
