# Backend Notes

The **frontend** is code (HTML, CSS & JavaScript) that is executed on the client side, runs in the user's browser and creates the user interface.

The **backend** is code that runs on the server, that receives requests from clients and contains logic to send the appropriate data back to the client. The backend includes a database that persistently stores data for the application.

HTTP & REST provide structure to the request-response cycle between clients and servers.

## Clients

**Clients** are:

- Anything that send requests to the backend.
- Browsers: request HTML / JavaScript that they will execute to display websites
- Mobile application
- Application running on another server
- Web-enabled smart appliance

## Backend

Backend = All technology required to process incoming requests and generate/send response to client

Includes 3 major parts:

- Server: Computer receiving requests
- App: Application running on server that _listens for requests_, retrieves info from database and sends response
- Database: Organize & persist data

Backend Processes:

- Processing incoming webpage requests
- Running scripts to generate HTML `PHP`, `ASP`, `JSP`
- Accessing data (ie articles) from database using SQL queries
- Storing/updating records in a database
- Encrypting/decrypting data
- Handling file uploads/downloads
- Processing user input via JavaScript

### App Core Functions

The app on the server contains logic that determines how to respond to requests based on the `HTTP verb` and the `Uniform Resource Identifier (URI)`.

A **route** is a pair of HTTP Verb & URI.

**Routing** is matching them based on a request.

Handler functions are often **middleware**. Middleware is _any code_ that executes _between receiving a request and sending a response_, on the server.

Middleware function examples:

- Modify the request object
- Query the database
- Process the incoming request

Most middleware functions _end_ by passing control to the _next middleware function_, rather than sending a response.

The _last middleware function_ ends the request-response cycle by sending the HTTP response back to the client.

**Frameworks** simplify the logic of **routing.** (Express, Ruby on Rails)

\*Each route can have **one or many** handler functions that are executed **whenever a request to that route (HTTP Verb/URI) is matched.**

### Server Responses

Server sends data in many different forms:

- HTML file
- Data as JSON
- HTTP status code -- 404 not found.

### Databases

Databases provide **an interface** to **save data in a persistent way**.

Databases **reduce load on server memory** and allows data to be retrieved **if the server crashes or loses power**.

Clients can request or submit data to be added to a database.

### Web API

API is a collection of **clearly defined methods of communication** between different software components.

Web API is created by the backend and is a **collection of endpoints & resources that the endpoints expose.**

Web API is is defined by

- Requests it can handle
- Which is determined by the routes it defines
- And the types of responses the clients expect to receive after hitting the routes

A **single Web API** can provide data for **several frontends**.

### Principles of request-response cycle

- Server (typically) **can't** initiate responses **_without requests_**
- Every request **needs a response**, even if it's just an error code
  - Otherwise it will hang indefinitely
- Servers should send **one response** per request

### Mapping out a request

**1. Click on a picture of a cell phone cover.**

This generates a GET request to `bmilcs.com/products/321`. `GET` means a request for data. The `URI` is `/products/321`, meaning we're looking for more information on product id 321.

**2. The request goes across the internet to bmilcs.com servers.**

It is limited to the _speed of light._ This is why popular sites have _many servers_ spread out across the globe.

**3. The server is actively listening and receives the request.**

**4. Event listeners are triggered (those that match the request `GET` and `/products/321` (middleware)**

**5. The server processes the request.**

- Server code makes database query to get info about the cell phone cover.
  - Name of the product
  - Price
  - Reviews
  - String: path to an image

**6. Database query is executed & sends data back to the server**

This is one of the slower steps in the process, because static memory is slow and the DB may be on another machine than the original server.

**7. Server receives data, constructs & sends response back to the client**

Response bodies have all info needed to display info about the cell phone case. The response header contains `HTTP` status code 200 (success).

**8. Response travels to client**

**9. Browser receives request and uses it to create/renders the view**

### REST

REpresentational State Transfer provides standards of communication between computer systems on the web.

REST-compliant or RESTful systems are _stateless_ and separate the concerns of client / server.

Code can be changed on the client or server side without affecting the operation of each other.

Client/server are kept modular and separate. Separating the UI and data storage:

- Improves flexibility across platforms
- Improves scalability by simplifying server components.
- Allows each component to evolve independently

By using a REST interface, different clients:

- hit the same REST endpoints
- perform the same actions
- receive the same responses

### Statelessness

Stateless means that the server doesn't need to know _anything_ about what state the client is in and vice versa.

Both client/server can understand _any message_ it receives, even without seeing previous messages.

Statelessness is enforced through **resources**, _not commands_. Resources are the nouns of the web:

- objects
- documents
- or things

... that you may need to _store_ or _send_ to other services.

RESTful applications achieve:

- reliability
- quick performance
- scalability

Because components can be

- managed
- updated
- reused

... without affecting the system as a whole, **even during operation.**

### Communication between Client/Server

In the REST architecture,

- clients send requests to retrieve or modify resources
- servers send responses to these requests

**Making Requests**

A request made by the client generally consists of:

- **HTTP verb**: GET, POST, PUT, DELETE
- **Header**: image/png, audio/wav, video/mp4, application/json, text/html, text/css
- **PATH**: bmilcs.com/customers/
- _Message Body_: Optional, containing data

**HTTP Verbs**

- GET: retrieve resource(s) by id
- POST: create resource
- PUT: update resource by id
- DELETE: remove resource by id

**Headers / Accept Parameters**

Headers specify what content _the client can receive from the server._ It is called the `Accept` field.

MIME Types describe the content types in the `Accept` field and consist of a `type` and `subtype`

`text` — `text/html`, `text/css`
`image` — `image/png`, `image/jpeg`, `image/gift`
`audio` — `audio/wav`, `audio/mpeg`
`video` — `video/mp4`, `video/ogg`
`application` — `application/json`, `application/pdf`, `application/xml`, `application/octet-stream`

**Paths**

Paths should be designed to help the client know what is going on. (ie: `store.com/customers/223/orders/12`)

**Sending Responses**

The server must include `content-type` in the header of a response when sending a data payload.

```REST
GET /articles/23 HTTP/1.1
Accept: text/html, application/xhtml
---
HTTP/1.1 200 (OK)
Content-Type: text/html
```

**Response Codes**

```
200 (OK)          successful HTTP request
201 (CREATED)     successful created item
204 (NO CONTENT)  successful, nothing being returned in response body
400 (BAD REQUEST) failed, bad request syntax, excessive size, client error
403 (FORBIDDEN)   failed, permissions
404 (NOT FOUND)   failed, can't find, possibly deleted, doesn't exist
500 (INTERNAL SERvER ERROR) failed, generic server error
```

Successful status codes per HTTP verb:

- GET: 200 (OK)
- POST: 201 (CREATED)
- PUT: 200 (OK)
- DELETE: 204 (NO CONTENT)
