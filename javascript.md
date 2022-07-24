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

**Chaining Assignments**

Chained assignments evaluate from *right* to *left.*

``` js
let a,b,c;
a = b = c = 2 + 2;

a; // 4
b; // 4
c; // 4
```

In above example, `2 +2` is evaluated first. It's assigned to `c`, then to `b`, then to `a`.

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

# Data Types

In JavaScript, there are 8 basic data types.

7 Primitive Types:
- `number` number or floating point
- `bigint` integer number of arbitrary length
- `string` zero or more characters
- `boolean` true, false
- `null` unknown values, only value: `null`
- `undefined` unassigned value, only value: `undefined`
- `symbol` unique idenitifers

1 Non-primitive data type:
- `object` complex data structures

**Typeof operator**

`typeof x` or `typeof(x)` is used to see which type is stored in a variable.

## Numbers

Numbers are the building blocks of programming logic.  The *number type* represents both *integer* and *floating point* numbers.

``` js
let n = 123;
n = 1.23;
```

**Special numeric values** 

- `infinity`  Greater than any number
- `-infinity` Less than any number
- `NaN` Not a Number

## BigInt

The number type cannot go beyond 2<sup>53</sup>-1 or `9007199254740991`

```js
9007199254740991 + 1; // 9007199254740992
9007199254740991 + 9; // 9007199254740992
```

`BigInt` numbers are rarely needed, but they can store much larger numbers. They are created by adding `n` to the end of a number.

```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

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

Operands are what **operators** are applied to.

| Operand | Operator | Operand |
|---|---|---|
|100|+|50|

A operator is *unary* if it has a single operand.
```js
let x = 1;
x = -x; // unary operand -
alert( x ); // -1
```

An operator is *binary* if it has 2 operands.
```js
let x = 1, y = 3;
alert( y - x ) // 2, binary - operator subtracts values
```

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

Increment Operator `++` adds 1 to a value `+1`

Decrement operator `--` subtracts 1 from a value `-1`

Operators `++` and `--` can go *before* or *after* a variable, which changes it's behavior:
- Prefix form:  `++counter` returns the *new* value
- Postfix form: `counter++` returns the *old* value

``` js
let counter = 1;
let a = ++counter; // ++BEFORE: changes the counter AND THEN assigns the variable a its value
a;                 // 2

let counter = 1;
let a = counter++; // AFTER++: assigns "a" with old counter value
                   // THEN increments "counter" variable +1
a;                 // 1
counter;           // 2

let counter = 1;
alert( 2 * ++counter ); // 4 (++counter first then 2*counter)

let counter = 1;
2 * counter++;         // 2 (2 * counter[1] then counter++)
counter;               // 2
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
2. Unary plus `+` & unary negation `-`
3. Multiplication `*` & Division `/`
4. Addition `+` & Subtraction `-`
5. Left -> Right

``` js
let x = 100 + 50 * 3;     // 50 * 3, then +100
let y = (100 + 50) * 30;  // 100+50, then * 30
```

**Assignment Operators**

The most basic assignment operator is `=`. It assigns the variable on the *left* with the value stated on the right.

There are more complex types, which provide *useful shortcuts* to keep your code *neater & more efficient.* 

> Modify-in-place or "*modify-and-assign*"

```js
let x = 10
let y = 5

x += y  // Addition Assignment:       x = x + y
x -= y  // Subtraction Assignment:    x = x - y
x *= y  // Multiplication Assignment: x = x * y
x *= y  // Division Assignment:       x = x / y
```

Because *modify-and-assign* operators are *operators*, they run *after* most other calculations.

``` js
let n = 2;
n *= 3 + 5; // 3+5
            // n *= 8 ... n = n * 8
            // 16 -- right part is evaluated first
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

**Adding Numbers and Strings** (binary +)

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

**Numeric Conversion** (unary +)

The unary `+` applied to *numbers* doesn't do anything. However, `+` applied to a *string* converts it to a *number*.

``` js
let x = 1;
alert( +x ); // 1

let y = -2;
alert( -x ); // -2

// conversion of non-numbers
let x = "5"; // string
+x + 5;      // 10

+true;  // 1 
+"";    // 0
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

**Converting to number data types**

To convert a string to a number, use `Number()` constructor.

``` js
let myNumber = '74';
myNumber = Number(myNumber) + 3;
```

**Comparison Operators**

When you want to run true/false tests, and act conditionally based on the results, you use **comparison operators**.

- `==` Loose equality: Converts value to a common type & then checks equality (*Are two values **equal to** one another?*)
- `!=` Loose inequality: Converts value to a common type & then checks inequality (*Are two values **not equal** to one another?*)
- `===` Strict equality: *Are two values AND their types **identical** to one another?*
- `!==` Strict non-equality: *Are two values AND their types **NOT identical** to one another?*
- ` < ` Less than: *Is the left value **less than** the right value?*
- `>`   Greater than: *Is the left value **greater than** the right value?*
- `<=`  Less than: *Is the left value **less than OR equal to** the right value?*
- `>=`  Less than: *Is the left value **greater than or equal to** the right value?*

``` js
let x = "5";
let y = 5;
x == y;  // true
x === y; // false

let x = new Number(500);
let y = new Number(500);
x == y;  // false: JS Objects cannot be compared
x === y; // false
```

**[Testing Knowledge](https://javascript.info/operators)**

``` js
"" + 1 + 0    // 10
"" - 1 + 0    // -1
true + false  // 1
6 / "3"       // 2
"2" * "3"     // 6
4 + 5 + "px"  // "9px"
"$" + 4 + 5   // "$45"
"4" - 2       // 2
"4px" - 2     // NaN
"  -9  " + 5  // "  -9  5"
"  -9  " - 5  // -14
              // whitespace is ignored
null + 1      // 1
undefined + 1 // NaN
              // undefined = NaN when converted to a number
" \t \n" - 2  //-2
              // space characters are trimmed off start/end when converted to a #

// fix the addition
let a = prompt("First number?", 1);   // +prompt()
let b = prompt("Second number?", 2);  // +prompt()
alert(a + b);                         // OR alert(+a + +b);
```

## Strings

* Is a simple piece of text and a fundamental building block of any language.
* Strings must be wrapped in quotes 
  * Without quotes, it is assumed to be a *variable* name, *property* name, *reversed* word, or similar.

Creating strings:

``` js
const string = "My name is Jack";
const copyString = string;
console.log(string)
```

Single quotes and Double quotes have very little differences and their use is personal preference.
``` js
let doubleString = "Double quoted";
let singleString = 'Single quoted';
let nestedQuotes = 'This "works", too';
```

Escaping characters in a string: `\`
``` js
let escapedExample = 'I\'m a tired';
```

Escape Sequences

* `\0`  nulll character
* `\\`  backslash
* `\n`  newline
* `\r`  carriage return
* `\v`  vertical tab
* `\t`  tab
* `\b`  backspace
* `\f`  form feed

Concatenating Strings using a ***Template Literal***, which works like a normal string, except you can include variables in it.
> Use ` instead of " or '
```js
const firstName = 'Bryan';
const lastName = 'Miller';
const joinedName = `${firstName} ${lastName}`;
const greeting = `Hello, ${firstName} ${lastName}`; // Hello, Bryan Miller
const greeting = `Hello, ${joinedName}`; // Hello, Bryan Miller
```

Including expressions in strings
``` js
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
// "I like the song Fight the Youth. I gave it a score of 90%."
```

Multi-line strings
``` js
const output = `I like the song.
I gave it a score of 90%.`;
const output = 'I like the song.\nI gave it a score of 90%.';
// I like the song.
// I gave it a score of 90%.
```

### String Methods & Properties

* A **method** is a bit of functionality that is built into the language or into specific data types.
* [List](https://www.w3schools.com/jsref/jsref_obj_string.asp)
* [Exhaustive List](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**String Length**

`length` property returns the length of a string:
``` js
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;  // 26
```

#### Extracting Parts of a String

Three methods exist for extracting part of a string:
1. `slice(start, end)`
2. `substring(start, end)`
3. `substr(start, end)`

**Slice**

`slice()` extracts part of a string & returns the extracted part in a new string.
 This method accepts 2 parameters: start position, end position

> Starting position is 0

 ``` js
 // positive values go left > right
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);  // Banana 

// negative values go right > left
let part = str.slice(-12, -6); //  Banana: left 12x from end, left 6x from end

// single value  returns everything from the given starting point 
let part = str.slice(7);  // Banana, Kiwi
let part = str.slice(-12);  // Banana, Kiwi
 ```

 **SubString**

 `substring()` is similar to `slice()`, but negative values (anything under 0) are treated as 0.

``` js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);  // Banana
let part = str.substring(-12, -6);  // ''
```

**SubStr**

`substr()` is similar to `slice()`, except the second parameter specificies the **length** of the extracted part.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);  // Banana

// single values return everything from the given starting point
let part = str.substr(7);  // Banana, Kiwi

// negative numbers start from the right
let part = str.substr(-4);  // Kiwi
```

#### Replacing String Content

`replace()` method replaces a value with another value in a string.

It only replaces the **FIRST** match and it's case sensitive. 

``` js
let text = "Replace me! No me!";
let newText = text.replace("me!", "you!");  // Replace you! No me!
```

To ignore case, use regular expression with an `/i` (insensitive) flag.
``` js
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "bmilcs.com"); // Please visit bmilcs!
```

To replace ALL matches, use regular expression `/g` (global) flag
``` js
let text = "Hi Hi Hi";
let newText = text.replace(/Hi/g, "Hey"); // Hey Hey Hey
```

#### Converting to Upper/Lower Case

To change the case of a string, use `.toUpperCase()` and `.toLowerCase()` methods.

``` js
let text = "Hello World";
let text2 = text.toUpperCase(); // HELLO WORLD
let text3 = text.toLowerCase(); // hello world
```

#### Concatenation Method

Concatenation of strings can be performed with the `concat()` method.

``` js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); // Hello World
// This can also be done with the plus operator
let text3 = text1 + " " + text2;  // Hello World
```

#### Trim Whitespace

Use `.trim()` to remove whitespace from both sides of a string.

``` js
let text = "       Hi   ";
let text2 = text1.trim(); // "Hi"
```

### Add Padding to Strings

`padStart()` and `padEnd()` pads a string with another string. The number parameter represents the **max length** of the string: 

``` js
let text = "Hello";
let padded = text.padStart(7, "x"); // xxHello
let padded = text.padEnd(7, "x"); // Helloxx

// To pad numbers, convert the number to a string first
let number = 5;
let string = number.toString();
let padded = string.padStart(4, "0"); // 400
```

#### Return character or unicode character at given position in string

`charAt()` method returns character at a specified index.
`charCodeAt()` method returns the unicode character at a specified index.

```js
let text = "HELLO WORLD";
let char = text.charAt(0);  // H
let char = text.charCodeAt(0);  // 72
```

#### Converting Strings to Arrays

`split()` method converts strings to arrays. 

``` js
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
// text[0] = a
// text[1] = b
// text[1] = c
```

### Comparison (Strings)

To see whether a string is greater than another, JavaScript uses the so-called *dictionary* or *lexicographical* order.

Strings are compared letter-by-better by their *unicode value* (case sensitive). The algorithm is simple:

1. Compare 1st character
2. If the 1st character is greater/less than, done.
3. If both characters are same, compare the next character in the string.
4. Loop until end of string
5. If both strings are the same length, then they're equal. 
6. Else, the longer string wins.

``` js
'Z' > 'A';      // true
'Glow' > 'Glee' // true
'Bee' > 'Be'    // true
'Hi' > 'Z'      // false
```

**Comparison of different types**

When comparing 2 different data types, JS converts values to numbers.

``` js
'2' > 1; // true, string 2 becomes 2
'01' == 1; // true, string 01 becomes 1
true == 1; // true
false == 0; // true

// boolean conversion:
let a = 0;
Boolean(a); // false

let b = "0";
Boolean(b); // true

a == b; // true!

// null & undefined
Number(null);       // 0
Number(undefined);  // NaN
null == undefined;  // true -- "sweet couple", equal to each other 
                    // but not any other value
null === undefined; // false - different TYPES (strict equality)
```

Comparison `>` `>=`, etc. is different than equality check `==`.
``` js
// strange result: null vs 0
null > 0;     // false  (>)
null == 0;    // false  (== equality)  
alert( null >= 0 ); // true (>= comparison)
```

Undefined should NOT be compared to other values:
``` js
undefined > 0; // false (becomes NaN, which returns false to ALL comparisons)
undefined < 0; // false (becomes NaN, which returns false to ALL comparisons)
undefined == 0; // false (ONLY equals null & undefined)
```

## Conditionals

* `if`   condition is true, execute a block of code
* `else if` tests a new condition, when 1st `if` condition is false
* `else` executives when `if` / `else if` is false
* `switch` specify many alternative blocks of code to be executed

### If
``` js
if (condition) {
  //  block of code to be executed if the condition is true
}

if (hour < 18) {  // If hour is less than 18:00 then
  greeting = "Good day";
}
```

### Else

``` js
if (condition) {
// ^ true
} else {
// if = false
}

if (hour < 18) {  // If hour is less than 18:00 then
  greeting = "Good day";
} else { // Hour is not less than 18:00
  greeting = "Good evening";
}
```

### Else If

``` js
if (condition1) {
  // ^ true
} else if (condition2) {
  //  ^ condition2 = true && condition1 = false, 
} else {
  //  condition1 & condition = false
}
```

### Switch

Switch is an alternative to `if`, `else if`, `else`.

How `switch()` works:

1. Switch expression is evaluated once.
2. Value of expression is then compared with values of *each case*
3. If match, the associated block of code is executed.
4. If no match, the `default` code block is executed.

If multiple cases matches a case value, the *first case* is selected.

If no matching cases are found, the program continues to the `default` label.

If no default label is found, the program *continues to the statement(s) after the switch*.

```js
switch(expression) {
  case x:
    // expression returns x > execute me.
    break;
  case y:
    // expression returns y > execute me.
    break;
  default:
    // expression returned something other than x or y
}

// getDay() returns weekday as a number [0-6]
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
```

Switch statement for checking ranges
``` js
// Set the student's grade
const grade = 87;

switch (true) {   // checks all conditions, until true
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}
```

Switch statement with multiple Cases (OR logical operator)
``` js
// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
}
```

## Boolean (logical type) aka True/False

Boolean type only has 2 values: `true` `false`.

When testing boolean values, ie `true` or `false`, all values return true EXCEPT for the following:

**Falsy Values**
* `false`
* `undefined`
* `null`
* `0`
* `NaN`
* `''` empty string 2 

**Truthy Values**
* *Everything* else
  
``` js
let cheese = 'Cheddar';
if (cheese) { // true
  "Time to eat!"
}

let uploadComplete = false;
if (uploadComplete) { // don't need to specify `=== true` }
```

## Null Value

The special `null` value is a type of it's own which *only* contains the `null` value.

It simply represents **nothing**, **empty**, or **value unknown**.

## Undefined value

Like `null`, `undefined` stands apart as it's own type.

It means **value is not assigned.** When a variable is declared without a value, it returns `undefined`.

In other words, it is the **default value for unassigned things.**

``` js
let age;
alert(age); // shows "undefined"
```

## Object Type

`object` type is special. It is the only non-primitive data type because they are used to *store collections of data & more complex entities.*

## Symbol Type

`symbol` type is used to *create unique identifiers* for `object`.

## Logical Operators

There are four logical operators in JavaScript:

* `||` OR
* `&&` AND
* `!` NOT
* `??` Nullish Colaescing

### `||` (OR)

``` js
result = a || b;
```

> In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are `true`, it returns `true`, otherwise it returns `false`.

In JavaScript, `||` is **trickier & more powerful.**

``` js
// booleans:
// all result in true, except for when both operands are false
true || true;   // true
false || true;  // true
true || false;  // true
false || false; // false

if (1 || 0) { // works just like if( true || false )
 'truthy!';   // 'truthy!'
}
```

Most of the time, OR `||` is used in an `if` statement to test if any of the given conditions are true:

``` js
let hour = 9;
let isWeekend = true;

// if hour less than 10 or greater than 18 or is weekend
if (hour < 10 || hour > 18 || isWeekend) {  
  "office is closed"; // 'office is closed'
}
```

**OR `||` finds the first truthy value**

The "extra" features of JavaScript provides the extended algorithm as follows:

``` js
result = value1 || value2 || value3;
```

`||` OR operator does the following:

1. Evaluates operands from left to right
2. Each operand is converted to a boolean.
   1. If `true`, stops & returns **original value** of the operand.
3. If all operands have been evaluated and `false`, the *last* operand is returned

``` js
1 || 0; // 1 (1 is truthy)
null || 0 || 1; // 1 (1 is first truthy value)
undefined || null || 0; // 0 (all falsy, last operand is returned)
```
**1. Getting first truthy value from list of variables / expressions:**
``` js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

// all variables are optional (can be undefined / falsy values)
firstName || lastName || nickName || "Anonymous"); // SuperCoder

nickName = "";
firstName || lastName || nickName || "Anonymous"); // Anonymous
```

**2. Short-circuit evaluation.**

`||` processes its arguments until first truthy value is reached and then it returns that value immediately, without touching the other arguments.

The importance of this is obvious when an operand isn't just a value: an expression with a side effect, such as a **variable assignment** or **function call.**

``` js
true || alert("not printed"); // nothing: true's seen & evaluation stops
false || alert("printed");  // "printed"
```

Sometimes used to execute commands only if the condition on the left is `false`.

### AND `&&`

In *classical programming*, AND returns `true` if *both operands* are truthy and `false` otherwise:

``` js
true && true;   // true
false && true;  // false
true && false;  // false
false && false; // false
```

Example with `if` `&&` 
``` js
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  "the time is 12:30"; 
}
if (1 && 0) { // evaluated as true && false ** NOT POSSIBLE
  "i'll never be executed! :("; 
}
```

**AND `&&` finds the *first falsy***

AND returns the **first falsy** or the last value if none were found:

1. Evaluates operands left to right
2. Each operand is converted to boolean.
   1. If result is `false`, stops & returns original value of that operand
3. If all operands have been evaluated (all were *truthy*), returns the last operand.

> OR returns the **first truthy** or the last value if none were found.

``` js
1 && 0; // 0
1 && 5; // 5
null && 5;  // null
0 && "no matter what"; // 0
```

Precedence: AND `&&` is HIGHER than OR `||`

``` js
aa & bb || c && d;     // is read as:
(a && b) || (c && d);  //
```
**Don't** replace `if` with `||` or `&&`.

If statements are more obvious and more readable, so it is recommended to use every construct for its purpose:

* `if` if we want `if`
* `&&` if we want `AND`

``` js
let x = 1;
(x > 0) && alert( 'Greater than zero!' ); // NOT RECOMMENDED
if (x > 0) alert( 'Greater than zero!' ); // BETTER! RECOMMENDED.

```

### NOT `!`

The boolean NOT operator `!` accepts a single argument & does the following:

1. Converts the operand to a boolean: `true` / `false`
2. Returns the *inverse* value

``` js
// syntax
result = !value;

// examples
!true; // false
!0;    // true
```

**Double NOT** `!!` is sometimes used for converting a value to a boolean type.

``` js
!!"non-empty string"; // true
!!null; // false
```

### AND, OR, NOT Tasks

``` js
null || 2 || undefined;  // 2 (first truthy value)
alert(1) || 2 || alert(3);  // alert pops up, doesn't return a value (undefined)
                            // 2 is then returned (first truthy)
null || 2 && 3 || 4;  // 2 && 3: returns 3 (all truthy, returns last truthy)
                      // null || 3 || 4: returns 3 (first truthy)
                      // && statements take precedence
// if condition, age between 14-90, inclusively (can reach the edges of 14-90)
if (age >= 14 && age <= 90) 
// if condition, age NOT between 14-90, inclusively
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

if (-1 || 0) alert( 'first' );
// Runs: -1 || 0 = -1, truthy

if (-1 && 0) alert( 'second' );
// Doesn't run: -1 && 0 = 0, falsy

if (null || -1 && 1) alert( 'third' );
// Runs: && higher precedence, -1 && 1 executes first:
// null || -1 && 1 ---> null || 1 ---> 1
```

[Check the login:](https://javascript.info/logical-operators)
``` js
let userName = prompt("Who's there?", "");

if (userName == "Admin") {

  let userPassword = prompt("Password?", "");
  
  if (userPassword == "TheMaster") {
    alert("Welcome!");
  } else if (userPassword == "" || userPassword == null) {
    alert("Cancelled");
  } else {
    alert("Wrong password!"); 
  } 

} else if (userName == '' || userName == null ) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
```

### Ternary Operator

The ternary *or conditional* operator is a bit of syntax that tests a condition and returns one value/expression if true & another if false. It takes up a lot less code than `if...else` block.

```js
( condtion ) ? run this code : run this code instead;
let greeting = ( isBirthday ) ? 'Happy bday!'' : 'Good day.';
```

## Chrome DevTools

To obtain the JS path of an HTML element in the DOM Tree, right click on it, **Copy > Copy JS Path**

Example: `document.querySelector("#main-content > div.display-flex.gap-top-300.lg\\:gap-top-400 > div > article > div.stack.center-images.stzazck--block.type > ol:nth-child(63) > li:nth-child(2) > p > code:nth-child(1)")`

To view the currently selected HTML element on the **Console** tab, hit `esc` and type `$0`.

**Logging Messages**

Web developers log messages for 2 main reasons:

- Making sure code is executing in the *right order*
- Inspecting *values of variables* at a certain moment in time

**Debugging**

`debug(javascriptFunction)` will pause code on the first line of `javascriptFunction` the next time that it's called.

ie: `debug(hideModal)`

## Functions

Anytime you see `()`, a pair of parentheses, and you're not using a loop or if/else statement, you're making use of a function.

Executing a function is also known as **invoking a function**.

``` js
function myFunction() {
  alert('hello');
}

myFunction(); // INVOKE or call function once
```

### Function Parameters

Some functions require *perameters* or values that need to be included inside the `()` parentheses, in order to do it's job properly.

``` js
// replace function parameters: string, string
string.replace("hi", "hello")
```

Not all parameters are required. Some are optional.

Default parameters can be specified by using `=`.

``` js
function hello(name='Bryan') {
  console.log(`Hey ${name}`);
}

hello('Dave');  // Hey Dave
hello();        // Hey Bryan
```

### Anonymous Functions

``` js
function() {
  alert('hello');
}
```

You can create functions *without a name*. Anonymous functions are used when another function expects a function as a parameter, in order to reduce the number of lines of code.

``` js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener('keydown', logKey);

// Instead of defining logKey(), you can use an anonymous function:
textBox.addEventListener('keydown', function(event)
{
  console.log(`You pressed "${event.key}"`);
});
```

### Arrow Functions

Another form of an anonymous function is called the *arrow function*.

Instead of typing `function(event)`, you use `(event) =>`.

Arrow functions are recommended because they make your code:

- more readable
- shorter

```js
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

If the function contains a single line, you can skip the `{}`
```js
textBox.addEventListener('keydown', (event) => 
console.log(`You pressed "${event.key}".`));
```

If the function only takes one parameter, you can skip the `()` around it
```js
textBox.addEventListener('keydown', event => 
console.log(`You pressed "${event.key}".`));
```

If function needs to return a value, and only contains one line, you can omit the `return` statement.
```js
const doubled = originals.map(item => item *2);

// item => item * 2 is equivalent to:
function doubleItem(item) {
  return item * 2;
}
```

Arrow function live example
``` html
<!-- html -->
<input id="textBox" type="text"></input>
<div id="output"></div>
```

``` js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);
```

### Built-in Browser Functions

Array manipulation: `myArray.join(' ')`

Generate random numbers: `Math.random()`

### Function Scope & Conflicts

When you create a function, the variables and other things defined within that function are inside their own separate **scope**.

They are locked away in their own compartments and unreachable from code outside the functions.

Top level, outside of your functions, is called the **global scope**.

JavaScript is setup like this for 2 main reasons:
- Security
- Organization

### Return Values

A function can return a value back into the calling code using `return`.

``` js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

You can `return` without a value, which causes the function to exit immediately.

`return;` returns `undefined`, or no value.

```js
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
```

### Function Naming

Functions are *actions* and their name is usually a *verb*. Naming should be

- Brief
- Accurate as possible
- Describe what the function does

Common verbs used:

- `get...` - return a value
- `calc...` - calculate something
- `create...` create something
- `check...` check something, return a boolean

One function, one action. It should do exactly what's suggested by it's name, **no more**.

Two independent actions deserve two functions. Examples of what *not to do*:

- `getAge` shouldn't `alert` the result. It should only get.
- `createForm` shouldn't modify the document. It should only create & return.
- `checkPermission` shouldn't display `access granted/denied`. it should only perform the check & return the result.

**Functions == Comments**

Separate functions are easier to test & debug, and their existence is a great comment.

```js
// BAD
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

// GOOD 
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

### Function Expressions

Function declaration is one way of creating a function:
```js
function sayHi() {
  alert("Hello");
}
```

A second syntax for creating a function is called a *Function Expression*. It allows you to create a new function in the *middle of any expression*.

``` js
let sayHi = function() {
  alert("Hello");
};
```

### Function is a value

No matter how a functions created, it is a *value*.

```js
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code
```

Mentioning a function without parentheses does *not* cause it to execute.

Because it's a *value*, we can work with it like other values. We can copy a function to another variable:

```js
function sayHi() {    // creates a function, storing it in the variable sayHi
  alert("Hi");
}

let func = sayHi; // without (), it copies the function itself to func and doesn't invoke it.

func();   // "Hi" alert
sayHi();  // "Hi" alert
```

### Callback Functions

`ask(question, yes, no)` has three parameters:

`question` text of question
`yes` function to run if yes
`no` function to run if no

In the example below, `showOk` and `showCancel` are called **callbacks** OR **callback functions**.

``` js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOkay() {
  alert('agreed');
}

function showCancel() {
  alert('cancelled');
}

// Functions showOk and showCancel are passed as parameters
ask("Do you agree?", showOk, showCancel);
```

Using Function Expressions, the above code can be condensed to:

``` js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert('agreed'); },    // anonymous function
  function() { alert('cancelled'); }  // anonymous function
);
```

### Function Expressions vs Function Declarations

Function Declarations: a function, declared as a separate statement, in the main code flow.

Function Declarations can be called **earlier than it is defined**.

Why? JS looks for *global functions* before running the script and creates them, during the *initialization phase*.

```js
// Function Declaration
function sum(a,b) {
  return a + b;
}
```

Function Expression: a function, created inside an expression or inside another syntax construct.

Function Expressions are created when the **execution reaches it and is usable only from that moment**.

``` js
// Function expression
let sum = function(a,b) {
  return a + b;
};
```

## Problem Solving

There are three steps to the problem solving process.

### Understanding the Problem

To gain clarity & understanding the problem

- Write it down on paper
- Reword it in plain english until it makes sense to you
- Draw diagrams

When you can explain the problem in plain english, you understand it.

### Plan

Before jumping into coding a solution to your problem, you need to create a plan to solve it. Some questions that you need to answer at this stage are:

- Does your program have an interface?
- What does it look like? 
- What functionality will the interface have?
- Sketch it out on paper
- What inputs will your program have?
- Will the user enter data or will you get input from somewhere else?
- What's the desired output?
- Given your inputs, what are the steps necessary to return the desired output?

### Pseudocode

Pseudocode is writing out the logic for your program in natural language instead of code. It helps you slow down & think through the steps to take to solve the problem.

Example of pseudocode
```
When the user inputs a number
Initialize a counter variable & set it to 0
While counter is smaller than user inputted number increment counter by 1
Print the value of the counter variable
```

Programmers have a great tool to help with this --- **COMMENTS**!

### Divide & Conquer

From your planning you should have identified some **sub-problems** of the big problem you're solving. Each step in pseudocode algorithm above are sub-problems.

Beginners often start on the **big problem.** **DO NOT DO THIS.** If the problem is complex, you'll get tied in knots and make life harder on yourself.

Instead, decompose the problem into smaller and easier to solve sub-problems. **Decomposition** is the main way to deal with complexity, making problems *easier* and *more approachable* to solve and understand.

Then, solve each sub-problem one by one. 

- Begin with the simplest sub-problem: means you know the answer, or are closer to that answer.
- After that, simplest means *this sub-problem doesn't depend on others being solved.*
- Once all sub-problems are solved, connect the dots.
- Connecting all *sub-solutions* will give you the solution to the main problem.

### Getting suck

What if  I can't solve a sub-problem?

- Take a deep breath. 
- It happens to everyone.

The best programmers & problem-solvers are more curious about bugs and errors than irritated.

Three steps to try when you're stuck:

1. Debug: Go step by step through your solution, trying to find where you went wrong. 
2. Reassess: Take a step back. Look at the problem from another perspective. 
   1. Another way is starting anew. Delete everything & begin with fresh eyes.
3. Research: Google. No matter what problem you have, someone has probably solved it. 
   1. After solving a problem, do this anyway. You can learn a lot from other people's solutions.

**Don't look for a solution to the big problem.** Only look for solutions to sub-problems. 

Unless you struggle, you won't learn anything.

### For Loop Example

``` js
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  console.log(i);
}
```

- Declare var  `i` and assign initial value to `1`
- `i <= answer` is our condition.
  - Loop until i is *greater than* answer
- `i++` means increment `i` +1 every iteration
  
### How to begin thinking like a programmer

### **Comments are code**

- Comments explain code to other programmers or your later self.
- NO!
- Code explains the comments to the computer

### New variable

**Name:** what do we call this thing?
**Type:** what type of data does it contain
**InitVal:** what is it's starting value?
Scope: when functions are involved

**New Variable algorithm**

Create a variable called **name** of type **type** that starts with the value **initVal**.

### Output

**Message:** Text to write to user

**Output Algorithm**

Output the text **message**.

### Input

**Variable:** where answer from user will be stored
**Message:** question being asked of the user

It shouldn't be the first line of your algorithm. 

**Input Algorithm**

Ask the user **message** and store the answer in **variable**.

### Example

Ask the user for two numbers & add them. (Algorithm only)

First Try:
```
Create an integer variable for x
Create an integer variable for y
create an integer variable for sum
ask the user "X: " and put answer in x
ask the user "Y: " and put answer in y
put + y in sum
tell user "answer is " sum
```

Convert to comments:
``` js
// Create an integer variable for x
// Create an integer variable for y
// create an integer variable for sum
// ask the user "X: " and put answer in x
// ask the user "Y: " and put answer in y
// put + y in sum
// tell user "answer is " sum
```

Flesh out the comments:
``` js
// Create an integer variable for x
let x;
// Create an integer variable for y
let y;
// create an integer variable for sum
let sum;
// ask the user "X: " and put answer in x
let x = prompt("x: ");
// ask the user "Y: " and put answer in y
let y = prompt("y: ");
// put + y in sum
sum = x + y;
// tell user "answer is " sum
console.log(`sum: ${um}`);
```
**Failure is wonderful!**

- It's a normal part of programming
- Failures are opportunities to **grow**
- Begin debugging now
- Did you tell it to do incorrectly?
  - Or did you tell it to do the **wrong thing**?
- Most beginners assume it's an implementation problem
- Usually it's really an algorithm problem

**How to Debug**
- The best way to debug is to *not have bugs*
- Bad implementation can be googled
- Bad algorithms usually cannot
- What are you not understanding?
- What tools can you use?
- DON'T start with a solution
- You're most likely assuming something that isn't true

``` js
// Convert to integer code
sum = +x + +y;
```

### For Loops

- **Sentry**: integer variable that will control loop
- **Start**: integer value of sentry at beginning
- **Finish**: Integer value at end
- **Change**: Integer to add to sentry at each pass

**For Loop Algorithm**
Begin with **sentry** at **start** and add **change** to sentry on each pass until **sentry** is larger than or equal to finish.

### Wile Loop

While loops only require a condition.

Good logic requires much more. This is why while loops can be such notorious problems for beginners.

### Multiple Exits

Consider a basic password loop

- It exits with positive result if the user chooses the right password
- It exits with a negative result if the user is wrong three times.

Use a compound condition
- ( tries >=3 ) and guess !=correct

## Understanding Errors

Error messages may appear scary but they provide developers with a treasure trove of knowledge and tell you everything you need to know to resolve them.

Being able to parse errors and warnings without fear will enable you to:

- Effectively debug applications
- Receive meaningful help from others
- Empower yourself to push forward when faced with an error

### Anatomy of an Error

An error is a type of object built into JS and consists of a **name/type** and **message**.

Example:

```js
const a = "Hello"
const b = "World"

console.log(c)
```

This code will run but it will generate an error.

This is called **throwing** an error.

`Uncaught ReferenceError: c is not defined at script.js:4`

A `ReferenceError` is thrown when one refers to a variable that is **not declared and/or initialized**. 

`ReferenceError` can be caused by many things. ie: `ReferenceError: can't access lexical declaration 'X' before initialization`

The next part of the error tells you where to find the error: `script.js` file and `4` line number. Clicking on the error will navigate to that line of code in the Developer Tools.

**Stack trace** is another important part of an error. It helps you understand **when an error was thrown** and **what functions were called** that led up to that error.

``` js
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

Error:

`Uncaught ReferenceError: c is not defined`
`at add (script.js:5)`
`at print (script.js:9)`
`at script.js:12`

This stack trace tells us that:

1. `c is not defined` in scope of `add()`, which is declared on line 5.
2. `add()` was called by `print()`, which is declared on line 9.
3. `print()` itself was called on line 12.

### Common Types of Errors

**Syntax Errors** occur when code is not written correctly, in accordance with grammatical rules of JS.

ie: `console.log "Hello world!";`

Error: `Uncaught SyntaxError: Invalid or unexpected token`

**Reference Error** occur when variables you're trying to reference does not exist, within the current scope, or has been spelled incorrectly.

**Type Errors** are thrown for several reasons:

- An operand or error passed to a function is incompatible with the type expected by that operator/function.
- When attempting to modify a value that can't be changed
- When attempting to use a value in an inappropriate way

Pro tip: **TypeError** = Check your data type!

``` js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

Error: `Uncaught TypeError: str1.push is not a function`

`.push()` is a function for arrays, but *not for strings*. 

### Console Methods

Console has other useful methods - not just `console.log()`.

`console.table()` can display the data in a table format. 

```js
// console.table syntax
console.table(tabledata, tablecolumns)
// tabledata: The data to fill the table with.
// tablecolumns: OPTIONAL: An array with the names of the table columns.

console.table(["Audi", "Volvo", "Ford"]);
console.table({firstname:"John", lastname:"Doe"});

// Example
const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}

console.table([car1, car2, car3]);  // print every value in table
console.table([car1, car2, car3], ["model"]); // only print the model column in table
```

`console.trace()` method displays a trace that show how the code ended up at a certain point.

### Errors vs Warnings

Errors *stop* execution of your program and prevent further action.

Warnings provide you insight on *potential problems* that *may not crash* your program at runtime or at all.

[MDN's JavaScript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

# Clean Code

## [Rules of thumb for writing *clean code*:](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

- Indentation: Consistency is what matters.
- Semi-colons: Just use them.
- Naming Things: Be descriptive.
  - Single characters are *okay* to use in the context of a **loop** or **callback function**. Otherwise:
  - Variables: Begin with `noun` or `adjective`
  - Functions: Begin with `verb`
- Line length: 80 Characters. Be consistent.

```js 
// One possible format
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Another possible format
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                  howManyTacos + oneMoreReallyLongThing;
```

**Tips:**

- Revise Your Logic Before Coding:   **flow diagrams** or **written pseudo-code**.
- Clearly Expose the Structure of the Page: 
    ```js <div id="main-container">
        <div id="header">
            <div id="logo">...</div>
            <div id="main-menu">...</div>
        </div>
        <div id="content">
            <div id="left-column">...</div>
            <div id="center-column">...</div>
            <div id="right-column">...</div>
        </div>
        <div id="footer">
            <div id="footer-menu">...</div>
            <div id="disclaimer">...</div>
        </div>
    </dv> 
    ```
- Use the correct **indentation**
- Write explanatory comments
  - Avoid **abusing comments**:
    - Writing explanatory notes to self `/* Will finish this later… */`
    - Blaming stuff on other people `/* John coded this. Ask him. *`
    - Writing vague statements `/* This is another math function. */`
    - **Erasing chunks of code**. Commenting it out instead is not absolutely evil.
  - Good Comments:
    - Authoring `/* Coded by Bryan Miller, July 24, 2022*/`
    - Details on functionality of method/procedure `/* This function validates the login form with the aid of the e-mail check function */`
    - Quick notifications/labels that state where a change was made: `/* Added e-mail validation procedure */`
- Avoid XL Functions
  - Break up functions into smaller ones
  - Teams can make better use of those repeated procedures through separate functions
- Use naming standards for functions & variables
- Treat Changes with Caution
  - ie: Commenting out code instead of deleting it
  - Be aware of not meddling with previous efforts for maintaining clean & ordered code.
  - Maintain indentation, commenting on modifications made or broadening existing comments
  - Respecting standards in use
- Avoid mixing of code languages (embedded style property in HTML)
- Summarize your imports
  - Don't abuse multiple files for different coding languages
  - If there are too many files, combine them into one or two
  - Saves space, makes it look cleaner, saves on loading time & efficiency
    - **Each imported file is an HTTP request** that affects performance

## [Code Tells You How, Comments Tell You Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

"Programs **must be written for people to read**, and only **incidentally** for **machines to execute**."

Concentrate on explaining to human beings what we want a computer to do --- *not instructing a computer what to do*.

If you write your code *to be consumed by other programmers first*, and by the compiler second, you may find the need for additional **comments** to be **greatly reduced**.

Sometimes **fewer** comments makes code **more readable**.

However, no matter how simple, concise and clear your code may end up being, it's **impossible for code to be completely self-documenting.**

**Comments can never be replaced by code alone:**

**Code can't explain**:
-  WHY the program is being written
-  REASON for choosing this or that method
-  REASON why alternative approaches were taken.

Something that is **common sense** to you may be confusing to another developer without any context.

``` perl
// You may very well know that
$string = join('',reverse(split('',$string)));
// How hard is it to add "# Reverse the string" into your code?
```

# Node.JS

Node.JS is a JavaScript runtime environment. It allows you to run JavaScript *outside of your web browser.*

`nvm` Node Version Manager makes it easy to change Node versions and upgrade Node.

`npm` Node Package Manager installs various libraries and tools used in JavaScript environments.

Installation:

``` sh
# install nvm
sudo apt install curl
sudo apt update && sudo apt upgrade
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# initialize nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# install node
nvm install --lts # install long term support
nvm use --lts
```

## Using Node console

To run Node console, run `node` in your terminal. To exit, type `.exit`.

# Arrays

Arrays are used to deal with large quantities of strings and numbers.

An **Array** is an ordered collection of items: strings, numbers or other things.

## Creating Arrays

``` js
// Syntax for arrays:
const arrayName = [item1, item2, ...];      

// Examples
const cars = ["Saab", "Volvo", "BMW"];

// Spaces & line breaks don't matter
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

// You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// Create Array using Keyword new
const cars = new Array("Saab", "Volvo", "BMW");
```

## Accessing Array Elements

You access an array element by referring to the index number:

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

## Changing an Array Element

``` js
const cars = ["Saab", "Volvo", "BMW"];
// Change index 0 to Opel
cars[0] = "Opel";
```

## Accessing the Full Array

The full array can be accessed by referring to the name of the array.

``` js
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
```

## Arrays are Objects

`typeof myArray` returns "object".

However, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". ie: `person[0]`

```js
const person = ["John", "Doe", 46];
person[0]; // "John"
```

**Objects** use **names** to access its "members". ie: `person.firstName`

``` js
const person = {firstName:"John", lastName:"Doe", age:46};
person.firstName; // "John"
```

## Array Elements Can Be Objects

Variables can be objects. Arrays are special kinds of objects.

*In a **single array***, you can have variables of different types:

- Objects
- Functions
- Arrays

``` js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

## Array Properties & Methods

Array's *real strength* is displayed when using their **built-in properties and methods**.

``` js
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
```

### Length property

`.length` Returns the number of elements in the array.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; // 4
```

## Accessing 1st & Last Array Element

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// First Element
let fruit = fruits[0];  // Banana
// Last Element
let fruit = fruits[fruits.length - 1]; // Mango (-1 because element #1 = index 0)
```

## Looping Array Elements

You can use `for` to loop through an array.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitLength = fruits.length;

let text = "<ul>"; // begin text w/ unordered list tag

for (let i = 0; i < fruitLength; i++) { 
  text += "<li>" + fruits[i] + "</li>"; // add list item element to text var w/ array element
}

text += "</ul>"; // append closing tag
```

There is also the `Array.forEach()` function:

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```

## Adding Array Elements

Easiest way to add an element to an array: `.push()` method.

``` js
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
```

You can also use the `length` property:

``` js
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
// because .length is 1 greater than the last index
```

**WARNING**: You can create undefined holes in an array:

``` js
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
// BAD
```

## Associative Arrays

**JavaScript does NOT support associative arrays.**

JavaScript **always** uses **numbered indexes** for **arrays**.

``` js
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
```

It does NOT support arrays with named indexes.
``` js
const person = [];
person["firstName"] = "John"; // BAD, unsupported
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0 (WRONG)
person[0];         // Will return undefined (WRONG)
```

## Differences between Arrays & Objects

Arrays use **numbered indexes.**
- Use Arrays when you want element names to be **numbers**.

Objects use **named indexes.**
- Use Objects when you want element names to be **strings (text)**.

> Arrays are *special kinds* of objects.

## Recognizing Arrays

`typeof myArray` returns `object`.

To get around this, you can use `Array.isArray()` function or `instanceof` operator.

``` js
const fruits = ["Banana", "Orange", "Apple"];

Array.isArray(fruits);    // true
fruits instanceof Array;  // true
```

## Array Methods (Indepth)

### toString
`toString()` method converts an *array* to a string of *comma separated* `,` array values.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// Banana,Orange,Apple,Mango
```

### Join 

`join()` method joins all elements into a string like `toString`, but you can specify the *separator*:

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
// Banana * Orange * Apple * Mango
```

### Pop & Push

Pop & push are used to add or remove new elements.

- Popping items **out** of an array.
- Pushing items **into** an array.

#### Pop 

`.pop()` method removes the ***last*** element from an array.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits; // ['Banana', 'Orange', 'Apple']
```
`.pop()` also returns the ***last*** value that was popped out.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let poppedFruit = fruits.pop();
poppedFruit;  // 'Mango'
```

#### Push

`.push()` method adds a new element to the end of an array.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); 
fruits; // ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
```

`.push()` method also returns the new array **length**.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsLength = fruits.push("Kiwi");
fruitsLength; // 5
```

## Shift

`.shift()` method removes the ***first*** array element, and shifts all other elements to a lower index.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
fruits; // ['Orange', 'Apple', 'Mango']
```
`.shift()` method returns the value that was *"shifted out":*

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift(); 
fruit; // Banana
```

## Unshift

`.unshift()` method **adds** a new element to the **beginning** of an array and *unshifts* older elements.

AND it returns the new array length.

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // 5
fruits; // ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']
```

## Merging Arrays (Concatenate)

`.concat()` method creates a new array by merging (concatenating) existing arrays:

``` js
// Merging 2 arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);  
myChildren; // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

// Merging 3 arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
myChildren; // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']

// Concat accepts strings as well
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
myChildren; // ['Emil', 'Tobias', 'Linus', 'Peter']
```

## Splice

`.splice(x, y, "Item",...,"Item")` method can add new items to an array.

- 1st parameter `x`: **where** new elements should be **added**
- 2nd parameter `y`: **how many** elements should be **removed**
- Rest of parameters: **define** new elements **to be added.**

`splice()` returns *an array with the deleted items.*

**Adding elements to an array using `slice()`**

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Grapes"];
fruits.splice(2, 2, "Lemon", "Kiwi");   // ['Apple', 'Mango'] --- items removed
           // 2: position -- fruit[2] (3rd item)
           //    2: # of items to delete: fruit[2], fruit[3]
           //       Add Lemon & Kiwi to array
```

**Deleting elements with `splice()`**

``` js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);  // Banana
fruits; // ['Orange', 'Apple', 'Mango']
```

## Slice

`.slice()` method slices out a piece of an array **into a new array.**

It does NOT REMOVE anything from the source array.

``` js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Single argument: Everything from index X and on
const citrus = fruits.slice(1); 
                         // 1: starting position -- fruits[1]

citrus;     // ['Orange', 'Lemon', 'Apple', 'Mango']
fruits;     // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```
If two arguments are passed to `slice(x, y)`:

- `x` starting position   array[x]
- `y` ending position     array[y]

``` js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

citrus; // ['Orange', 'Lemon']
```

## Automatic ToString

JavaScript automatically converts arrays to comma separated strings.

ALL objects in JS have a `toString()` method.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits.toString();  // Verbose method
document.getElementById("demo").innerHTML = fruits; // AUTOMATIC version
```

# Loops

Loops are used to make a computer do a repetitive task.

## For ... Of Loop

The basic tool for looping through a collection is the `for ... of` loop.

``` js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];


for (const cat of cats) { // get 1st item in `cats`, assign it to `cat`
  console.log(cat);       // run the code { } & repeat until end of collection
}
```

## Map() & Filter()

These are specialized loops.

`map()` is used to **do something** to every item in a collection and then **create a new collection** with the changed items.

``` js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats.map(toUpper);  // perform function to every item in cats
                                      // create new array in upperCats

upperCats; // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

function toUpper(string) {
  return string.toUpperCase();
}
```

`filter()` is used to **test each item** in a collection and **create a new collection** containing ONLY matching items.

``` js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter(lCat); // test each item with lCat function
                                    // store matches in filtered
function lCat(cat) {
  return cat.startsWith('L'); // boolean: if true, return item
}

filtered; // [ "Leopard", "Lion" ]
```

`filter()` and `map()` are often used with **function expressions**:

``` js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

//                            parameter of function
const filtered = cats.filter((cat) => cat.startsWith('L'));
//                                    code within function

filtered; // [ "Leopard", "Lion" ]
```

## Standard For Loop

``` js
for (initializer; condition; final-expression) {
  // code to run
}
```
- **Initializer** variable to set a number, to be incremented (counter)
- **Condition** when loop should **stop**. (comparison operator)
- **Final Expression** evaluated during each run. (increment the variable)

``` js
for (let i = 1; i < 10; i++)
{
  i;  // current value of counter
}
```
- `let i = 1` is the counter variable, starting at 1.
- `i < 10` keep looping as long as i is less than 10
- `i++` add 1 to loop each time round the loop

**Looping Through Collections**

``` js
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// For...Of loop example
for (const cat of cats) {
  console.log(cat);
}

// *** Standard For Loop ***
for (let i = 0; i < cats.length; i++) {
  // First Run: i = 0
  console.log(cats[i]);
} // End of 1st Loop, execute this ^
```

`for...of` didn't exist in the early versions of JavaScript, so the For Loop was the standard way to iterate through an array. 

However, it *increases the chances of bugs* into your code./

**It's BEST to use `for...of` when you can!**

Sometimes, you still need a `for` loop. For example:

``` js
const cats = ['Pete', 'Biggles', 'Jasmine'];
let myFavoriteCats = 'My cats are called ';
```

`for...of` **doesn't work** because there's no way to know when you're on the final loop iteration.

``` js
for (const cat of cats) {
  myFavoriteCats += `${cat}, `
}

myFavoriteCats; // "My cats are called Pete, Biggles, Jasmine, "
                // Missing ", and" -- not well formed
```
`for` loop allows you to know when you're on the last loop iteration:

``` js
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {   // We are at the end of the array (last item)
    myFavoriteCats += `and ${cats[i]}.` // add "and "
  } else {
    myFavoriteCats += `${cats[i]}, `
  }
}
```

## Exiting Loops `break`

To stop a loop mid-execution, you can use a `break` statement. A `break` statement will *immediately exit the loop* and make the browser move onto any code that follows it.

Example: Search through contacts/phone numbers and return just the first number you want to find.

``` html
<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>

<p></p>
```

``` js
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {               // When button is clicked
  const searchName = input.value.toLowerCase();     // Convert search term to lowercase
  input.value = '';
  input.focus();
  para.textContent = '';
  for (const contact of contacts) {                 // Loop thru contact list
    const splitContact = contact.split(':');        // Split current contact into array 
    if (splitContact[0].toLowerCase() === searchName) {   // If splitContact name is match
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';  // Update <p> with the above string
      break;  // Stop loop & move on
    }
  }
  if (para.textContent === '') {
   para.textContent = 'Contact not found.';
 }
});
```

## Skipping Iterations `continue`

`continue` is similar to `break`, but it skips to the *next iteration* instead of exiting the loop.

Example: Takes a number as input & returns only numbers that are **squares** of integers (whole numbers).

``` html
<label for="number">Enter number: </label>
<input id="number" type="text">
<button>Generate integer squares</button>

<p>Output: </p>
```


``` js
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  para.textContent = 'Output: ';
  const num = input.value;
  input.value = '';
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);            // sqRoot of i, ie:  4
    // if you round down sqRoot and it's NOT the same as the initial value (integer), ignore number
    if (Math.floor(sqRoot) !== sqRoot) {  
      continue; // Skip to next loop iteration
    }
    para.textContent += `${i} `;
  }
});
```

## While & Do...While

`while` loops are very similar to `for` loops, except for:
- the initializer is set *before the loop*
- the final-expression is included *inside the loop*

Both loops contain the same 3 items and they're defined in the same order. 

``` js 
initializer
while (condition) {
  // code to run

  final-expression
}
```

Example:

``` js
const cats = ['Pete', 'Biggles', 'Jasmine'];
let myFavoriteCats = 'My cats are called ';

let i = 0;  // initializer

while (i < cats.length) { // condition
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++; // final-expression
}

myFavoriteCats;     // "My cats are called Pete, Biggles, and Jasmine."
```

`do...while` is very similar, but structured slightly different.

**Do...While ALWAYS excutes at LEAST one time** because the condition comes *after* the code.

```js
initializer
do {
  // code to run

  final-expression
} while (condition)
```

`do...while` example:

``` js
const cats = ['Pete', 'Biggles', 'Jasmine'];
let myFavoriteCats = 'My cats are called ';

let i = 0;  // initializer 
do {
  if (i === cats.length - 1) { 
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++; // final-expression
} while (i < cats.length); // condition

myFavoriteCats;     // "My cats are called Pete, Biggles, and Jasmine."
```

## Choosing the Right Loop

If you're iterating through an **array** or **object** that supports it and you **don't need access to the index position**, use `for...of`. **It's the best choice.**

Otherwise, `for`, `while` or `do...while` are largely interchangeable. 

`for` is recommended to begin with, because it's the easiest for remembering everything.

