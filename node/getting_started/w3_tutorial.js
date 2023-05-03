#!/usr/bin/node

//
// built-in module: http
//

const http = require("http");
const fs = require("fs");
const { URL } = require("node:url");
// custom module
const customModule = require("./w3_custom_module");
const { URLSearchParams } = require("url");
const { EventEmitter } = require("stream");

http
  .createServer((req, res) => {
    fs.readFile("w3.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      // add http header
      res.writeHead(200, { "Content-Type": "text/html" });

      // write file to page
      res.write(data);

      // use custom module: save date to log
      const date = customModule.myDateTime().toString();

      fs.appendFile("w3.log", `${date}\n`, (err2) => {
        if (err2) {
          console.log("unable to write to log!");
          console.log(err2);
          throw err2;
        }
      });

      // read the query string
      const path = req.url;
      const host = req.headers.host;

      res.write(`<p>req.headers.host: ${host}</p>`);
      res.write(`<p>req.url: ${path}</p>`);

      // create url object
      const url = new URL(req.url, `http://${host}`);
      res.write(`<p>URL.toString(): ${url.toString()}</p>`);

      return res.end();
    });
  })
  .listen(8000);
