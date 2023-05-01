#!/usr/bin/node

const fs = require("fs");
const fsp = require("fs/promises");

const fileName = ".env";
const encoding = "utf-8";

// default, asynchronous

// fs.readFile(fileName, encoding, (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(data);
// });

// synchronous: code blocking

// try {
//   const data = fs.readFileSync(fileName, encoding);
//   console.log(data);
// } catch (e) {
//   console.error(e);
// }

// promise-based asynchronous

async function example() {
  try {
    const data = await fsp.readFile(fileName, { encoding: encoding });
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

example();
