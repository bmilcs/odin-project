# NodeJS

- Back-end: behind the scenes, on a web server
  - "Data access layer"
- Run any language you want because it doesn't rely on user's browser
- Popular choices: PHP, C#, Ruby, Python, Java

Back-end Processes:

- Processing incoming webpage requests
- Running script (PHP, ASP, JSP) to generate HTML
- Access data from database, SQL queries
- Storing/updating records in database
- Encrypting/decrypting data
- Handling file uploads/downloads
- Processing user input via JavaScript

Back-end consists of:

- Server
- App: listens for requests, retrieves info from db & sends response
- Database

## Frameworks

Frameworks:

- Batch recycled code together (duplicate features across most web apps)
  - User Authentication, Pages that render, Database connections, profiles, feeds of info
- Provide great organization & structure
- Modular & clean
  - Add features with minimal effort
- By default, you're given
  - Dozens of organized folders
  - Good practice to follow: Model-View-Controller (MVC)
- Examples: Ember, Meteor, Django, Rails, Grok

Selecting a framework considerations:

- Effort to learn
- Productivity
  - Purpose, Origin
  - Opinionated, Unopinionated
  - Batteries included, Get it yourself
  - Encourages good development practices or not
- Performance of framework/language
- Caching support
- Scalability
- Web security

## NodeJS

"As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications."

### JavaScript Runtime

Node brings JS out of browser-land

- JS was designed for the browser

Node adds functionality:

- File reads/writes
- Create http connections
- Listen network requests

### Event Driven

Node is an **asynchronous event driven** JS runtime.

- **Asynchronous**: when you write code, you do not try to predict the exact sequence that each line will run.
- Write code as a **collection of smaller functions**
- Gets called **in response** to specific events (network requests)

**Example Program**:

1. read text from file
2. print to console
3. query db for list of users
4. list users based on age

**These tasks should be broken up like so**

1. Read file _AND THEN_ print file contents
2. Query database _AND THEN_ filter database query results

While both processes ^ are running, Node sits & waits for an _event_.

- Waits for both processes to complete
  - reading of file
  - query db
- Once complete, Node fires off an event that runs the next function
  - as the programmer, we **don't know or care** which finishes first
  - similar to `addEventListener`
  - except for network requests, database queries
  - via callback functions

```js
// "Any time we get a network request, run this callback function".

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("hello world!");
  })
  .listen(8080);
```

## Server-Side Website Programming

Websites communicate w/ web servers via **HTTP** (hypertext transfer protocol).

- Click link, submit form, run search => HTTP request is sent

Requests include:

- URL: id resource
- Method: action (get, delete, post)
- Additional Info:

  - encoded in url params (field-value pairs via query string)
  - post data (sent by http post method)
  - cookies

Web servers:

- wait for client request messages
- process them on arrival
- reply to web browser with an HTTP response message
  - successful or not: "HTTP/1.1 200 OK"
  - body of response: contain requested resource (html, img)

### Static Sites

Static site: same hard-coded content on request
