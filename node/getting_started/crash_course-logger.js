#!/usr/bin/node

const EventEmitter = require("events");
const uuid = require("uuid");

// create emitter class
class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
