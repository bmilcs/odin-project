#!/usr/bin/node

const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash",
);

myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log({ myURL });

const params = new URLSearchParams("user=abc&query=xyz");

console.log({ params });
