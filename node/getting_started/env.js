#!/usr/bin/node
require("dotenv").config();

// * we can also set env vars during runtime:
// USER_NAME="bryan" node app.js

process.env.USER_ID;
process.env.USER_KEY;
process.env.NODE_ENV;

console.log(process.env.USER_ID, process.env.USER_KEY, process.env.NODE_ENV);
