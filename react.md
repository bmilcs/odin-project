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

## Components

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

```jsx
import React, {Component} from 'react';

class App extends Component {
  constructor {
    super();
  }
}

// JavaScript Functions Go Here!!!

render() {
  return (
    <div className='App'>
    Hello World!
    </div>
  )
}
```

The import statement imports React & Component from the React Library, allowing us to create a class component.

- `React` = default export
- `Component` = not default export, requiring `{ }`

By declaring the class component `App`. By extending the React class Component, we have `Reactified` our App component:

- Gives `App` React component methods & properties
- **Should ALWAYS be declared with PascalCase**
  - Just like classes & factory functions
  - Used by React core team @ Facebook & most other devs
