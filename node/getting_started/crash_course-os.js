#!/usr/bin/node

const os = require("os");

// platform
console.log("os.platform()", os.platform());

// cpu architecture
console.log("os.arch()", os.arch());

// cpu core info
console.log("os.cpus()", os.cpus());

// free memory
console.log("os.freemem()", os.freemem());

// total memory
console.log("os.totalmem()", os.totalmem());

// home dir
console.log("os.homedir()", os.homedir());

// uptime
console.log("os.uptime()", os.uptime());
