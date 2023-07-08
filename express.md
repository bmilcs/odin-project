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

## MDN Express Local Library Notes

```sh
express express-locallibrary-tutorial --view=pug

cd express-locallibrary-tutorial
npm install

npm install --save-dev nodemon
```

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Express app breakdown:

- Entry point: `/bin/www`
  - Sets up error handling
  - Loads `app.js`
- Routes: `/routes`
- Templates: `/views`

Package.json:

- cookie-parser
- debug
- morgan
- http-errors

## Mongoose

Install

```sh
npm install mongoose
```

### Connecting to a database

```js
// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}

// Get the default Connection object
mongoose.connection;

// Create additional connections & immediately return
mongoose.createConnection(mongoDB);

// Create additional connections & wait for connection to be established
mongoose.createConnection(mongoDB).asPromise();
```

### Defining schemas

```js
// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

// Create a new schema instance with the Schema constructor
const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

### Creating a model

```js
// Define schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema with the model() method
// Mongoose creates a database collection for SomeModel
const SomeModel = mongoose.model("SomeModelAkaCollection", SomeModelSchema);
```

### Schema Fields

- Arbitrary number of fields
- Each one represents a field in the documents stored in MongoDB

```js
const schema = new Schema({
  // field name: type as key
  name: String,
  binary: Buffer,
  living: Boolean,
  // field name: object, defining type & other options
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

Other schema field examples include:

- `ObjectId`
- `Mixed`: arbitrary schema type

Schema fields can be defined as `fieldname: type` OR an object with options:

- `type: string`
- `min: 1`, `max: 2`: built-in & custom validators
- `required: true`: required fields
- `lowercase: true`, `trim: true`: string field options

- `enum`: specify allowed values
  - ie: `["Good", "Bad", "Super"]`
- `default`: one of the above enum values

### Validation

- Set custom validators & error messages

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});
```

With Mongoose, you can add [instance methods, statics & query helpers](https://mongoosejs.com/docs/guide.html#methods) to your models.

### Creating & Modifying Documents

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

To create & save an instance at the same time:

```js
await SomeModel.create({ name: "also_awesome" });
```

Every model has an associated connection (the default connection when you use `mongoose.model()`)

- Create a new connection
- Call `.model()` on it to create the documents on a different db

To access the fields in this new record:

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

### Searching for Records

Query methods are used for searching records

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

Query APIs (ie: `find()`) return a variable of the type `Query`. You can build up a query in parts before executing it:

```js
// find all athletes that play tennis
const query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec();
```

We can also chain parts of our query together using `.` dot operator:

```js
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec();
```

Query methods:

- `find()` = all matching records
- `findById()` = find a single record by id
- `findByIdAndRemove()`
- `findByIdAndUpdate()`
- `findOneAndRemove()`
- `findOneAndUpdate()`

### Working with Related Documents - Population

We can create references between one document/model instance & another using:

- `ObjectId` schema field
- `ObjectIds` array (one to many)

If you need the actual content of the document, `.populate()` method in a query replaces the id with the actual data.

Example:

- authors & stories
- author can have multiple stories
- stories can have 1 author

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);

// Create an author
const bob = new Author({ name: "Bob Smith" });
await bob.save();

// Bob now exists, so lets create a story
const story = new Story({
  title: "Bob goes sledding",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();

// Get author information from the story:
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

The author's `stories` array doesn't contain the new story.

To access the stories for a given author:

1. Add our story to stories array => 2 places where stories/authors needs to be maintained
2. Better way: get author's `_id` & `find()` to search fir this across the author field across all stories:

```js
Story.find({ author: bob._id }).exec();
```

### One Schema/Model Per File

Define each model schema in its own module & export it:

```js
// File: ./models/somemodel.js

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema);
```

Then, require it & use the model immediately elsewhere:

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/somemodel");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

### Adding Mongodb to Projects

1. Atlas: Create db & collection
2. Get connection string:

```sh
mongodb+srv://<user>:<password>@cluster0.rv32dqm.mongodb.net/?retryWrites=true&w=majority
```

3. Add the name of the collection to the URL before the options:

```sh
mongodb+srv://<user>:<password>@cluster0.rv32dqm.mongodb.net/<COLLECTION>?retryWrites=true&w=majority

# with local_library
mongodb+srv://<user>:<password>@cluster0.rv32dqm.mongodb.net/local_library?retryWrites=true&w=majority
```

4. Install mongoose

```sh
npm install mongoose
```

5. Connect to the db:

```js
// /app.js
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "insert_your_database_url_here";

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

## Express Async Handler

`express-async-handler`: defines a wrapper function that **hides the `try...catch` block**

Install

```sh
npm install express-async-handler
```

Instead of writing this:

```js
exports.get("/about", function (req, res, next) {
  try {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "About", list: successfulResult });
  }
  catch (error) {
    return next(error);
  }
};
```

You can write this:

```js
// Import the module
const asyncHandler = require("express-async-handler");

exports.get(
  "/about",
  asyncHandler(async (req, res, next) => {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "About", list: successfulResult });
  }),
);
```

## Form Handling

```sh
npm install express-validator
```

```js
const { body, validationResult } = require("express-validator");

[
  // …
  body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
  // …
];

[
  // …
  body("age", "Invalid age").optional({ values: "falsy" }).isISO8601().toDate(),
  // …
];

[
  // …
  body("name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Name empty.")
    .isAlpha()
    .withMessage("Name must be alphabet letters."),
  // …
];

asyncHandler(async (req, res, next) => {
  // Extract the validation errors from a request.
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // There are errors. Render form again with sanitized values/errors messages.
    // Error messages can be returned in an array using `errors.array()`.
  } else {
    // Data from form is valid.
  }
});
```

## Express 102: CRUD and MVC

CRUD stands for _Create, Read, Update & Delete_.

- Four basic functions built into database driven apps
- Roughly correlate to HTTP methods you can employ in an Express app
  - `create` => `POST` or `app.post()`
  - `read` => `GET` or `app.get()`
  - `update` => `PUT` or `app.put()`
  - `delete` => `DELETE` or `app.delete()`

MVC: _Model, View, Controller_.

- Architecture of your code
- Way of organizing an application by separating actions into 3 main components

Models: building blocks of your database

- Define types of info that get used by views & controllers
- For every entry in your DB (books, author, etc.), you create a model that holds the details of that entry

Views: generates UI for your app

- Templating engine that uses data supplied by a controller

Controllers: decide what to display & what info is going to be put in it

MVC Example: photo uploading site

- Users can upload & view photos listed on an index
- Model for photos: define how photos are stored in the DB
  - Photo objects should have a `filename`, `URL`, `date-created`
- Two views: index & display-photo view, which displays a single photo
- Controller: called by Express whenever we get an `app.get()` request
  - Uses details of the request to determine which view is shown & what image is displayed, depending if the index or specific photo page is requested

## Deployment

PaaS: Platform as a Service

- Specific hosting provider
- Easier & approachable for beginners
- Manage low level details with underlying server infrastructure

PaaS are like landlords:

- Take care of all utilities, building maintenance & security

### PaaS Instances

Instances are virtual "computers" that run your app.

One instance = single instance of your app running at one time. This is similar to using localhost.

Multiple instances = several copies of your app running simultaneous to handle more traffic.

### PaaS Databases

PaaS provide databases.

- Spin up a DB for you: all configuration & setup
- Many provide:
  - auto backups
  - security patches

## Routes

**Routes**: section of Express code that associates HTTP verbs, a URL pattern/path & a function that is called to handle that pattern.

### `express.Routes` Middleware

`express.Routes` allows us to:

- group route handlers for a part of a site together
- access them w/ a common route prefix

To use a router module, we use the `use` method:

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

Route functions are defined in a route module:

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Router functions must either:

- Complete the request with a response: `res.send()`, `res.json()`, `res.sendFile()`, `res.render()` etc. or
- Call `next()`

Route handlers can contain string patterns or regex.

Route parameters:

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  // ...
  res.send(req.params);
});
```

Handling errors:

```js
router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
  });
});
```

Using `express-async-handler`:

```js
// Import the module
const asyncHandler = require("express-async-handler");

exports.get(
  "/about",
  asyncHandler(async (req, res, next) => {
    const successfulResult = await About.find({}).exec();
    res.render("about_view", { title: "About", list: successfulResult });
  }),
);
```

Express Async Handler:

- wrapper function that hides the try/catch block & code to forward to the error
- only need to write code for success cases

## Controllers

To fetch multiple documents from MongoDB in parallel (at the same time):

```js
// ...
exports.index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);
// ...
```

Custom error handling:

```js
// Display detail page for a specific Genre.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  // Get details of genre and all associated books (in parallel)
  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(req.params.id).exec(),
    Book.find({ genre: req.params.id }, "title summary").exec(),
  ]);
  if (genre === null) {
    // No results: custom error
    const err = new Error("Genre not found");
    err.status = 404;
    return next(err);
  }

  res.render("genre_detail", {
    title: "Genre Detail",
    genre: genre,
    genre_books: booksInGenre,
  });
});
```

## Forms

- `action`: where form data is sent
- `method`: post (update db), get (search)

```js
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team."
  />
  <input type="submit" value="OK" />
</form>
```

Order of operations:

- Client requests form page
- Server sends empty form page to client
- Client fills out form & submits it
- Server validates data
  - If invalid, Server creates form with user entered data & error messages
  - If valid, Server performs actions on valid data & redirects client to success page

Form Validation: `express-validator` package

```js
const { body, validationResult } = require("express-validator");

body("name", "Empty name").trim().isLength({ min: 1 }).escape(),

body("age", "Invalid age")
  .optional({ values: "falsy" })
  .isISO8601()
  .toDate(),

body("name")
  .trim()
  .isLength({ min: 1 })
  .withMessage("Name empty.")
  .isAlpha()
  .withMessage("Name must be alphabet letters."),
```

`body([fields, message])`:

- specifies fields in request body (POST parameter)
- validate and/or sanitizes the data
- optional error message that can be displayed if test fails

To run the validation & make errors available via a `validation` result object:

```js
asyncHandler(async (req, res, next) => {
  // Extract the validation errors from a request.
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // There are errors. Render form again with sanitized values/errors messages.
    // Error messages can be returned in an array using `errors.array()`.
    const errorMsgs = errors.array();
  } else {
    // Data from form is valid.
  }
});
```

## Deployment (MDN)

Getting ready for deployment:

- Security
- Performance

Bare minimum:

- Remove stack traces from error pages
- Tidy up logging
- Set appropriate headers to avoid common security threats

[Express Best Practices: performance/reliability](https://expressjs.com/en/advanced/best-practice-performance.html)
[Express Best Practices: security](https://expressjs.com/en/advanced/best-practice-performance.html)

### NODE_ENV Production

Set NODE_ENV to 'production':

- removes stack traces in error pages
- caches view templates & css files
- can improve performance by a factor of 3

Set this by using:

- `export`
- env file
- OS initialization system

### Logging Calls

Logging calls = impact on high-traffic sites.

Minimize "debug" logging in production by using `debug` module.

```js
// require debug package w/ "author"
const debug = require("debug")("author");

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id).exec();
  if (author === null) {
    // Debug variable: declared w/ author name & prefix "author"
    debug(`id not found on update: ${req.params.id}`);

    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_form", { title: "Update Author", author: author });
});
```

Enable a set of logs by specifying them as a comma-separated list in the DEBUG environment variable:

```sh
export DEBUG="author,book"
```

> Replace any console.log() calls in your code with logging via the debug module.

### Compression

Web servers can often compress the HTTP response sent back to a client, significantly reducing the time required for the client to get and load the page.

Use gzip/deflate compression for responses:

```sh
npm install compression
```

```js
// app.js
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
const compression = require("compression");

// Create the Express application object
const app = express();

// …

app.use(compression()); // Compress all routes

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// …
```

### Helmet: Vulnerability Protection

Helmet is a middleware package. It can set appropriate HTTP headers that help protect your app from well-known web vulnerabilities (see the docs for more information on what headers it sets and vulnerabilities it protects against).

```sh
npm install helmet
```

Normally, we just use:

```js
const helmet = require("helmet");

const app = express();

app.use(helmet());
```

However, jQuery & bootstrap violate helmet's default Content Security Policy (CSP), which prevents cross-site scripts. To get around this:

```js
const compression = require("compression");
const helmet = require("helmet");

// Create the Express application object
const app = express();

// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and Jquery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);
```

### Rate Limiting to API routes

`express-rate-limit` is a middleware package that can be used to limit repeated requests to APIs and endpoints.

```sh
npm install express-rate-limit
```

```js
const compression = require("compression");
const helmet = require("helmet");

const app = express();

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

// …
```

Cloudflare and other 3rd party services provide more advanced protection against DDoS/other attacks.

## Authentication

Packages:

```sh
npm install express express-session mongoose passport passport-local ejs
```

### App.js

Note: Plain text passwords are a **really bad idea.**

```js
/////// app.js

const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoDb = "...";
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  }),
);

const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// sign up
app
  .route("/sign-up")
  .get((req, res) => res.render("sign-up-form"))
  .post(async (req, res, next) => {
    try {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
      });
      const result = await user.save();
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  });

app.get("/", (req, res) => res.render("index"));

app.listen(3000, () => console.log("app listening on port 3000!"));
```

`passportJS` uses **Strategies** to authenticate users.

- Over 500 strategies available
- `LocalStrategy`: username-and-password

To authenticate, we need to add 3 functions to app.js & `app.post` for `/log-in`.

### Function 1: Setup LocalStrategy

- Called when we use `passport.authenticate()`
- Takes user/pass & tries to find it in our DB
- Makes sure the user password matches given password
  - If it works out, it authenticates our user and moves on
- - Not called directly, so we don't have to supply the `done()` function
  * `done()` acts like middleware and is called when we ask passport to do authentication later

```js
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);
```

### Functions 2 & 3: Session & Serialization

Passport needs to create a **cookie** stored in the user browser to make sure our user:

- is logged in
- allow them to **stay** logged in

These functions define info needed by passport when it **creates** & **decodes** the cookie

- Required so we can make sure the data it's looking for is in our database
- NOT called by us on our own
- Used in the background by passport

```js
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
```

Example form & route:

```html
<!-- index.ejs -->
<h1>please log in</h1>
<form action="/log-in" method="POST">
  <label for="username">Username</label>
  <input name="username" placeholder="username" type="text" />
  <label for="password">Password</label>
  <input name="password" type="password" />
  <button>Log In</button>
</form>
```

```js
app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  }),
);
```

All we have to do is call `passport.authenticate()`.

- Middleware: performs numerous functions behind the scene
- Looks at `req.body` for parameters: `username` & `password`
- Runs `LocalStrategy`: looks for user/pass in the database
- Creates a session cookie & stores it in user's browser
  - Cookie can be accessed in all future requests to see if the user is logged in
- Can also redirect to different routes based on login result: success/fail

```js
app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});
```

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <% if (user) {%>
    <h1>WELCOME BACK <%= user.username %></h1>
    <a href="/log-out">LOG OUT</a>
  <% } else { %>
    <h1>please log in</h1>
    <form action="/log-in" method="POST">
      <label for="username">Username</label>
      <input name="username" placeholder="username" type="text" />
      <label for="password">Password</label>
      <input name="password" type="password" />
      <button>Log In</button>
    </form>
  <%}%>
</body>
</html>
```

```js
app.get("/log-out", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
```

You can set/access local variables throughout your entire app (even views) with the `locals` object.

- Write custom middleware
- Simplify how we access our current user in our views

```js
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
```

- Insert this code somewhere **between instantiating passport middleware & BEFORE you render your views**
- Gives access to `currentUser` variable in all views
- Won't have to manually pass it
