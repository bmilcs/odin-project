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

## Asynchronous API's

Synchronous code: operation must complete before the next operation can start

Asynchronous code: start an operation & immediately return _before the operation is complete_

Non-blocking asynchronous API's are more important on Node than in the browser because:

- Node is a single-threaded & event-driven execution environment
- All server requests are run on the same thread
  - NOT spawned off into separate processes
- Extremely efficient in terms of speed & resources
- However, expensive synchronous code will block the **current request** & **every other request handled by your web app**

### [**Fixing Callback Hell**](http://callbackhell.com/)

Give anonymous functions names

- Easier to read
- When exceptions occur, you get a reference to an actual function name (not anonymous)
- Allows you to move functions & reference them by name

Modularize

- Write small modules that do one thing
- Assemble them into other modules that do a bigger thing
- Easier to understand

Handle Every Single Error

- Makes code more stable
- Plan on them always happening
- Node.js Style: First argument = error
  - Helps you remember to handle errors

```js
function handleFile(error, file) {
  if (error) return console.error("Uhoh, there was an error", error);
  // otherwise, continue on and use `file` in your code
}
```

Summary

- **Don't Nest Functions**: give them names, top level of your app
- **Use function hoisting**: move functions _below the fold_
- **Handle every single error**: use a linter
- **Create reusable functions & place them in a module**: reduce cognitive load required to understand your code. It helps with:
  - Error handling
  - Testing
  - Forces you to create a stable & documented public API for your code
  - Refactoring

### Alternatives to Callbacks

- [`async` module](https://www.npmjs.com/package/async)
- `Promise`
- `async`/`await`

## Creating Route Handlers

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

We define a callback route handler function for HTTP `GET` requests to the site root `/`.

- `req` & `res` objects as arguments
- `.send()` method on the response object returns a string
  - Other response methods include: `.json()`, `.sendFile()`

_Express application_ object provides methods to define route handlers _for all other HTTP verbs_:

- `checkout()`
- `copy()`
- **`delete()`**
- **`get()`**
- `head()`
- `lock()`
- `merge()`
- `mkactivity()`
- `mkcol()`
- `move()`
- `m-search()`
- `notify()`
- `options()`
- `patch()`
- **`post()`**
- `purge()`
- **`put()`**
- `report()`
- `search()`
- `subscribe()`
- `trace()`
- `unlock()`
- `unsubscribe()`

Special method: `app.all()` is called in response to **any HTTP method**

- Used for loading middleware functions at a particular path for all req methods

Example: Handler that will be executed for requests to `/secret`, regardless of the HTTP verb:

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

**Routes** allow us to:

- match patterns of characters in a URL
- extract values from the URL
- pass extracted values to the route handler

Grouping route handlers & accessing them via a common route-prefix is useful:

- Achieved in Express by using `express.Router` object
- Adding routes to `Router` object is just like using the `app` object

Example: **Wiki route module**

```js
// wiki.js
const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

**Main app**: Require route model & call `use()` method on Express app to add the router to **the middleware handling path**

- The above paths `/` & `/about` will be accessed from `/wiki/` & `/wiki/about/`

```js
// app.js
const wiki = require("./wiki,js");
app.use("/wiki", wiki);
```

## Using Middleware

Middleware is used extensively in Express apps:

- Serving static files
- Error handling
- Compressing HTTP responses

Route functions end the HTTP request-response cycle by returning a response to the HTTP client.

Middleware functions _typically_:

- perform an operation on the request or response object
- then call the `next()` function in the "stack", which may be more middleware OR a route handler
- the order = up to the developer
- _can also end the request-response cycle_
- if it doesn't end the cycle, it _must_ call `next()` to pass control to the next middleware function

Most apps use **third party middleware** to simplify common web dev tasks:

- cookies
- sessions
- user authentication
- accessing request `POST` & JSON data
- logging
- etc.

[Express team's middleware packages](https://expressjs.com/en/resources/middleware.html)

Using third party middlware:

```sh
npm install morgan
```

```js
const express = require("express");
// import third party middleware
const logger = require("morgan");
const app = express();

// use third party middleware
app.use(logger("dev"));
```

Middleware/routing functions are called in the order they're declared

- Order is important for some
- Almost always call middleware before setting routes
  - or route handlers will not have access to functionality added by middleware

Middleware = Routes, except middleware functions have a third argument `next`

```js
const express = require("express");
const app = express();

// example middleware function
const a_middleware_function = function (req, res, next) {
  // perform some operations
  next(); // call next() so Express will call the next middleware function in the chain.
};

// all routes and verbs: use the middleware
app.use(a_middleware_function);

// specific route / all verbs: use the middleware
app.use("/someroute", a_middleware_function);

// specific route and HTTP verb: use the middleware
app.get("/", a_middleware_function);

app.listen(3000);
```

## Serving Static Files

`express.static` middleware is used to serve up static files:

- images
- css
- javascript

To serve the above files from a directory named `/public`:

```js
app.use(express.static("public"));
```

Any files in the public directory are served by adding filenames, relative to the basic directory:

```sh
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

`.static()` can be called multiple times.

- if a file can't be found in one middleware function, it is passed to the next middleware function
- in the order that they're declared

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Virtual prefixes can also be used for static URLs:

```js
app.use("/media", express.static("public"));
```

```sh
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

## Error Handling

Errors are handled by special middleware functions that have **four arguments**, instead of three: `(err, req, res, next)`:

- **Must be the last middleware in the request handling process!!**
- **At the end of the middlware function stack!**

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Express has a built-in error handler that takes care of any remaining errors.

- If an error is passed to `next()` and you don't handle it, it will be handled by Express
  - The error is written to the client with the stack trace
  - Stack trace is not included in the production environment. Add it using `NODE_ENV='production'`
- HTTP404 & other error status codes are not treated as errors
  - Add a middleware function for these

## Using Databases

Express can use any database mechanism supported by Node.

- PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

To use a database, install the database driver via npm:

```sh
npm install mongodb
```

The database can be installed locally or on a cloud server.

```js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
```

Another approach is accessing databases indirectly:

- "ORM": Object Relational Mapper
- Define data as objects or models
- ORM maps these to database format
- Allows us to think in terms of JS objects, instead of db semantics
- Obvious place to perform validation & check incoming data

## Rendering Views

Template Engines AKA View Engines:

- Specify structure of an output document in a template
- Use placeholders for data that's filled in when a page is generated
- Often used to create HTML, but can create other documents as well
- [Express supports several template engines](https://github.com/expressjs/express/wiki#template-engines)

Example:

```js
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");

// template file named "index.<template_extension>" that contains
// placeholders for data variables named 'title' and "message",
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

## Setting up Node/Express Dev Environment

- Install [node version manager](https://github.com/nvm-sh/nvm#install--update-script)
- Install LTS version of node: `nvm install --lts`
- Install latest `npm` version: `npm install -g npm@latest`
- `nvm list` shows downloaded set of version/current version

Creating a new project:

```sh
mkdir myapp
cd myapp

# create package.json
npm init

# install express
npm install express

# install dev dependencies
npm install eslint --save-dev
```

```js
// index.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```

```sh
# run app
node index.js
```

### Installing Express Application Generator

Install globally:

```sh
npm install express-generator -g
```

Create an Express app

- Makes a subfolder w/ the apps name

```sh
# view all the options
express --help

# create the app
express <app_name>

# install dependencies
cd <app_name>
npm install

# run the app
# Linux/macOS
DEBUG=helloworld:* npm start
```

## Express 101

**Templating Engine**: tool, allows you to insert variables & logic into your views

- Header updates w/ user's name once logged in

Options for tutorial:

- [Pug (formally known as Jade)](https://pugjs.org/)
- [ejs](https://ejs.co/)

Middleware: plain JavaScript function that executes between request & response (or in **the middle**)

- Executed in order

Middleware Examples:

- Logger, prints request details to console
- Authenticator, checks to see if user is logged in or has permissions
- Static File Server

```js
function(req, res, next) {
  // do stuff!
}
```

[`req` or `request`](https://expressjs.com/en/4x/api.html#req): object that contains data about the incoming request:

- exact url visted
- url parameters
- body of the request (form w/ data in it)

[`res` or `response`](https://expressjs.com/en/4x/api.html#res): object that repesents the response that Express is going to send back to the user

- use info in `req` to determine what to do with `res`
- `res.send()`, etc.

`next`: middlware functions that don't send a response require a `next()` function call, forcing it to move to the next middleware in the stack.

```js
const myLogger = function (req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next(); // THIS IS IMPORTANT!
};

app.use(myLogger);
```

`app.use()` loads middleware functions into Express

- always run in order
