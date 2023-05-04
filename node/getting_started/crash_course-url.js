#!/usr/bin/node

const url = require("url");

const myUrl = new URL(
  "http://www.mysite.com:8000/hello.html?id=100&status=active",
);

// serialized url
console.log("href", myUrl.href);
console.log("toString", myUrl.toString());

// host
console.log("host", myUrl.host);
console.log("hostname", myUrl.hostname);

// path
console.log("pathname", myUrl.pathname);

// serialized query
console.log(myUrl.search);

// create searchparams obj
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
