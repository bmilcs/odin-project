#!/usr/bin/node

const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "/crash_test"), (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// create & write to file
// fs.writeFile(
//   path.join(__dirname, "/crash_test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;

//     console.log("File written");

//     // file append
//     fs.appendFile(
//       path.join(__dirname, "/crash_test", "hello.txt"),
//       "I <3 NodeJS!",
//       (err2) => {
//         if (err2) throw err2;

//         console.log("File appended");
//       },
//     );
//   },
// );

// read file
// fs.readFile(
//   path.join(__dirname, "/crash_test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;

//     console.log("File read:", data);
//   },
// );

// rename file
fs.rename(
  path.join(__dirname, "/crash_test", "hello.txt"),
  path.join(__dirname, "/crash_test", "hello_world.txt"),
  (err) => {
    if (err) throw err;
    console.log("renamed!");
  },
);
