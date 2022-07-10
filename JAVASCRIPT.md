# JavaScript

## Running JavaScript Code

To run JS locally, via the browser, you have 2 options.



1. Inline JavaScript ([Example](./html/javascript-example.html))

```html
/* 1. Within an HTML document */
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!");
  </script>
</body>
```



2. External Script:

```html
<!-- JavaScript files have the .js extension: -->
<head>
  <script src="javascript.js"></script>
</head>
```



`console.log()` is a command that allows you to print something to the developer console in your browser.

To view the Console, hit `F12` while on a page and click on the Console tab.



## [Variables](https://javascript.info/variables)

Variables are "storage containers" for data in your code

There are 3 ways to create a variable:
  - `let` = modern, preferred method
  - `var` = old method, similar to `let`, but it has differences
  - `constant`



**Declare a variable** with the name "message":

```js
// declaring a variable
let message;
```



**Store data** using the **assignment operator** `=`:

```js
// store the string 'Hello' in variable named message
let message;
message = "Hello";
```



**Access the value of a variable (popup msgbox)** using the `alert` function:

```js
// show the variable content
let message;
message = "Hello";
alert(message);
```



**Combine declaration & assignment** into a single line:

```js
let message = "Hello!";
```



**Declaring multiple variables**

 You can combine variable declarations into a single line, but it is not recommended because it makes readability difficult. You can also use multiline styles, shown below.



 All variants do the same thing:

```js
// One-liner, not recommended (poor readability)
let user = "John", age = 25, message = "Hello";

// Separate lines (better readability)
let user = "John";
let age = 25;
let message = "Hello";

// Combined multi-line options:
let user = 'John',
  age = 25,
  message = 'Hello';

// Or
let user = 'John'
  , age = 25
  , message = 'Hello';
```



**Change the value** of a variable:

``` js
let message;
message = 'Hello';
message = 'World';  // Removes old data "Hello"
alert (message); // "World"
```



**Copy data** from one variable to another:

``` js
let hello = 'Hello World!';
let message;

// Copy contents of hello to message variable
message = hello;
alert(message); // "Hello world!"
```



**Do NOT declare a variable twice**, as it will cause an error:
``` js
let message = "This";
// repeated 'let' = ERROR
let message = "That"; // SyntaxError: 'message' has already been declared!
```


---


### Variable Naming

There are 2 limitations on variable names in JavaScript:

1. Must contain *only* **letters**, **digits**, **$** or **_**
2. First character can NOT be a digit



[**camelCase**](https://en.wikipedia.org/wiki/CamelCase) is commonly used. Camel case uses multiple lowercase words strung together, with each new word (*after the first word*) receiving a capital letter:



``` js
// camelCase
let myName;
let myFirstLastName;

// Dollar Sign $ & Underscore
let $ = 1;  // variable name: $
let _ = 2;  // variable name: _

// *INVALID* examples
let 1a;      // can't start with a digit
let my-name; // can't contain hyphen (-)
```



**Case matters**: `apple` & `APPLE` are two different variables

```js
let apple = 'red';
let APPLE = 'green';
```



**Reserved Names** are words that **cannot be used** because they are used by the language itself.

``` js
let let = 5;  // ERROR, reserved name: let
let return = 5; // ERROR, reserved name: return
```


**Use Strict**

Normally, you need to *define a variable* before using it.

In the *old times*, it wasn't possible to create a variable by a mere assignment of the value without using `let`.

To maintain compatibility with older scripts, **DON'T** insert "use strict".

``` js
// MISSING 'use strict'
num = 5;  // num is created, if it doesn't exist
```

``` js
"use strict";
num =  5; // ERROR: num not defined
```


---


### Constants

Constants are variables that cannot be reassigned or changed. Attempting to do so causes errors.

To create a constant, you substitute `let` with `const`:

``` js
const myBirthday = '09.09.1999';

myBirthday = '08.08.1988'; // ERROR: can't reassign constant!
```



#### Constants: Known Before Execution

Use CAPITAL LETTERS & underscores for constants that contain *difficult-to-remember* values that are known *before execution*. 

``` js
// Web Color Codes in Hexadecimal Format
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// To pick a color:
let currentColor = COLOR_ORANGE;
alert(currentColor); // #FF7F00
```

Benefits:
- Much easier to remember: `COLOR_ORANGE`
- Easier to mistype: `#FF7F00`
- Reading code: `COLOR_ORANGE` is *more meaningful* than `#FF7F00`



#### Constants: Calculated in Run-Time 

If a constant is *calculated in run-time* and *unknown before execution*, it should be named normally, using camelCase.

``` js
const pageLoadTime = // time taken for a webpage to load
                     // - unknown before execution (calculated in run-time)
                     // - but doesn't change after it's set (constant)
```


---


### Naming Best Practices

Variables should have a clean, obvious meaning, describing the data that it stores.

It is one of the most important & complex skills in programming. Variable names reveal if code was written by a **beginner vs. an experienced developer**.

In a real project, most of the time is spent **modifying & extending** an existing code base -- not writing something new from scratch.

Returning to code after doing something else for a while, it's much easier to find info that's well-labeled, or when variables have *good names.*

*Good-to-follow Rules:*

- Human-readable Names
  - `userName` `shoppingCart`

- Avoid abbreviations or short names --- *unless you know what you're doing*
  - `a` `b` `c` 

- Make names *maximally* descriptive & concise
  - `data` `value` are bad --- unless the context of the code makes it *exceptionally obvious* what they are referencing

- Agree on terms within your *team OR in your own mind*
  - If a site visitor is called a `user`, related variable naming options:
    - Good: `currentUser` `newUser` 
    - Bad: `currentVisitor` `newManInTown`



#### Reusing Or Creating New Variables

Extra variables are good, not evil.

Lazy programmers *reuse* existing variables.

- Causes confusion as to what's inside the variable at any given point.
- Save a little bit of time on *variable declaration*
- BUT lose 10x more on debugging

JavaScript Minifiers & browsers optimize code well enough, so performance issues aren't a concern. 

Using different variable names for different values can *help the engine optimize your code.*