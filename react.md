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

## Props (Odin)

Props are used to **share values** or **functionality between components.**

Props are short for: **Object Property**

Example:

```js
//
// MyComponent.js
//

import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default MyComponent;

//
// App.js
//

import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent title="React" />
      </div>
    );
  }
}

export default App;
```

In the above code:

- `MyComponent` is imported into `App`
- `MyComponent` is rendered as a child component of `App`
- In `App`, we pass the property `title="React"`

To access the `title` prop within `MyComponent`, we use the syntax:

`this.props.title`

In `MyComponent`, you MUST:

- `prop` object must be passed **to the constructor**
- `super()` must be called **within the constructor**

With functional components, `props` work the same way.

```js
//
// MyComponent.js
//

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;

//
// App.js
//

import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;
```

`{this.props.onButtonClicked}` is assigned to `onClick` event of the component:

- `MyComponent` expects a prop to be passed to it: `onButtonClicked`
- Value of propr should be a function
- Attach the function to the click event of our button

In React, we assign event listeners **directly in the JSX** - not `addEventListener()`.

We can rename props between parent/child components:

- `App`:
  - Actual function name: `onButtonClick()`
  - MyComponent prop: `onButtonClicked={this.onClickBtn}`
- `MyComponent`:
  - `onClick={this.props.onButtonClicked}`

With class components, you have to **bind methods to `this`**.

- Recommended way: via **the constructor** & _below the `super()` call_.
- WHY? Functions that are passed to another component need to stay in the _same context in which it was declared_.

```js
// MyComponent.js

import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;
```

Passing properties & functions via `this.props.SOMETHING` is a pain.

Destructuring allows us to use their base names:

```js
const { title, onButtonClicked } = this.props;
```

## State (Odin)

State is what we use to handle values that **can change over time.**

Example: An app w/ a counter & button to increment it:

```js
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
```

State is ALWAYS declared **in the constructor** of a class component.

In the above code, we declared our state **as an object** with a property `count` set to an initial value of `0`.

`setState()` method is called inside the `countUp` method, which sets the state to a new value.

- State should be treated as **immutable**.
- NEVER directly change the state (without using `setState`)
  - NEVER do: `this.state.count = 3` or `this.state.count++`
- ALWAYS use `setState()` method

**Passing State as a Prop** is one of the greatest & most powerful fetures of React:

- Ability to pass one component's state down to multiple children
- When that piece of state is changed, _each child component_ that uses it will be automatically re-rendered w/ the new value

Example: `Forum`, passing username to multiple components of the app via the parent component

- `NavBar` & `Forum` will auto update on changes to `username`
- `Footer` will NOT update

```js
// in the render method of App.js
return (
  <div>
    <NavBar username={this.state.username} />
    <Forum username={this.state.username} />
    <Footer />
  </div>
);
```

## State & Props in Functional Components

Functional components differ in that:

- `props` are passed as an argument to the function
- `props` are accessed via `props.someFunction` (no `this` keyword)

Example:

```js
// MyComponent.js

import React from 'react';

function MyComponent(props) {
  return <div>{props.title}</div>;
}

export default MyComponent;

// App.js

import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent title="Hello World" />
    </div>
  );
}

export default App;
```

Destructuring props:

```js
function MyComponent({ title }) {
  /...
}

// OR

const {title} = props;
```

**React Hooks** allow us to set and access state in functional components.

## Passing Arguments to Event Handlers

To pass an extra parameter to an event handler, you can do the following:

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// or
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## Prevent Component from Rendering

```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div>Not rendered if props.warn exists</div>;
}
```

## React Event Handling

Event handlers in React are passed instances of `SyntheticEvent`, a wrapper around the standard browser event.

It contains the same interface as the browser's native event:

- `stopPropogation()`
- `preventDefault()`

To access the underlying browser event, use the `nativeEvent` attribute.

Synthetic events are different than the native events. Event names:

```js
// Keyboard
- event: onKeyDown onKeyPress onKeyUp
- props: boolean altKey
         number charCode
         boolean ctrlKey
         boolean getModifierState(key)
         string key
         number keyCode
         string locale
         number location
         boolean metaKey
         boolean repeat
         boolean shiftKey
         number which

// Mouse Events
- event: onClick onContextMenu onDoubleClick
         onDrag onDragEnd onDragEnter onDragExit
         onDragLeave onDragOver onDragStart onDrop
         onMouseDown onMouseEnter onMouseLeave
         onMouseMove onMouseOut onMouseOver onMouseUp
- props: boolean altKey
         number button
         number buttons
         number clientX
         number clientY
         boolean ctrlKey
         boolean getModifierState(key)
         boolean metaKey
         number pageX
         number pageY
         DOMEventTarget relatedTarget
         number screenX
         number screenY
         boolean shiftKey

// Form
- event: onChange onInput onInvalid onReset onSubmit

// Animation
- event: onAnimationStart onAnimationEnd onAnimationIteration
- props: string animationName
         string pseudoElement
         float elapsedTime

// Transition
- event: onTransitionEnd
- props: string propertyName
         string pseudoElement
         float elapsedTime

// Select
- event: onSelect

// UI
- event: onScroll
- props: number detail
         DOMAbstractView view

// Wheel
- event: onWheel
- props: number deltaMode
         number deltaX
         number deltaY
         number deltaZ

// Clipboard
- event: onCopy onCut onPaste
- props: DOMDataTransfer clipboardData

// Other
- event: onToggle

// Image
- event: onLoad onError

// Composition
- event: onCompositionEnd onCompositionStart onCompositionUpdate
- props: string data

// Focus
- event: onFocus onBlur
- props: DOMEventTarget relatedTarget

// Generic
- event: onError onLoad

// Pointer
- event: onPointerDown onPointerMove onPointerUp onPointerCancel
         onGotPointerCapture onLostPointerCapture onPointerEnter
         onPointerLeave onPointerOver onPointerOut
- props: number pointerId
         number width
         number height
         number pressure
         number tangentialPressure
         number tiltX
         number tiltY
         number twist
         string pointerType
         boolean isPrimary

// Touch
- event: onTouchCancel onTouchEnd onTouchMove onTouchStart
- props: boolean altKey
         DOMTouchList changedTouches
         boolean ctrlKey
         boolean getModifierState(key)
         boolean metaKey
         boolean shiftKey
         DOMTouchList targetTouches
         DOMTouchList touches

// Media
- event: onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
         onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
         onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
         onTimeUpdate onVolumeChange onWaiting
```

## Lifecycle Methods

Lifecycle methods are special methods used to **operate on components throughout their duration in the DOM**.

For example, when the component:

- Mounts
- Renders
- Updates
- Unmounts

`render` is the most important lifecycle method.

Lifecycle methods **can ONLY be used in `class components`**.

### Lifecycle

React uses a _virtual DOM_. Its stages include:

1. `componentDidMount` Creation of the component
2. `render` render of the component
3. `componentDidUpdate` update of the component - _optional_
4. `componentWillUnmount` death of the component

### ComponentDidMount

`componentDidMount` runs when the component _is mounted_ (when it's inserted into the DOM tree).

Common tasks completed in `componentDidMount` method:

- Connect to web APIs & JS frameworks
- Set Timers: `setTimeout` and `setInterval`
- Add event listeners

### Render

`render` is a **required** method for all class components.

It contains all logic your component **should display on the screen**. It might also contain a `null` value if you don't want to show anything.

### ComponentDidUpdate

`componentDidUpdate` is:

- NOT called on initial render
- IS called any other time that the component updates/changes
- Prone to infinite loops
  - if used to update state in a way that would cause a re-render
  - should contain conditional statements to prevent that
  - ie: compare new props with previous props to make sure some value has changed

This method is a great place:

- To work & operate on the DOM when the component has updated.
- Send network requests when conditions are met
- ie: User changed accounts > fetch data for new account during this lifecycle method

### ComponentWillUnmount

`componentWillUnmount` is called **when the component is removed from the DOM tree**.

It is often used for cleanup tasks, cleaning up `componentDidMount`'s additions, such as:

- Remove event listeners
- Cancel network requests
- Other cleanup routines

## Hooks

Lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `render` can **ONLY be called in class components**.

Before Hooks, functional components were considered 'dumb' or 'stateless'. Hooks have changed that completely.

**Hooks allow functional components to also have a lifecycle as well as a state.**

### useState

The `useState` hook lets you use state in functional components.

1. Import `useState` hook from React.
2. Declare state: `const [count, setCount] = useState(0)`
   1. `count` and `setCount` can be called anything
   2. Naming convention: `[ something, setSomething]`
   3. `useState(0)` initializes state with a value of `0`

```js
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default App;
```

**Note:**

- Setting State is an **ASYNCHRONOUS TASK**.
- Setting State causes a **RE-RENDER**

### useEffect

`useEffect` is a better alternative to:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`.

React defers running `useEffect` **until AFTER the browser has painted**. Doing _extra work here_ is less of a problem.

The syntax for `useEffect` is:

```js
useEffect(() => {}, []);

useEffect(
  () => {
    // code to be executed
  },
  [
    // dependency: state, prop or context
  ]
);
```

`useEffect` is triggered **based on changes in the dependencies listed**.

- ESLint will warn you if it _expects a dependency_
- However, they are **NOT required**

```js
import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };

    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default App;
```

There are three different options for the dependency array:

1. **Leave it empty**
   - equal to `componentDidMount`
   - runs **one time** when component mounts (inserted in DOM tree)

```js
useEffect(() => {
  // Do something ONCE
  // [] will always equal [] so this will not trigger again
}, []);
```

2. **Add a dependency to the array**

   - Similar to `componentDidUpdate`
   - Only difference: only runs when certain condition has changed
   - **Will re-run anytime the dependency (color) changes**

```js
useEffect(() => {
  // Do something WHEN color changes
}, [color]);
```

3. **Leave out the dependency array**

   - equal to `componentDidMount` AND `componentDidUpdate` combined
   - Runs anytime the component is updated **AND** right after the initial render

```js
useEffect(() => {
  // Do something on MOUNT AND UPDATE
});
```

The **`return`** statement in our useEffect function is **equal to `componentWillUnmount`** method.

```js
return () => {
  document.removeEventListener("click", changeColorOnClick);
};
```

### Hook Rules

Only Call Hooks **At the TOP Level**.

- Don't call Hooks inside loops, conditions, or nested functions.
- Add conditional logic **INSIDE useEffect Call**
- React **relies on the ORDER in which Hooks are called**

Only Call Hooks from React Functions.

- Don't call Hooks from regular JavaScript functions

## Router

Once an application has **multiple pages**, you need to setup a reliable routing system to **handle the component or page** that should be rendered.

**Client-Side Routing** is:

- internal routing inside the JS file
- rendered to client (front-end)
- helps build single-page applications **(SPAs)** without refreshing
- ie: user clicks navbar > URL changes & view of page is modified _within the client_

Benefits:

- Faster user experiences
- Browser doesn't need to request entirely new document
- Or need to re-evaluate CSS & JavaScript assets for next page
- Enables more dynamic UX with **animation**

### [React Router](https://reactrouter.com/en/main/start/overview) ([Video](https://www.youtube.com/watch?v=Law7wfdg_ls))

**React Router** is the standard routing library for React apps.

Install: `npm i react-router-dom`

> Example config

```js
// RouteSwitch.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

// App.js
import RouteSwitch from "./RouteSwitch";

// ...

root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
```

1. **Route**: routes with a path (URL path) & component to render
2. **BrowserRouter**: router
   - Uses **history API**: `pushState`, `replaceState`, `popstate` event
   - Keeps UI in sync with URL
   - Assume `BrowserRouter` is **at the root of all your projects**
3. **Routes**: renders 1st child Route that matches the location
   - First Route path that matches the URL _exactly_ will be rendered
   - All others are ignored (by default)
   - Old versions required `exact` keyword to achieve this

## React Testing Part 1

In order to do testing inside React, we need to import some packages inside of our testing file:

```js
import React from "react";
import { ... } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import TestComponent from "path-to-test-component";
```

- `@testing-library/react`: useful functions - `render()`
- `@testing-library/jest-dom`: custom matchers, assertive functions - `toBeInTheDocument` ([complete list](https://github.com/testing-library/jest-dom))
  - Element attributes
  - Text Content
  - Classes, etc.
- `@testing-library/user-event`: `userEvent` API
  - Simulates user interactions with a web page
- _No need to import `jest`_: automatically detected in `.test.jsx?` files

Note: All of these packages are included in `create-react-app` AND the scripts are preconfigured in `package.json`

### First Query

```js
// App.js
import React from "react";

const App = () => <h1>Our First Test</h1>;
export default App;

// App.test.js

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
```

The `byRole` methods (with `name` option) are the **preferred method for querying**.

- Ensure our UI is accessible to everyone
- Regardless of what they use to navigate the page: mouse, assistive tech

To improve the above example, we should use:

```js
getByRole("heading", { name: "Our First Test" });
```

#### [Testing Library Queries](https://testing-library.com/docs/queries/about/)

Priority of queries: Accessible to **Everyone** (including assistive technology)

[List of Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)

- \*`getRoleBy`: every element in **accessibility tree**.
  - `name` option: filter returned elements by their **accessible name**
  - should be top preference **for just about everything**
- `getByLabelText`: form field label text
- `getByText`: text content (non-interactive), ie: divs, spans, paragraphs
- `getDisplayValue`: form filled in values
- `getByPlaceholderText`

**TextMatch**: string, regex, or function of signature

### Simulating User Events

Live user feedback & interaction is #1.

Confidence in our components can be built through **tests**.

```js
// Changes heading of App:
import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;
```

To test if the _button works as intended_, the `screen` object has all the methods needed for querying.

With `screen`, we don't have to worry about keeping `render`'s destructuring up-to-date.

- Better to use `screen` to access queries
- Rather than to destructure `render`

```js
// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
```

First test: utilizes **snapshots** to check whether all nodes render as we expect them to.

Second test: simulate click event & check if heading changed

`toMatch` is one of many assertions we can make.

Note: React Testing Library _unmounts the rendered components_.

- We must **render for each test**
- `beforeEach` Jest function is great for lots of tests

### What are Snapshots?

Snapshot testing: Comparing our rendered component with an associated snapshot file.

- Example: "magnificent monkeys renders" test generated this snapshot:

```js
// App.test.js.snap

// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`magnificent monkeys render 1`] = `
<div>
  <button
    type="button"
  >
    Click Me
  </button>
  <h1>
    Magnificent Monkeys
  </h1>
</div>
`;
```

Snapshots are **HTML representations** of our components.

- Compared against `App` in future snapshot assertions
- If `App` changes, the test fails.

Snapshots are **fast** & **easy** to write.

- `toMatchSnapshot`: assertion saving us from writing multiple lines of code
- Don't have to test the existence of button/heading
- Prevent unexpected changes to creep into our code

**[Jest Snapshot Testing](https://jestjs.io/docs/snapshot-testing)**

```js
import renderer from "react-test-renderer";
import Link from "../Link";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

- Renders UI component
- Creates a snapshot
- Compares snapshot to reference file stored alongside the test

To update a snapshot, run the command:

```sh
# update all
jest --updateSnapshot

# update specific tests
jest --updateSnapshot --testNamePattern <NAME PATTERN>
```

To **interactively** update a snapshot after it fails in the command line, follow the prompt: `Press i to update failing snapshots interactively.`

Tips for snapshot testing:

- Treat snapshots as code: commit & review them
- Tests should be deterministic: same output everytime
  - ie: `Date.now()` should be mocked to `Date.now = jest.fn(() => 1482363367071)`
- Use descriptive snapshot names:
  - `<UserName /> should render null`
  - `<UserName /> should render Alan Turing`

**Things to consider (Cons)**:

- What _exactly_ are we testing? What's being validated? Is it even correct?
- Snapshots may cause **false positives**
  - We can't be sure of the validity of our snapshot test
  - Can make us overconfident in our code
- Snapshots may cause **false negatives**
  - Fixing puncutation: FAIL
  - Replacing HTML tag: FAIL
  - We may lose confidence in our test suite altogether

**Benefits of Snapshot Testing**:

- Snapshot tests can be written **faster**
- Snapshot tests check if components behave correctly
- Snapshots allow conditional rendering tests

**Disadvantages of Snapshot Testing**:

- Problems w/ larger snapshots
  - Solution: npm's `no-large-snapshots`
- Issues with translations: multi-language apps
-

### Text Matching

Given this HTML:

```html
<div>Hello World</div>
```

The following **WILL FIND** the `<div>`:

```js
// Matching a string:
getByText(container, "Hello World"); // full string match
getByText(container, "llo Worl", { exact: false }); // substring match
getByText(container, "hello world", { exact: false }); // ignore case

// Matching a regex:
getByText(container, /World/); // substring match
getByText(container, /world/i); // substring match, ignore case
getByText(container, /^hello world$/i); // full string match, ignore case
getByText(container, /Hello W?oRlD/i); // advanced regex

// Matching with a custom function:
getByText(container, (content, element) => content.startsWith("Hello"));
```

### ByTestId

`ByTestId` can be used to target `data-testid` attribute:

```js
// App.js
<div data-testid="custom-element" />;

// App.Test.js
import { render, screen } from "@testing-library/react";

render(<MyComponent />);
const element = screen.getByTestId("custom-element");
```

```js
getByTestId,
  queryByTestId,
  getAllByTestId,
  queryAllByTestId,
  findByTestId,
  findAllByTestId;
```

### User Events

`fireEvent`: dispatches DOM events

`userEvent`: simulates _full interactions_

#### Writing tests w/ `userEvent`

**Recommended**:

- invoke `userEvent.setup()` before rendering the component
- **DON'T** render or use `userEvent` OUTSIDE of the test itself
  - ie: no `before` / `after` hook

```js
// inlining
test("trigger some awesome feature when clicking the button", async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  await user.click(screen.getByRole("button", { name: /click me!/i }));

  // ...assertions...
});

// OR

// setup function
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test("render with a setup function", async () => {
  const { user } = setup(<MyComponent />);
  // ...
});
```

## React Testing Part 2

What is **Mocking**?

Mocking function calls allows you to 'fake' API calls and return a static set of data, overriding the real function in your code.

### Testing Callback Handlers

Every single user interaction involves callbacks.

Sometimes they're passed in as props to alter state of the parent component.

```js
// FavoriteInput.js

import React from "react";

const FavoriteInput = ({ onChange: onInputChange, id }) => {
  const inputHandler = (event) => onInputChange(event.target.value);

  return (
    <label htmlFor={id}>
      What is your favorite wild animal?
      <input id={id} onChange={inputHandler} />
    </label>
  );
};

export default FavoriteInput;
```

- `FavoriteInput`: single component, couple of props passed in
- `onChange` prop: no idea what it does or how it affects the application
- All we know: must be called when users type in the input box

Testing the component:

```js
// FavoriteInput.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FavoriteInput from "./FavoriteInput";

describe("Favorite Input", () => {
  it("calls onChange correct number of times", () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");

    userEvent.type(input, "Lion");

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });

  it("calls onChange with correct argument(s) on each input", () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");

    userEvent.type(input, "Ox");

    expect(onChangeMock).toHaveBeenNthCalledWith(1, "O");
    expect(onChangeMock).toHaveBeenNthCalledWith(2, "Ox");
  });

  it("input has correct values", () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");

    userEvent.type(input, "Whale");

    expect(input).toHaveValue("Whale");
  });
});
```

Three tests & we're done.

`onChange` handler is mocked using Jest's `jest.fn()` function.

1. Number of times `onChange` is called
2. Check the arguments as they're passed to `onChange`
3. Alternative/redudant test: check input value contains userEvent type

Mocks could be setup in a `beforeEach` block:

- Fine in most cases
- However, having all setup inside the test makes it easier to understand
  - Don't have to look around the file for context
  - Makes reviewing changes in the future _substantially easier_
  - Decreases chances of leakage creating problems throughout the test suite

Unless our test file is getting really long and the test prep is dozens of lines in length, test setup should be done within the same block.

### Mocking Child Components

In React, component trees can get large, causing tests to become convoluted.

For components higher up in the tree, mocking child components can be necessary.

- Doesn't happen often
- Beneficial to know this concept

### React Testing In The Real World

- [Odin Project Submissions List](https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/submissions-list.jsx)
- [Odin Project Submissions List Jest Tests](https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx)

#### [`act() API`](https://github.com/mrdulin/react-act-examples/blob/master/sync.md)

Wrap test **interactions** with `act(() => ...)`. React will take care of the rest.

`act()` guarentees 2 things:

- Any **state** updates will be executed
- Any enqueued **effects** will be executed

`act()` helps with:

- events
- timers
- promises

> Event Test

```js
// App
function App() {
  let [counter, setCounter] = useState(0);
  // use setState(xxx => xxx + 1), not setState(state+1)
  return <button onClick={() => setCounter((x) => x + 1)}>{counter}</button>;
}

// App.test
it("should increment a counter", () => {
  const el = document.createElement("div");
  document.body.appendChild(el);
  // we attach the element to document.body to ensure events work
  ReactDOM.render(<App />, el);
  const button = el.childNodes[0];
  act(() => {
    for (let i = 0; i < 3; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(button.innerHTML).toBe(3); // this fails, it's actually "1"!
});
```

> Timer Test

```js
// App
function App() {
  const [ctr, setCtr] = useState(0);
  useEffect(() => {
    setTimeout(() => setCtr(1), 1000);
  }, []);
  return ctr;
}

// App.test * fake timers
it("should tick to a new value", () => {
  jest.useFakeTimers();
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("0");
  act(() => {
    jest.runAllTimers();
  });
  expect(el.innerHTML).toBe("1");
});

// App.test * "real" timers with async version of act
it("should tick to a new value", async () => {
  // a helper to use promises with timeouts
  function sleep(period) {
    return new Promise((resolve) => setTimeout(resolve, period));
  }
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("0");
  await act(async () => {
    await sleep(1100); // wait *just* a little longer than the timeout in the component
  });
  expect(el.innerHTML).toBe("1");
});
```

> Promises Test

```js
// App
function App() {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch("/some/url").then(setData);
  }, []);
  return data;
}

// App.test
it("should display fetched data", () => {
  // a rather simple mock, you might use something more advanced for your needs
  let resolve;
  function fetch() {
    return new Promise((_resolve) => {
      resolve = _resolve;
    });
  }

  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });

  expect(el.innerHTML).toBe("");
  await act(async () => {
    resolve(42);
  });
  expect(el.innerHTML).toBe("42");
});
```

> Async / Await Tests

```js
// App
function App() {
  let [data, setData] = useState(null);
  async function somethingAsync() {
    // this time we use the await syntax
    let response = await fetch("/some/url");
    setData(response);
  }
  useEffect(() => {
    somethingAsync();
  }, []);
  return data;
}

// App.test
it("should display fetched data", async () => {
  // a rather simple mock, you might use something more advanced for your needs
  let resolve;
  function fetch() {
    return new Promise((_resolve) => {
      resolve = _resolve;
    });
  }
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("");
  await act(async () => {
    resolve(42);
  });
  expect(el.innerHTML).toBe("42");
});
```

#### [Mocking Child Component(s)](https://medium.com/@taylormclean15/jest-testing-mocking-child-components-to-make-your-unit-tests-more-concise-18691ef6a0c2)

Mocked child components should:

- accurately capture the functionality of the original component
- needs to present the same API as the original
  - same props
  - same callbacks

## Advanced Concepts

### [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

JavaScript does not allow you to declare types for variables and properties. However, many programmers agree that the **pattern of declaring types is preferable because:**

- Allows you to catch errors
- ie: Passing string to variable that _should_ be a number

React provides type declaration using `PropTypes`.

TypeScript is another option to use with React.

[React's Documentation on PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

```sh
# Installing PropTypes:
npm install --save prop-types
```

```js
// class components
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};

// functional components

import PropTypes from "prop-types";

function HelloWorldComponent({ name }) {
  return <div>Hello, {name}</div>;
}

// name must be a string
HelloWorldComponent.propTypes = {
  name: PropTypes.string,
};

// sets the default values for props:
HelloWorldComponent.defaultProps = {
  name: "Stranger",
};

// require a single child element:
HelloWorldComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HelloWorldComponent;
```

### [Styled Components](https://styled-components.com/docs/basics#)

The style-components package provides the ability to write CSS directly to React components for easy reuse & consistency.

With styled components, you get:

- **Automatic critical CSS**: only loads css styles that are necessary for what's rendered. Users load the minimal amount of code necessary.
- **No Class Name Bugs**: generates unique class names for styles automatically.
- **Easier Deletion of CSS**: every bit of styling is tied to specific components.
- **Simple Dynamic Styling**: adapting styling of a component based on props or a global theme is simple & intuitive
- **Painless Maintenance**: never have to hunt across files to find out what style is affecting a component
- **Automatic Vendor Prefixing**: write css in the current standard & styled-components handles the rest

```sh
npm install --save styled-components
```

```json
// package.json
{
  "resolutions": {
    "styled-components": "^5"
  }
}
```

```js
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
);
```

Conditional styling based on props:

```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
`;
```

Extending Styles:

```js
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

To change the tag or component that a styled component renders, you can use the `as=""` prop.

Example: Mix of `<button>` and `<a>` tags that you want to style the same way:

```js
render(
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="#">
      Link with Button styles
    </Button>
    <TomatoButton as="a" href="#">
      Link with Tomato Button styles
    </TomatoButton>
  </div>
);
```

`as` works with components too:

```js
const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

render(
  <div>
    <Button>Normal Button</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);
```

Styling any component:

```js
// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
```

Passed props:

```js
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

### Redux

Redux is the most popular **state management system** out there.

Combined with React, they make up a very powerful duo.

Redux's purpose is to:

- **Store your applicatoin's state in a single place** (called a _store_)
- Then, you _dispatch actions to the store_
- Reducers handle the state changes

Primary benefit of a state management library is:

- Prevent having to pass props through **multiple levels** of a component tree
- Recommended for larger applications

```sh
# installation

# tool kit (for use with a module bundler / node app)
npm install @reduxjs/toolkit
# core (for use with a module bundler/node app)
npm install redux

# create a react redux app:

# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

Redux example:

```js
import { createStore } from "redux";

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
```

Redux Tookit Example:

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}
```

### Context API

As applications grow in size, we end up passing props through a lot of components or we might have a lot of components that require the same props.

This is known as **PROP DRILLING**.

To avoid this, we can use the `Context API`:

- Lets parent component provide data to ALL child components in its tree
- **WITHOUT** passing props

Example: Dark theme with a lot of components. `context` lets all child components have access to the theme data.

> [React Beta docs example:](https://beta.reactjs.org/learn/passing-data-deeply-with-context)

```js
// App.js
import Heading from "./Heading.js";
import Section from "./Section.js";

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}

//
// Section.js
//

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

//
// Heading.js
//

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

//
// LevelContext.js
//

import { createContext } from 'react';

export const LevelContext = createContext(0);
```

### [Context, Reducer & State](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)

Reducers let you consolidate a component's state update logic.

As components grow, so does the **amount of state logic sprinkled throughout it**. To reduce complexity and **keep all your logic in one easy-to-access place**, you can:

- Move state logic into a single function
- Outside your component
- Called a reducer

To migrate **FROM `useState` TO `useReducer`**:

1. Move from setting state to dispatching actions
2. Write a reducer function
3. Use the reducer from your component

Context lets you pass info deep down to other components. You can **combine reducers & context together** to manage state of a complex screen.

### [Higher-Order Components](https://www.smashingmagazine.com/2020/06/higher-order-components-react/)

A higher-order component (_HOC_) is a technique for **reusing component logic**.

HOC component are functions that:

- Take 1+ components
- Return a new, upgraded component
- Don't modify or mutate components: Create new ones
- Used to compose components for code reuse
- Pure function: no side effects

Real world HOC examples:

- react-redux: `connect(mapStateToProps, mapDispatchToProps)(UserPage)`
- react-router: `withRouter(UserPage)`
- material-ui: `withStyles(styles)(UserPage)`

Structure of a HOC:

- Component
- Takes another component as an argument
- Returns a new component
- The returned component can render the original component that was passed to it

```js
import React from "react";
// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
  // And return another component
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};
```

Use cases:

- Loader while component waits for data
- `WithLoading` example below

#### With Loading HOC Example

```js
import React from "react";

// List component
const List = (props) => {
  const { repos } = props;
  if (!repos) return null;
  if (!repos.length) return <p>No repos, sorry</p>;
  return (
    <ul>
      {repos.map((repo) => {
        return <li key={repo.id}>{repo.full_name}</li>;
      })}
    </ul>
  );
};

// withLoading HOC
function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}

// Supercharged List
const ListWithLoading = WithLoading(List);

// App
class App extends React.Component {
  constructor() {
    this.state = {
      loading: false,
      repos: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }

  render() {
    return (
      // Supercharged List: Built w/ HOC withLoading
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    );
  }
}
export default App;
```

#### Conditional Rendering Components

Example: Render a component when a user has been authenticated (ie: a protected component)

`withAuth` is a HOC that takes a component and returns a new component named `AuthenticatedComponent`, that checks whether the user is authenticated.

If not authenticated, the `loginErrorMessage` component is returned.

```js
// withAuth
import React from "react";

function withAuth(Component) {
  return class AuthenticatedComponent extends React.Component {
    isAuthenticated() {
      // has to be set from your app's logic
      return this.props.isAuthenticated;
    }

    render() {
      const loginErrorMessage = (
        <div>
          Please <a href="/login">login</a> in order to view this part of the
          application.
        </div>
      );

      return (
        <div>
          {this.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            loginErrorMessage
          )}
        </div>
      );
    }
  };
}

// MyProtectedComponent
class MyProectedComponent extends React.Component {
  render() {
    return <div>This is only viewable by authenticated users.</div>;
  }
}

// Add authentication to MyPrivateComponent:
const ProtectedComponent = withAuth(MyPrivateComponent);

<ProtectedComponent isAuthenticated=false />
```

#### Provide Component With Any Prop You Want

A popular case for HOCs is creating a wrapper HOC to provide components with a reusable prop, that's needed by many components.

```js
// simple component
const HelloComponent = ({ name, ...otherProps }) => (
  <div {...otherProps}>Hello {name}!</div>
);

// HOC: withNameChange, sets a name prop on base component to "New Name"
const withNameChange = (BaseComponent) => (props) =>
  <BaseComponent {...props} name="New Name" />;

// Using HOC to create a new, pure component
const EnhancedHello = withNameChange(HelloComponent);

<EnhancedHello />; // <div>Hello New Name</div>

<EnhancedHello name="bmilcs" />; // <div>Hello bmilcs</div>
```

#### Building a High-Order Component

```js
import React from "react";

const Hello = ({ name }) => <h1>Hello {name}!</h1>;

function withName(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent name="Smashing Magazine" {...this.props} />;
    }
  };
}

const HelloWithName = withName(Hello);

const App = () => (
  <div>
    <HelloWithName />
  </div>
);
```

### More Hooks

[List of React Hooks](https://reactjs.org/docs/hooks-reference.html)

`useTransition`: returns a stateful value for pending state **of the transition** & a function **to start it**

- `const [isPending, startTransition] = useTransition();`

`useId`: generate unique IDs, stable across server/client, avoiding hydration mismatches

#### Building Custom Hooks

Custom Hooks let you extract commonly used logic from the UI into JS functions.

- Prevent code duplication
- Make logic reuseable within multiple components

Rules for custom hooks:

- Must being with `use` (ie: `useToggle`)
- Must be called within a React component
- Must be called in the highest level of a component
  - No nesting: functions, etc.

Example: Return a response from API URL ([Free Code Camp Example](https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/))

```js
//useFetch.js
import { useState, useEffect } from "react";

export function useFetch(url) {
  //values
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("something wrong, çould not connect to resource");
        }
        setData(res.json());
      })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        console.warn(`sorry an error occurred, due to ${error.message} `);
        setData(null);
        setError(error.message);
      });
  }, [url]);
  return [data, error];
}
```

[Another example](https://www.youtube.com/watch?v=aeMJfoGfWT4)

```js
// useToggle.js
import { useContext, useEffect, useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  // differs from a normal react component (logic, not UI/dom)
  return [state, toggle];
};
```

```js
// App.js
import { useToggle } from "./useToggle";

function App() {
  const [isVisible, toggle] = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Secret Text</h1>}
    </div>
  );
}
```
