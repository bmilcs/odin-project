# React

React is one of the most powerful, widely used frontend frameworks.

- Makes your code easily scalable
- More readable
- ~1000x More efficient

Reasons on why to learn React.js:

- Reusability of components
- Well supported (popular!)
- NOT Opinionated: it won't force you to follow a specific design pattern, project structure or logic
- Smaller learning curve

## Components (Class-based)

React Apps consist of **reusable components** (aka building blocks).

Example:

- `App`: main application, parent of all components
  - `Navbar`
  - `MainArticle`
  - `NewsletterForm`

A React component is defined in a **ES6 module** (`import` statements).

```js
// App.js
import ExampleComponent from "./components/ExampleComponent";
```

React components generally have **parent and/or child components.**

- Keeps your code organized
- Easy to keep track of your components' relationships with one another

Example:

```js
import React, {Component} from 'react';

class App extends Component {
  constructor {
    super();
  }
}

{
/*JavaScript Functions Go Here!!!*/
}

render() {
  return (
    <div className='App'>
    Hello World!
    </div>
  )
}
```

The import statement imports React & Component from the React Library, allowing us to create a class component.

`import React, {Component} from 'react';`

- `React` = default export
- `Component` = not default export, requiring `{ }`

By declaring the class component `App`. By extending the React class Component, we have `Reactified` our App component:

- Gives `App` React component methods & properties
- **Should ALWAYS be declared with PascalCase**
  - Just like classes & factory functions
  - Used by React core team @ Facebook & most other devs

```js
constructor() {
  super()
}
```

Constructors are not required for class components. However, they become important when **inheritance** & **state** are involved.

- Pass `props` as an argument to constructor
- `super()` \* required by any React constructor

```js
{
  /* Comments in React are weird! */
}
```

React comments are written with `/* xxx */` within curly braces `{}`.

Parts of React allow `// Comments`.

```js
render() {
  return (
    <div className="App">
    Hello World!
    </div>
  )
}
```

`render()` is a function that returns `JSX`. **JSX** is an HTML-like syntax that is _transpiled_ into JavaScript.

React allows you combine **JavaScript** & **JSX**.

JSX requires you use alternatives to protected JavaScript words for HTML attributes:

- `onChange` instead of `onchange`
- `htmlFor` instead of `for`
- `className` instead of `class`

`render()` = **Most used React "lifecycle" function**.

- EVERY class component requires a **render function**.

`render()` **returns _one_ top-level JSX Element.**

```js
// BAD - ERROR !!
render() {
  return (
    <h1>hii</h1>
    <h2>heyyy</h2>
  )
}

// GOOD!
render() {
  return (
    <div>
      <h1>hii</h1>
      <h2>heyyy</h2>
    </div>
  )
}
```

In order to reuse the `App` component, we have to export it:

`export default App`

If multiple components are in one file, you can:

- add `export` before each declaration of the component
- export them all within curly braces `export { ComponentA, ComponentB, ComponentC }

### Components (Functional)

The more modern approach is defining components as functions (like a factory function).

```js
import React from "react";

// function declaration
function App() {
  return <div className="App">Hello World!</div>;
}

// function expression
const App = () => {
  return <div className="App">Hello World!</div>;
};

// function expression with implicit return
const App = () => <div className="App">Hello World!</div>;

export default App;
```

**Functional components**...

- Don't have to import & extend "Component" from React.
- Don't need a constructor.
- Don't need the `render()` function
  - Instead, we use `return` statement at the end of the function body

## [React Introduction](https://dev.to/sarah_chima/an-introduction-to-react-components-cke)

## [Function vs Class Components](https://dev.to/colocodes/react-class-components-vs-function-components-23m6)

## Create-react-app

Facebook developers came up with `create-react-app`, which sets up a complete React app for you. It does all the setup & configuration for you.

```sh
npx create-react-app my-app
```

### Index.js & App.js

`index.js` is the "entry point" of your application.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Embedding Expressions in JSX

```js
const name = "Joe";
const element = <h1>Hello, {name}</h1>;
```

In JSX, you can put **any valid JavaScript Expression** inside curly braces `{}`.

- `2+2`
- `user.firstName`
- `formatName(user)`

> Embed results of `formatName(user)` into `<h1>`

```js
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

To automatic semi-colon insertion, wrap JSX in parentheses `( )` .

## JSX is an Expression Too

JSX expressions are compiled into regular JavaScript function calls and evaluate to JavaScript objects.

You can use JSX inside of:

- `if` statements
- `for` loops
- assign it to variables
- accept it as arguments
- return it from functions

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## Specifying Attributes w/ JSX

`const element = <img src={user.avatarURL}></img>;`

## Specifying Children w/ JSX

If a tag is empty, close it with `/>` like XML:

```js
const element = <img src={user.avatarURL} />;
```

JSX tags can have children:

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## JSX Prevents Injection Attacks

Everything is converted to a string before being rendered and helps prevent XSS cross-site-scripting attacks:

```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

## JSX Represents Objects

Babel compiles JSX down to `React.createElement()` calls.

```js
const element = <h1 className="greeting">Hello, world!</h1>;

// is exactly the same as:

const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

`React.createElement()` performs a few checks & creates an object like this:

```js
// Note: this structure is simplified
// * called React elements
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

## Rendering Element into the DOM

HTML file contains: `<div id="root"></div>`

Everything inside the "root" DOM node will be _managed by React_.

- Apps usually have ONE root DOM node.
- You have have as many isolated root DOM nodes as you'd like.

To render a React element:

- pass the DOM elemet to `ReactDOM.createRoot()`
- pass React element to `root.render()`

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello world!</h1>;
root.render(element);
```

## Updating the Rendered Element

React elements are **immutable**.

- Once created, you can't change its children or attributes.
- Like a single frame in a movie
- Represents UI at a certain point in time

To update the UI, create a new element & pass it to `root.render()`

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

In practice, MOST Apps only **call `root.render()` ONCE**

## React Only Updates What's Necessary

React DOM compares the element & its children to the previous one and only applies DOM updates necessary **to bring the DOM to the desired state**.

In the above example:

- We created an entire element, describing the whole UI tree, **on every tick**
- However, **only the text node whose contents have changed** gets updated by ReactDOM

## Components & Props

Components are like JavaScript functions:

- Accept inputs: called **Props**
- Return: React elements, describing what should appear on the screen

## Function & Class Components

Function Components: simplest way

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

ES6 Class Components:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Rendering a Component

React elements can represent:

- DOM tags: `<div \>`
- User-defined components: `<Welcome name="Sara" />`

When React sees an element representing a user-defined component, **it passes JSX attributes & children to this component as a single object.**

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <Welcome name="Sara" />;
root.render(element);
```

Summary of what occurs above:

1. `root.render()` is called with the `<Welcome name="Sara" >` element
2. React calls `Welcome` component with **`{name: "Sara"}` as the props**
3. `Welcome` component returns `<h1>Hello, Sara</h1>`
4. ReactDOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`

## Composing Components

Components can refer to other components in their output.

Any level of detail can be used as a component:

- button
- form
- dialog
- screen

In React apps, **all those** are commonly expressed as components

> Component that renders `Welcome` many times

```js
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

## Extracting Components

Don't be afraid to split components up _into smaller components_.

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

The above describes a comment on a social media site and **accepts the following `props`**:

- `author` - object
- `text` - string
- `date` - date

**This component can be tricky to change:**

- Lots of nesting
- Hard to reuse individual parts of it

`Avatar` doesn't need to know it's being rendered inside a `Comment`:

```js
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
```

We should **name props** from the **component's own point of view**... NOT the context in which it's being used.

Next, extract `UserInfo` into its own component & reference `Avatar` in it:

```js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}
```

Final result:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

Rule of thumb:

- Part of the UI that's used several times: `Button`, `Panel`, `Avatar`
- Complex enough on its own: `App`, `FeedStory`, `Comment`

Should all be extracted into it's own component!

## Props are READ-ONLY

Components **must NEVER modify it's own props**

```js
// PURE FUNCTION
function sum(a, b) {
  return a + b;
}
```

**All React components must act like pure functions with respect to their props.**