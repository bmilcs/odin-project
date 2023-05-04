#!/usr/bin/node

const EventEmitter = require("events");

// create emitter class
class MyEmitter extends EventEmitter {}

// init obj
const myEmitter = new MyEmitter();

// event listener
myEmitter.on("event", (data) => console.log("event fired!", data));

// init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");

// logger module example
const Logger = require("./crash_course-logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log("logger.log(message)", data);
});

logger.log("Hello world.");
