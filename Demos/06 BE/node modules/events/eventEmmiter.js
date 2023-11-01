// Custom event emitter module (eventEmitter.js)

const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const eventEmitter = new CustomEventEmitter();

module.exports = eventEmitter;
