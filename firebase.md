# Backend As A Service (BaaS) with Firebase

Unless you use `localStorage`, our apps forget the user's preferences and any changes made, as soon as the page gets reloaded.

Local Storage is great BUT it only stores data on the client's computer. In order to reaccess the data again from a different device, a **real backend** is required.

Backend options:

1. Build a back-end (Node.js)
2. Outsource backend to a BaaS company
   1. [Firebase](https://www.firebase.com/)
   2. [Apigee](http://apigee.com/)

## Firebase: Firestore

Cloud Firestore is used to:

- Store & sync app data at global scale

Cloud Firestore features:

- **NoSQL database**: built for global apps, scales as needed
  - Easily store, sync & query data for web/mobile apps
- **Query & Structure Data the way you like**
  - Store data easily with collections & documents
  - Build hierachies for related data
  - Retrieve data w/ expressive queries
- **Build Truly Serverless Apps**
  - Firestore ships w/ mobile/web SDKs and comprehensive security rules
  - Works with traditional client libraries: Node, Python, Go, Java
- **Sync Data across devices: offline & online**
  - Automatic sync'ing
  - Notifications on data changes
  - Build collaborative experiences & realtime apps
- **Scale Globally**
  - Powered by Google's storage infrastructure
  - Built to scale
- **Strong User-based Security**
  - Restrict data access based on
    - identity data
    - pattern matching on your data
    - more
  - Integrates w/ Firebase Authentication

## Emulator setup:

`functions/package.json:`

```json
// functions/package.json

// custom scripts to add:
"scripts": {
  "build": "tsc -w",
  "db": "firebase emulators:start --import db/",
  "emulate": "firebase emulators:start",
}
```

```sh
# make sure this is installed:
npm install -g firebase-tools

# init emulators:
cd functions/
firebase init emulators

# start emulator:
npm run build # auto-update on code changes w/ custom scripts above
firebase emulators:start --only functions # serve up cloud functions locally
npm run db # optional: serve up exported database
```

To auto update the emulator's code, add `-w` watch to the command.

firebase.ts

```js
import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const functions = getFunctions(app);
// Makes functions run locally:
connectFunctionsEmulator(functions, "localhost", 5000);
```

## [Exporting Firestore Data for Emulation](https://medium.com/firebase-developers/how-to-import-production-data-from-cloud-firestore-to-the-local-emulator-e82ae1c6ed8)

Install gcloud:

```sh
sudo apt-get install apt-transport-https ca-certificates gnupg
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
sudo apt-get update && sudo apt-get install google-cloud-cli
```

Login:

```sh
firebase login
gcloud auth login
```

```
firebase use # project name
gcloud firestore export gs://your-project-name.appspot.com/<your-choosen-folder-name>
```

## Cloud Functions

### HTTP Functions (invoked from a web url)

`/functions/src/index.js`:

```js
const functions = require("firebase-functions");
```

```js
// http request #1: respond with a value
exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.random() * 100;
  response.send(number.toString()); // needs to be string for web
});

// http request #2: redirect to another url
exports.toAWebsite = functions.https.onRequest((request, response) => {
  response.redirect("https://www.bmilcs.com");
});
```

### Callable Functions (invoked within firebase app):

```js
exports.sayHello = functions.http.onCall((data, context) => {
  return `Hello world`;
});

// using the function:
const sayHello = firebase.functions().httpsCallable("sayHello");
// async: returns a promise
sayHello().then((result) => {
  console.log(result.data);
});
```

Passing arguments to Callable Functions:

```js
exports.sayHello = functions.http.onCall((data, context) => {
  const name = data.name;
  return `Hello ${name}`;
});

// async function w/ a parameter
sayHello({ name: "bryan" }).then((result) => {
  console.log(result.data);
});
```
