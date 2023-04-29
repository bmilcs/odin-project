#!/usr/bin/node
// const axios = require("axios");
const https = require("https");
const axios = require("axios");

//
// GET: axios 3rd party package
//

// axios
//   .get("https://catfact.ninja/fact")
//   .then((res) => {
//     console.log(`status code: ${res.status}`);
//     console.log(res.data);
//     // console.log(res);
//   })
//   .catch((e) => {
//     console.log(console.error(e));
//   });

//
// POST: axios 3rd party package
//

// axios
//   .post("https://whatever.com/todos", { todo: "Buy the milk" })
//   .then((res) => {
//     console.log(`status code: ${res.statusCode}`);
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

//
// GET: built-in https module from nodejs
//

// const options = {
//   hostname: "catfact.ninja",
//   port: 443,
//   path: "/fact",
//   method: "GET",
// };

// const req = https.request(options, (res) => {
//   console.log(`status code: ${res.statusCode}`);

//   res.on("data", (data) => {
//     process.stdout.write(`https module data:\n${data}`);
//   });
// });

// req.on("error", (error) => {
//   console.error(error);
// });

// req.end();

const data = JSON.stringify({
  todo: "Buy the milk",
});

const options = {
  hostname: "whatever.com",
  port: 443,
  path: "/todos",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`status code: ${res.statusCode}`);

  res.on("data", (data) => {
    process.stdout.write(data);
  });

  res.on("error", (error) => {
    console.error(error);
  });
});

req.write(data);
req.end();
