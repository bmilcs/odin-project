# Express

Express: the tiny & simple Node framework

- Handles HTTP verbs with different URL paths / routes
- Integrates w/ "view" engines: generate respones by inserting data in templates
- Set common web app settings: port, template location
- Add request processing "middleware" anywhere in the request handling pipeline
- Unopinionated

Hello World:

```js
// create an express app by importing express module
const express = require("express");
const app = express();
const port = 3000;

// route definition
app.get("/", function (req, res) {
  // send response string
  res.send("Hello World!");
});

// start server on a port
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
```

To creating your own custom modules, we must **expose** functions _as properties_ on the `exports` object

```js
// square.js: create modules
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};

// app.js: import modules
const square = require("./square");
```

Export a complete object in one assignment, instead of building it one property at a time:

- Assign it to `module.exports`

```js
module.exports = {
  area(width) {
    return width * width;
  },

  perimeter(width) {
    return 4 * width;
  },
};
```

`exports` is

- a shortcut to `module.exports` within a given module.
- a variable that gets initialized to the value of `module.exports` before the module is evaluated
- holds a reference to the same object referenced by `module.exports`
- **assigning another value to `exports` will make it NO LONGER BOUND to `module.exports`**
