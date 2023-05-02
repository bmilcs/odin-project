#!/usr/bin/node

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("event", (a, b) => {
  setImmediate(() => {
    console.log("this happens asynchronously");
  });

  console.log("this happens synchronously!");
});

myEmitter.emit("event", "a", "b");
