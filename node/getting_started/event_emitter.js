#!/usr/bin/node

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// triggered when a new listener is added
myEmitter.on("newListener", (eventName, listener) => {
  console.log(`listener added:\t\t${eventName}`);
});

// triggered when a listener is removed
myEmitter.on("removeListener", (eventName, listener) => {
  console.log(`listener removed:\t${eventName} ${listener}`);
});

// triggered when boring event occurs
myEmitter.on("boring", (a, b) => {
  setImmediate(() => {
    console.log("> boring: asynchronously", a, b);
  });

  console.log("> boring: synchronously", a, b);
});

// triggered on "tick" & can only occur once
myEmitter.once("tick", () => console.log("> tick tick tick"));

// triggered on explosion event
const explode = () => console.log("> boooooooom");
myEmitter.addListener("explode", explode);

myEmitter.prependListener("tick", (stream) => {
  console.log("> someone lit the fuse!!!");
});

// manually trigger an event:
myEmitter.emit("boring", "apple", "bacon");

// max # of listeners
console.log("getMaxListeners:\t", myEmitter.getMaxListeners());

// list listeners for an event
console.log("listeners('explode'):\t", myEmitter.listeners("explode"));

// get all event names for the emitter
console.log("eventNames:\t\t", myEmitter.eventNames());

// tick tick tick boom
myEmitter.emit("tick");
myEmitter.emit("explode");

// turn off an event
myEmitter.off("explode", explode);

// list current eventNames
console.log("eventNames():\t", myEmitter.eventNames());
