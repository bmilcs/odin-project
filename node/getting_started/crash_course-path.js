#!/usr/bin/node

const path = require("path");

// base file name
console.log("full path:\t", __filename);
console.log("basename:\t", path.basename(__filename));

// directory name
console.log("dirname:\t", path.dirname(__filename));

// file extension
console.log("extname:\t", path.extname(__filename));

// path object
console.log("path obj:\t", path.parse(__filename));

// concatenate paths with the correct deliminator
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
