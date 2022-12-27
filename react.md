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
