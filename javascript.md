# JavaScript

**JAVASCRIPT** is a scripting language that allows you change CSS & HTML elements after site is loaded. It makes web pages interactive and engaging for users.

## Running JavaScript Code

To run JS locally, via the browser, you have 2 options.



1. Inline JavaScript ([Example](./html/javascript-example.html))

```html
<!-- Within an HTML document -->
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



## Numbers

Numbers are the building blocks of programming logic. 



### Arithmetic

**Arithmetic operators** perform arithmetic on numbers --- literal or variables.

| Operator | Description |
| ---: | :-- |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| ** | Exponentiation |
| / | Division |
| %| Modulus |

Examples

``` js
// literals
let x = 100 + 50;

// variables
let x = a + b;

// expressions
let x = (100 + 50) * a;
```



**Arithmetic operands** are the numbers in an arithmetic operation.

| Operand | Operator | Operand |
|---|---|---|
|100|+|50|



```js
let x = 5;
let y = 3;

let z = x + y;  // Addition
let z = x - y;  // Subtraction
let z = x * y;  // Multiplication
let z = x / y;  // Division, produces quotient & remainder
let z = x % y;  // Modulus, produces remainder in division
```




**Incrementing** & **Decrementing**

Increment Operator (+1): `++`  
Decrement operator (-1): `--` 


``` js
let x = 5;
x++;        // Increment Operator
x--;        // Decrement Operator
let z = x;
```




**Exponentiation**

Exponentiation operator `**` *raises the first operand to the power of the second operand.*

``` js
let x = 5;
let z = x ** 2;         // 5^2 = 25
// OR
let z = Math.pow(x,2)   // 5^2 = 25
```




**Operator Precedence** (Order of operations)

Operator precedence is the order in which operations are performed in arithmetic expression.

1. `(`Parenetheses`)`
1. Multiplication `*` & Division `/`
1. Addition `+` & Subtraction `-`
1. Left -> Right

``` js
let x = 100 + 50 * 3;     // 50 * 3, then +100
let y = (100 + 50) * 30;  // 100+50, then * 30
```




**Assignment**

```js
let x = 10
let y = 5

x += y  // x = x + y
x *= y  // x = x * y
```




**JavaScript Numbers**

JavaScript only has one type of number: with or without decimals

* Always 64-bit floating point
* Double precision floating point numbers
* Does not define integers, short, long, floating point, etc.

``` js
let x = 3.14; // w/ decimals
let y = 3;    // w/o decimals
```




Extra large or extra smalls can be written with *scientific (exponent) notation*.

``` js
let x = 123e5;  // 12,300,000
let y = 123e-5; // 0.00123
```




Integer precision, without a period or exponent notation, are accurate up to **15 digits**.
``` js
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```




Floating point arithmetic is **not always 100% accurate**.

``` js
let x = 0.2 + 0.1; // 0.30000000000000004
// To solve this problem, it helps to multiply & divide:
let x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
```




**Adding** Numbers and Strings

> Concatenation & Addition share `+` operator, which causes weird behavior:

``` js
// Add two numbers, result will be a number
let x = 10;
let y = 20;
let z = x + y;  // 30

// If you add two strings, the result will be a string concatenation:
let x = "10";
let y = "20";
let z = x + y; // 1020

// If you add a string + a number, result will be a string
let x = "10";
let y = 20;
let z = x + y; // 1020
```



JavaScript interpreter works *left to right*. Therefore:
``` js
// Common mistake #1
let x = 10;
let y = 20;
let z = "The result is: " + x + y;  // The result is: 1020
                                    // String + Integer = Concatenation

// Common mistake #2
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; // 3030
let result = x + y + Number(z) // 60

                        // Integer + Integer = 30, Integer + String = Concatenation 3030
```




**Numeric Strings**

JavaScript strings can have numeric content, and JS will attempt to convert strings to numbers in all numeric operations.

``` js
let x = "100";  // string
let y = "10";   // string
let z = x / y;  // 10

let x = "100";  // string
let y = "10";   // string
let z = x * y;  // 1,000

let x = "100";  // string
let y = "10";   // string
let z = x - y;  // 90

let x = "100";  // string
let y = "10";   // string
let z = x + y;  // 10020 -> concatenation, 2 strings, won't work
```




**NaN** - Not a Number

`NaN` is a reserved word indicating that a number **is not a legal number.**

Trying to do arithmetic w/ a non-numeric string will result in `NaN`.

``` js
let x = 100 / Apple;  // NaN
let x = 100 / "10";   // 10
```

`isNaN(x)` is a **global function** to find out if a value is not a number.

```js
let x = 100 / "Apple";
isNaN(x);   // true
```

If `NaN` is used in a mathematical operation, the result will be `NaN`
``` js
let x = NaN;    // NaN
let y = 5;      // Number
let z = x + y;  // = NaN

let x = NaN;    // NaN
let y = "5";    // string
let z = x + y;  // = NaN5
```

`typeof NaN` returns `number`
```js
typeof NaN; // number
```




**Infinity**

`Infinity` or `-Infinity` is the value JS will return *if you calculate a number outside of the largest possible number*

``` js
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

// 4
// 16
// 256
// 65536
// 4294967296
// 18446744073709552000
// 3.402823669209385e+38
// 1.157920892373162e+77
// 1.3407807929942597e+154
// Infinity
```

Division by 0 (zero) = Infinity

``` js
let x = 2 / 0;  // infinity
let y = -2 / 0; // -infinity
```

`typeof infinity` returns `number`
``` js
typeof infinity; // number
```



**Hexadecimal**

JS interprets numeric constants as hexadecimals if they are preceded by `0x`
``` js
let x = 0xFF; // 255
```




**Number Methods**

Restricting decimal places (rounding) w/ `.toFixed()`

``` js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;  // 1.766584958675746364;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces; // 1.77

```



**Comparison Operators**

Left off here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
