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

## [Server-Side Website Programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)

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

- User wants to nav to a page
- Browser sends HTTP "GET" w/ url
- Server retrieves document from file system
- Returns HTTP response with:
  - File found:
    - requested document
    - success status: `200 OK`
  - File not found:
    - error status

![basic static server app](img/basic_static_app_server.png)

### Dynamic Sites

Dynamic websites:

- some page content is generated dynamically, or as needed
- data is put into placeholders in HTML templates (_much more efficient for large amounts of data_)
- can return different data for a url based on:
  - info given by user
  - stored preferences
- can perform other operations as part of returning response
  - ie: send notifications

Dynamic website code must run on the **back-end** (most of it).

- IE: _Server-side programming_ OR _back-end scripting_

![dynamic website: server-side programming](img/web_application_with_html_and_steps.png)

- Browser send HTTP requests to server
- Server processes requests
  - Static resources are handled like static sites
  - Dynamic resources are forwarded to server-side code
    - Server interprets request
    - Reads required info from DB
    - Combines retrieved data with HTML Templates
- Server returns HTTP responses: containing generated HTML

### Server-side vs Client-side Programming

The code is significantly different:

- different purposes & concerns
- generally don't use the same language (except JS)
- run on different os environments

Client-side Code:

- primarily concerns: appearance & behavior of a rendered page
- selecting & styling ui components
- creating layouts
- navigation
- form validation

Server-side Code:

- primary concerns: choosing _which_ content is returned to browser in response to requests
- validates submitted data & requests
- uses databases to store/retrieve data
- send correct data to client
- **has full access to server operating system**
- frameworks: session support, users support, authentication, database access, templating libraries

### What You Can Do On Server-side

Server-side: Efficiently deliver info _tailored for individual users_

**Amazon**:

- constructs search results for products
- targetted product suggestions based on user preferences, previous purchases
- simplify purchases

**Banks**:

- store account info
- allow only authorized users to view/make transactions

**Social Media**:

- highlight, share & control access to interesting content

### Efficient Storage & Delivery of Info

Server-side programming allows us to:

- store info in a db
- dynamically construct & return:
  - html, pdf's, images
  - data: json, xml (for client-side web frameworks, reducing processing burden on server)

### Customized User Experience

- servers store & use info about clients
- provide convenient & tailored user experience
  - credit cards (don't have to enter them again and again)
  - locations (google maps)

### Controlled access to content

- restrict access to authorized users
- social networking

### Store session/state information

- sessions: allows servers to store info on current user
- send different responses based on that info
  - user has previously logged in
  - displays links to their email or order history
  - state of a game

### Notifications & Communication

- servers can send notifications
- email, sms, instant messaging, video conversations, other communication services

### Data Analysis

- collect a lot of data about users
- what they search for, buy, recommend
- how long they stay on each page

## [Client-Server Overiew](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

### Web Servers & HTTP

Web browsers communicate with web servers using HTTP.

**REQUESTS** include:

- URL: target server & resource - _html file, data point, tool to run_
- METHOD: action - _get file, save/update data_
  - `GET` get a resource - _html file, list products_
  - `POST` create new resource - _article to wiki, contact to db_
  - `HEAD` get metadata about resource - _last time resource was updated, determine if download is needed_
  - `PUT` update resource _or create if doesn't exist_
  - `DELETE` delete resource
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`
- INFO: additional - _form data_
  - URL parameters
    - `GET` requests encode data in the URL sent to server
    - Adds name/value pairs to end of it `http://example.com?name=Fred&age=11`
    - `?` separates URL from URL parameters
    - `=` separates name from values
    - `&` separates each pair
    - **INSECURE**: can be changed by users & resubmitted
    - **NOT used for requests that update data on the server**
  - `POST` data
    - `POST` requests _add new resources_
    - Data is encoded within request body
  - Client-side cookes
    - Contain session data about client
    - Keys that server uses to determine login status, permissions, access to resources
