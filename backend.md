# Backend Notes

The **frontend** is code (HTML, CSS & JavaScript) that is executed on the client side, runs in the user's browser and creates the user interface.

The **backend** is code that runs on the server, that receives requests from clients and contains logic to send the appropriate data back to the client. The backend includes a database that persistently stores data for the application.

## REST

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
204 (NO CONTENT)  successul, nothing being returned in response body
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
