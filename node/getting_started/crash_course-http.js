#!/usr/bin/node

const http = require("http");
const path = require("path");
const fs = require("fs");

// create server object
const server = http.createServer((req, res) => {
  console.log("req.url:", req.url);

  // build dynamic path
  const filePath = path.join(
    __dirname,
    "crash_test",
    req.url === "/" ? "index.html" : req.url,
  );

  // get extension of file
  const extName = path.extname(filePath);

  // initial content type
  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, data) => {
    console.log(filePath);
    if (err) {
      if (err.code === "ENOENT") {
        console.log("File not found", filePath, extName);

        fs.readFile(
          path.join(__dirname, "crash_test/", "404.html"),
          "utf-8",
          (err2, data2) => {
            if (err2) throw err;

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data2, "utf-8");
          },
        );
      } else {
        console.log("Server error");

        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });

  console.log(extName);
  console.log(filePath);

  // ! INEFFICIENT CODE:
  // // index page
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "/crash_test", "index.html"),
  //     // "utf-8",
  //     (err, data) => {
  //       if (err) throw err;

  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     },
  //   );
  // }

  // // api
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Bob Smith", age: 40 },
  //     { name: "John Doe", age: 20 },
  //   ];

  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));

  //   console.log(req);
  // }
});

// listen on a port number
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
