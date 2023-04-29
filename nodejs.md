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

Web Servers wait for requests, process them as they arrive & reply with an HTTP response message.

Web Server responses include:

- HTTP Response Status Code
  - `200 OK`
  - `404 Not Found`
  - `403 Forbidden`
- Body of successful response:
  - Data of requested resource (`GET` request)

If `HTML` page is returned, it is rendered by the browser

- Browser discovers links to other resources: JavaScript, CSS Files
- Browser sends separate HTTP requests to download those files

### `GET` Request Example

```
GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

Lines #1 & #2 contain:

- Request type: `GET`
- Target resource URL: `en-US/search`
- URL parameters: `q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`
- Target host: `developer.mozilla.org`
- Protocol version: `HTTP/1.1`

Last Line:

- client-side cookies
- session id

Remaining lines:

- info about browser used & responses it can handle
- browser: `User-Agent` is Firefox: `Mozilla/5.0`
- accept gzip compression: `Accept-Encoding: gzip`
- accept character sets: `Accept-Language: en-US,en;q=0.8,es;q=0.6`
- origin url of request: `Referer: https://developer.mozilla.org/en-US/`

### `GET` Response Example

Response **Header** contains:

- `200 OK` response code = success
- `text/html` is the `Content-Type`
- `charset=utf-8` for character set
- `Content-length: 41823` how big it is
- **body** content: actual HTML

Remainder of response header includes:

- when response was generated
- the server
- how it expects browser to handle the page
  - `X-Frame-Options: DENY` = No `<iframe>` access

```
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept, Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!DOCTYPE html>
<html lang="en-US" dir="ltr" class="redesign no-js"  data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  …
```

### `POST` Request Example

Example: User submits new profile details

- Simimlar to `GET` request BUT first line = `POST`
- Main difference: **No URL parameters**
- Info from the form is encoded in the body of the request
  - ie `&user-username=hamishwillee`

```
POST /en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

### `POST` Response Example

- `302 Found` tells browser: post succeeded
- Browser must issue a 2nd HTTP request to load the page specified in the `Location` field

```
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

### Static Sites #2

- Returns same hardcoded content, always, to every user
- Can get inefficient

Example:

1. Browser sends `GET` HTTP request w/ URL of HTML page
2. Server retrieves doc from file system
3. Server returns HTTP response with
   1. HTTP response status code `200 OK`, `404 Not Found` `301 Moved Permanently`

^ Important because _dynamic_ sites use the same method for CSS, JS, static images, etc.

### Dynamic Sites #2

- Generates & returns content based on request URL & data
  - Data from a db
- On receiving `GET` request for product
  - Server determines product ID
  - Fetches data from db
  - Constructs HTML page by inserting data into HTML template

#### Anatomy of Dynamic Requests

Example context:

- Sports-team manager where coaches select team name & size in a form
- Get back 'best lineup' for next game

Coach submits the form w/ team name & # of players:

1. Browser creates HTTP `GET` request (only fetching data)
   1. Base URL for resource `/best`
   2. Encodes team & player number as
      1. URL parameters: `/best?team=my_team_name&show=11`
      2. URL pattern: `/best/my_team_name/11/`
2. Server detects request is dynamic
3. Server forwards to _Web Application_ for processing
4. Web App determines how to handle different URLS based on pattern matching rules
5. Web App id's intention of request from the URL
   1. get best team `/best/`
   2. finds team name & # of players
6. Web App gets info from the db
7. Web App dynamically creates HTML page data > placeholders in HTML template
8. Web App returns generated HTML to browser (via Server) & `200` success
   1. Or `404` team doesn't exist
9. Browser processes HTML
10. Browser sends requests for CSS/JS from the HTML
11. Server loads static files from file system & returns them to browser

To update record in db, the same would occur except it'd be a `POST` request

#### Other Work

Web Apps: receive HTTP requests & return HTTP responses

They also can do other things at same time:

- Interact w/ DB: get/update info
- Send emails to users to confirm registration
- Perform logging
- Other operations

#### Returning Other Files

Server-side code doesn't have to return HTML.

They can dynamically create & return

- files: text, pdf, csv
- data: json, xml

### Web Frameworks Simplify Server-Side Programming

Frameworks provide:

- Simple ways to map URLS to resources
- Maintenance: change URL without changing handler function

Django example:

```py
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/ > passed to index() fn in views
    url(r'^$', views.index),
    # example: /best/junior/ > junior() fn in views
    url(r'^junior/$', views.junior),
]
```

Frameworks also help with databases

Example: get teams w/ `team_type` of `junior` from `Team` model

```py
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

After `junior()` gets a list of junior teams:

- Calls `render()` with original `HttpReqest`, HTML template & `context` object

## [What is NodeJS?](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)

NodeJS is:

- JS runtime built on Chrome V8 JS Engine
- Uses event-driven, non-blocking I/O model
  - Lightweight & efficient
- Package ecosystem `npm` = largest open source library ecosystem

![JS Event Loop](img/js-event-loop.png)

The JS Event Loop:

- Push `main()` onto call stack
- Push `console.log()` onto call stack
  - Runs right away & pops off stack
- Push `setTimeout(2000)` onto call stack
  - `setTimeout(2000)` is a Node API
  - It gets called & we register the event-callback pair
- `setTimeout(2000)` gets registered in the API & is popped off the call stack
- Push `setTimeout(0)` onto call stack
- `setTimeout(0)` gets registered in the API & is popped off the call stack
- Wait 0 seconds
- `setTimeout(0)` is moved to callback queue
- Wait 2 seconds
- `setTimeout(2000)` is moved to callback queue
- Callback queue waits for call stack to be empty
  - Only one statement can execute at a time
  - Taken care of by event loop
- Last `console.log()` runs
- `main()` is popped from the stack
- Event loop sees **call stack is empty** and **callback queue is NOT empty**
- Event loop moves callbacks to call stack for execution (FIFO - first in first out)

### NPM Node Package Manager

`require` is a function:

- accepts "path" parameter
- returns module.exports

`require` does 3 things:

- loads modules bundled with Node.js: file system, HTTP from Node.js API
- loads third party libraries: Express, Mongoose (installed from npm)
- require your own files: modularize the project

### V8 Turbo-charges JS by leveraging C++

V8: open source runtime engine written in C++

- JavaScript > V8 (C++) > Machine Code
- Run standalone
- Can be embedded into any C++ app
- Hooks for writing C++ available to JS

### Events

Something happens that we can respond to

1. System Events: C++ core, library called libuv
   1. finished reading a file
2. Custom events: JavaScript core

## Introduction to Node.js

```js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

^ Includes Node.js `http module`

- `http`'s `createServer()` method: creates a new HTTP server & returns it
- listens on specific port & hostname
- when server is ready, the callback is called, running the console.log statement
- when new requests are receivered, the response event is called
  - provides 2 objects:
    - request: `http.IncomingMessage` obj
    - response: `http.ServerResponse` obj
  - ^ essential to handle HTTP calls

`http.IncomingMessage`: provides request details (req headers & data)

`http.ServerResponse`: returns data to the caller

- `res.statusCode = 200`: successful response
- `res.setHeader('Content-Type', 'text/plain')`: content-type header
- `res.end('Hello World\n')`: close the response, with content added as an arg

## Node From The Command Line

To run node, you can:

Use globally available `node` command w/ name of file

```sh
node app.js
```

OR you can **add a shebang line** to your JS file.

> a shebang is the 1st line in a file that tells the OS which interpreter to use

```sh
#!/usr/bin/node
```

Using a shebang requires the file to be executable. To make a file executable:

```sh
chmod u+x app.js
```

Pass string arguments to node instead of a file:

```sh
node -e "console.log(123)"
```

`node` has to be re-executed in bash whenever a change in the application is made.

To automatically restart node on change, use the `nodemon` module:

```sh
# globally install it
sudo npm i -g nodemon

# add as a dev dependency
npm i --save-dev nodemon
```

If installed as a dev dependency, run `nodemon` with an npm script or `npx nodemon`

Run the app using `nodemon` w/ app's name:

```sh
nodemon app.js
```

## ENV Files

`process` core module of Node.js provides `env` property

- hosts all environmental variables that were set when process was started

Example: set `USER_ID` & `USER_KEY` env variables _for testing purposes_

```sh
USER_ID=123 USER_KEY=foobar node app.js
```

For production, you want a bash script to export variables.

To access env variables, we use the `process` statement

> `process` doesn't need a `require` statement

```js
// app.js
process.env.USER_ID; // 123
process.env.USER_KEY; // foobar
```

To set multiple env variables, you can create a `.env` in the root of your project and then use `dotenv` package to load them during runtime.

```sh
# install package
npm i --save dotenv
```

```js
// app.js
require("dotenv").config();
```
