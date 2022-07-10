# JavaScript

## Running JavaScript Code

- To run JS locally, via the browser, you have 2 options:

Inline JavaScript:

```html
/* 1. Within an HTML document */
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!");
  </script>
</body>
```

External Script:

```html
/* JavaScript files have the .js extension: */
<script src="javascript.js"></script>
```

- [Example of Inline JavaScript](./html/javascript-example.html)
- `console.log()` is a command that allows you to print something to the developer console in your browser
- To view the Console, hit `F12` on a page and click on the Console tab

## Variables

- Variables are "storage containers" for data in your code
- There are 3 ways to create a variable:
  - `var` (original method)
    - Behaves similar to `let`, but it has it's differences
  - `let` (modern, preferred method)
  - `constant`

Declare a variable with the name "message":

```js
// declaring a variable
let message;
```

To store data, use the **assignment operator** `=`

```js
// store the string 'Hello' in variable named message
let message;
message = "Hello";
```

To access the value of a variable, use the `alert` function

```js
// show the variable content
let message;
message = "Hello";
alert(message);
```

Combine declaration & assignment into a single line:

```js
let message = "Hello!";
```

There are several ways of declaring multiple variables. You can combine variable declarations into a single line, but it is not recommended because it makes readability difficult. You can also use multiline styles, shown below:

```js
// One-liner declaration of variables, separated by a comma
let user = "John", age = 25, message = "Hello";

// Separate lines = better readability
let user = "John";
let age = 25;
let message = "Hello";

// Multi-line alternatives:


```
