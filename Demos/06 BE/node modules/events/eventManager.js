const EventEmitter = require('events');

class EventManager extends EventEmitter {
    constructor() {
        super();
        this.events = new Map(); // Map to store event information (name, startTime, subscribers)
    }

    registerEvent(eventName, startTime) {
        this.events.set(eventName, {
            startTime,
            subscribers: new Set(),
        });
    }

    subscribeToEvent(eventName, userName) {
        const event = this.events.get(eventName);
        if (event) {
            event.subscribers.add(userName);
            this.emit('subscription', userName, eventName);
        }
    }

    unsubscribeFromEvent(eventName, userName) {
        const event = this.events.get(eventName);
        if (event) {
            event.subscribers.delete(userName);
            this.emit('unsubscription', userName, eventName);
        }
    }

    startEvent(eventName) {
        const event = this.events.get(eventName);
        if (event) {
            setTimeout(() => {
                this.emit('eventStart', eventName);
            }, event.startTime);
        }
    }
}

module.exports = EventManager;
