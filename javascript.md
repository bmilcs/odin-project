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

1. External Script:

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

Chained assignments evaluate from _right_ to _left._

```js
let a, b, c;
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
let user = "John",
  age = 25,
  message = "Hello";

// Separate lines (better readability)
let user = "John";
let age = 25;
let message = "Hello";

// Combined multi-line options:
let user = "John",
  age = 25,
  message = "Hello";

// Or
let user = "John",
  age = 25,
  message = "Hello";
```

**Change the value** of a variable:

```js
let message;
message = "Hello";
message = "World"; // Removes old data "Hello"
alert(message); // "World"
```

**Copy data** from one variable to another:

```js
let hello = "Hello World!";
let message;

// Copy contents of hello to message variable
message = hello;
alert(message); // "Hello world!"
```

**Do NOT declare a variable twice**, as it will cause an error:

```js
let message = "This";
// repeated 'let' = ERROR
let message = "That"; // SyntaxError: 'message' has already been declared!
```

---

### Variable Naming

There are 2 limitations on variable names in JavaScript:

1. Must contain _only_ **letters**, **digits**, **$** or \_
2. First character can NOT be a digit

[**camelCase**](https://en.wikipedia.org/wiki/CamelCase) is commonly used. Camel case uses multiple lowercase words strung together, with each new word (after the first word) receiving a capital letter:

```js
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
let apple = "red";
let APPLE = "green";
```

**Reserved Names** are words that **cannot be used** because they are used by the language itself.

```js
let let = 5;  // ERROR, reserved name: let
let return = 5; // ERROR, reserved name: return
```

**Use Strict**

Normally, you need to _define a variable_ before using it.

In the _old times_, it wasn't possible to create a variable by a mere assignment of the value without using `let`.

To maintain compatibility with older scripts, **DON'T** insert "use strict".

```js
// MISSING 'use strict'
num = 5; // num is created, if it doesn't exist
```

```js
"use strict";
num = 5; // ERROR: num not defined
```

---

### Constants

Constants are variables that cannot be reassigned or changed. Attempting to do so causes errors.

To create a constant, you substitute `let` with `const`:

```js
const myBirthday = "09.09.1999";

myBirthday = "08.08.1988"; // ERROR: can't reassign constant!
```

#### Constants: Known Before Execution

Use CAPITAL LETTERS & underscores for constants that contain _difficult-to-remember_ values that are known _before execution_.

```js
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
- Reading code: `COLOR_ORANGE` is _more meaningful_ than `#FF7F00`

#### Constants: Calculated in Run-Time

If a constant is _calculated in run-time_ and _unknown before execution_, it should be named normally, using camelCase.

```js
const pageLoadTime = // time taken for a webpage to load
                     // - unknown before execution (calculated in run-time)
                     // - but doesn't change after it's set (constant)
```

---

### Naming Best Practices

Variables should have a clean, obvious meaning, describing the data that it stores.

It is one of the most important & complex skills in programming. Variable names reveal if code was written by a **beginner vs. an experienced developer**.

In a real project, most of the time is spent **modifying & extending** an existing code base -- not writing something new from scratch.

Returning to code after doing something else for a while, it's much easier to find info that's well-labeled, or when variables have _good names._

_Good-to-follow Rules:_

- Human-readable Names

  - `userName` `shoppingCart`

- Avoid abbreviations or short names --- _unless you know what you're doing_

  - `a` `b` `c`

- Make names _maximally_ descriptive & concise

  - `data` `value` are bad --- unless the context of the code makes it _exceptionally obvious_ what they are referencing

- Agree on terms within your _team OR in your own mind_
  - If a site visitor is called a `user`, related variable naming options:
    - Good: `currentUser` `newUser`
    - Bad: `currentVisitor` `newManInTown`

#### Reusing Or Creating New Variables

Extra variables are good, not evil.

Lazy programmers _reuse_ existing variables.

- Causes confusion as to what's inside the variable at any given point.
- Save a little bit of time on _variable declaration_
- BUT lose 10x more on debugging

JavaScript Minifiers & browsers optimize code well enough, so performance issues aren't a concern.

Using different variable names for different values can _help the engine optimize your code._

## Data Types

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

Numbers are the building blocks of programming logic. The _number type_ represents both _integer_ and _floating point_ numbers.

```js
let n = 123;
n = 1.23;
```

**Special numeric values**

- `infinity` Greater than any number
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

| Operator | Description    |
| -------: | :------------- |
|        + | Addition       |
|        - | Subtraction    |
|       \* | Multiplication |
|     \*\* | Exponentiation |
|        / | Division       |
|        % | Modulus        |

Examples

```js
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
| ------- | -------- | ------- |
| 100     | +        | 50      |

A operator is _unary_ if it has a single operand.

```js
let x = 1;
x = -x; // unary operand -
alert(x); // -1
```

An operator is _binary_ if it has 2 operands.

```js
let x = 1,
  y = 3;
alert(y - x); // 2, binary - operator subtracts values
```

```js
let x = 5;
let y = 3;

let z = x + y; // Addition
let z = x - y; // Subtraction
let z = x * y; // Multiplication
let z = x / y; // Division, produces quotient & remainder
let z = x % y; // Modulus, produces remainder in division
```

**Incrementing** & **Decrementing**

Increment Operator `++` adds 1 to a value `+1`

Decrement operator `--` subtracts 1 from a value `-1`

Operators `++` and `--` can go _before_ or _after_ a variable, which changes it's behavior:

- Prefix form: `++counter` returns the _new_ value
- Postfix form: `counter++` returns the _old_ value

```js
let counter = 1;
let a = ++counter; // ++BEFORE: changes the counter AND THEN assigns the variable a its value
a; // 2

let counter = 1;
let a = counter++; // AFTER++: assigns "a" with old counter value
// THEN increments "counter" variable +1
a; // 1
counter; // 2

let counter = 1;
alert(2 * ++counter); // 4 (++counter first then 2*counter)

let counter = 1;
2 * counter++; // 2 (2 * counter[1] then counter++)
counter; // 2
```

**Exponentiation**

Exponentiation operator `**` _raises the first operand to the power of the second operand._

```js
let x = 5;
let z = x ** 2; // 5^2 = 25
// OR
let z = Math.pow(x, 2); // 5^2 = 25
```

**Operator Precedence** (Order of operations)

Operator precedence is the order in which operations are performed in arithmetic expression.

1. `(`Parenetheses`)`
2. Unary plus `+` & unary negation `-`
3. Multiplication `*` & Division `/`
4. Addition `+` & Subtraction `-`
5. Left -> Right

```js
let x = 100 + 50 * 3; // 50 * 3, then +100
let y = (100 + 50) * 30; // 100+50, then * 30
```

**Assignment Operators**

The most basic assignment operator is `=`. It assigns the variable on the _left_ with the value stated on the right.

There are more complex types, which provide _useful shortcuts_ to keep your code _neater & more efficient._

> Modify-in-place or "_modify-and-assign_"

```js
let x = 10;
let y = 5;

x += y; // Addition Assignment:       x = x + y
x -= y; // Subtraction Assignment:    x = x - y
x *= y; // Multiplication Assignment: x = x * y
x *= y; // Division Assignment:       x = x / y
```

Because _modify-and-assign_ operators are _operators_, they run _after_ most other calculations.

```js
let n = 2;
n *= 3 + 5; // 3+5
// n *= 8 ... n = n * 8
// 16 -- right part is evaluated first
```

**JavaScript Numbers**

JavaScript only has one type of number: with or without decimals

- Always 64-bit floating point
- Double precision floating point numbers
- Does not define integers, short, long, floating point, etc.

```js
let x = 3.14; // w/ decimals
let y = 3; // w/o decimals
```

Extra large or extra smalls can be written with _scientific (exponent) notation_.

```js
let x = 123e5; // 12,300,000
let y = 123e-5; // 0.00123
```

Integer precision, without a period or exponent notation, are accurate up to **15 digits**.

```js
let x = 999999999999999; // x will be 999999999999999
let y = 9999999999999999; // y will be 10000000000000000
```

Floating point arithmetic is **not always 100% accurate**.

```js
let x = 0.2 + 0.1; // 0.30000000000000004
// To solve this problem, it helps to multiply & divide:
let x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
```

**Adding Numbers and Strings** (binary +)

> Concatenation & Addition share `+` operator, which causes weird behavior:

```js
// Add two numbers, result will be a number
let x = 10;
let y = 20;
let z = x + y; // 30

// If you add two strings, the result will be a string concatenation:
let x = "10";
let y = "20";
let z = x + y; // 1020

// If you add a string + a number, result will be a string
let x = "10";
let y = 20;
let z = x + y; // 1020
```

JavaScript interpreter works _left to right_. Therefore:

```js
// Common mistake #1
let x = 10;
let y = 20;
let z = "The result is: " + x + y; // The result is: 1020
// String + Integer = Concatenation

// Common mistake #2
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; // 3030
let result = x + y + Number(z); // 60
// Integer + Integer = 30, Integer + String = Concatenation 3030
```

**Numeric Conversion** (unary +)

The unary `+` applied to _numbers_ doesn't do anything. However, `+` applied to a _string_ converts it to a _number_.

```js
let x = 1;
alert(+x); // 1

let y = -2;
alert(-x); // -2

// conversion of non-numbers
let x = "5"; // string
+x + 5; // 10

+true; // 1
+""; // 0
```

**Numeric Strings**

JavaScript strings can have numeric content, and JS will attempt to convert strings to numbers in all numeric operations.

```js
let x = "100"; // string
let y = "10"; // string
let z = x / y; // 10

let x = "100"; // string
let y = "10"; // string
let z = x * y; // 1,000

let x = "100"; // string
let y = "10"; // string
let z = x - y; // 90

let x = "100"; // string
let y = "10"; // string
let z = x + y; // 10020 -> concatenation, 2 strings, won't work
```

**NaN** - Not a Number

`NaN` is a reserved word indicating that a number **is not a legal number.**

Trying to do arithmetic w/ a non-numeric string will result in `NaN`.

```js
let x = 100 / Apple; // NaN
let x = 100 / "10"; // 10
```

`isNaN(x)` is a **global function** to find out if a value is not a number.

```js
let x = 100 / "Apple";
isNaN(x); // true
```

If `NaN` is used in a mathematical operation, the result will be `NaN`

```js
let x = NaN; // NaN
let y = 5; // Number
let z = x + y; // = NaN

let x = NaN; // NaN
let y = "5"; // string
let z = x + y; // = NaN5
```

`typeof NaN` returns `number`

```js
typeof NaN; // number
```

**Infinity**

`Infinity` or `-Infinity` is the value JS will return _if you calculate a number outside of the largest possible number_

```js
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

```js
let x = 2 / 0; // infinity
let y = -2 / 0; // -infinity
```

`typeof infinity` returns `number`

```js
typeof infinity; // number
```

**Hexadecimal**

JS interprets numeric constants as hexadecimals if they are preceded by `0x`

```js
let x = 0xff; // 255
```

**Number Methods**

Restricting decimal places (rounding) w/ `.toFixed()`

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal; // 1.766584958675746364;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces; // 1.77
```

**Converting to number data types**

To convert a string to a number, use `Number()` constructor.

```js
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

**Comparison Operators**

When you want to run true/false tests, and act conditionally based on the results, you use **comparison operators**.

- `==` Loose equality: Converts value to a common type & then checks equality (_Are two values **equal to** one another?_)
- `!=` Loose inequality: Converts value to a common type & then checks inequality (_Are two values **not equal** to one another?_)
- `===` Strict equality: _Are two values AND their types **identical** to one another?_
- `!==` Strict non-equality: _Are two values AND their types **NOT identical** to one another?_
- `<` Less than: _Is the left value **less than** the right value?_
- `>` Greater than: _Is the left value **greater than** the right value?_
- `<=` Less than: _Is the left value **less than OR equal to** the right value?_
- `>=` Less than: _Is the left value **greater than or equal to** the right value?_

```js
let x = "5";
let y = 5;
x == y; // true
x === y; // false

let x = new Number(500);
let y = new Number(500);
x == y; // false: JS Objects cannot be compared
x === y; // false
```

**[Testing Knowledge](https://javascript.info/operators)**

```js
"" + 1 + 0; // 10
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -14
// whitespace is ignored
null + 1; // 1
undefined + 1; // NaN
// undefined = NaN when converted to a number
" \t \n" - 2; //-2
// space characters are trimmed off start/end when converted to a #

// fix the addition
let a = prompt("First number?", 1); // +prompt()
let b = prompt("Second number?", 2); // +prompt()
alert(a + b); // OR alert(+a + +b);
```

## Strings

- Is a simple piece of text and a fundamental building block of any language.
- Strings must be wrapped in quotes
  - Without quotes, it is assumed to be a _variable_ name, _property_ name, _reversed_ word, or similar.

Creating strings:

```js
const string = "My name is Jack";
const copyString = string;
console.log(string);
```

Single quotes and Double quotes have very little differences and their use is personal preference.

```js
let doubleString = "Double quoted";
let singleString = "Single quoted";
let nestedQuotes = 'This "works", too';
```

Escaping characters in a string: `\`

```js
let escapedExample = "I'm a tired";
```

Escape Sequences

- `\0` nulll character
- `\\` backslash
- `\n` newline
- `\r` carriage return
- `\v` vertical tab
- `\t` tab
- `\b` backspace
- `\f` form feed

Concatenating Strings using a **_Template Literal_**, which works like a normal string, except you can include variables in it.

> Use \`

```js
const firstName = "Bryan";
const lastName = "Miller";
const joinedName = `${firstName} ${lastName}`;
const greeting = `Hello, ${firstName} ${lastName}`; // Hello, Bryan Miller
const greeting = `Hello, ${joinedName}`; // Hello, Bryan Miller
```

Including expressions in strings

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
// "I like the song Fight the Youth. I gave it a score of 90%."
```

Multi-line strings

```js
const output = `I like the song.
I gave it a score of 90%.`;
const output = "I like the song.\nI gave it a score of 90%.";
// I like the song.
// I gave it a score of 90%.
```

### String Methods & Properties

- A **method** is a bit of functionality that is built into the language or into specific data types.
- [List](https://www.w3schools.com/jsref/jsref_obj_string.asp)
- [Exhaustive List](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**String Length**

`length` property returns the length of a string:

```js
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length; // 26
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

```js
// positive values go left > right
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); // Banana

// negative values go right > left
let part = str.slice(-12, -6); //  Banana: left 12x from end, left 6x from end

// single value  returns everything from the given starting point
let part = str.slice(7); // Banana, Kiwi
let part = str.slice(-12); // Banana, Kiwi
```

**SubString**

`substring()` is similar to `slice()`, but negative values (anything under 0) are treated as 0.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); // Banana
let part = str.substring(-12, -6); // ''
```

**SubStr**

`substr()` is similar to `slice()`, except the second parameter specificies the **length** of the extracted part.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); // Banana

// single values return everything from the given starting point
let part = str.substr(7); // Banana, Kiwi

// negative numbers start from the right
let part = str.substr(-4); // Kiwi
```

#### Replacing String Content

`replace()` method replaces a value with another value in a string.

It only replaces the **FIRST** match and it's case sensitive.

```js
let text = "Replace me! No me!";
let newText = text.replace("me!", "you!"); // Replace you! No me!
```

To ignore case, use regular expression with an `/i` (insensitive) flag.

```js
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "bmilcs.com"); // Please visit bmilcs!
```

To replace ALL matches, use regular expression `/g` (global) flag

```js
let text = "Hi Hi Hi";
let newText = text.replace(/Hi/g, "Hey"); // Hey Hey Hey
```

#### Converting to Upper/Lower Case

To change the case of a string, use `.toUpperCase()` and `.toLowerCase()` methods.

```js
let text = "Hello World";
let text2 = text.toUpperCase(); // HELLO WORLD
let text3 = text.toLowerCase(); // hello world
```

#### Concatenation Method

Concatenation of strings can be performed with the `concat()` method.

```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); // Hello World
// This can also be done with the plus operator
let text3 = text1 + " " + text2; // Hello World
```

#### Trim Whitespace

Use `.trim()` to remove whitespace from both sides of a string.

```js
let text = "       Hi   ";
let text2 = text1.trim(); // "Hi"
```

### Add Padding to Strings

`padStart()` and `padEnd()` pads a string with another string. The number parameter represents the **max length** of the string:

```js
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
let char = text.charAt(0); // H
let char = text.charCodeAt(0); // 72
```

#### Converting Strings to Arrays

`split()` method converts strings to arrays.

```js
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
// text[0] = a
// text[1] = b
// text[1] = c
```

### Comparison (Strings)

To see whether a string is greater than another, JavaScript uses the so-called _dictionary_ or _lexicographical_ order.

Strings are compared letter-by-better by their _unicode value_ (case sensitive). The algorithm is simple:

1. Compare 1st character
2. If the 1st character is greater/less than, done.
3. If both characters are same, compare the next character in the string.
4. Loop until end of string
5. If both strings are the same length, then they're equal.
6. Else, the longer string wins.

```js
"Z" > "A"; // true
"Glow" > "Glee"; // true
"Bee" > "Be"; // true
"Hi" > "Z"; // false
```

**Comparison of different types**

When comparing 2 different data types, JS converts values to numbers.

```js
"2" > 1; // true, string 2 becomes 2
"01" == 1; // true, string 01 becomes 1
true == 1; // true
false == 0; // true

// boolean conversion:
let a = 0;
Boolean(a); // false

let b = "0";
Boolean(b); // true

a == b; // true!

// null & undefined
Number(null); // 0
Number(undefined); // NaN
null == undefined; // true -- "sweet couple", equal to each other
// but not any other value
null === undefined; // false - different TYPES (strict equality)
```

Comparison `>` `>=`, etc. is different than equality check `==`.

```js
// strange result: null vs 0
null > 0; // false  (>)
null == 0; // false  (== equality)
alert(null >= 0); // true (>= comparison)
```

Undefined should NOT be compared to other values:

```js
undefined > 0; // false (becomes NaN, which returns false to ALL comparisons)
undefined < 0; // false (becomes NaN, which returns false to ALL comparisons)
undefined == 0; // false (ONLY equals null & undefined)
```

## Conditionals

- `if` condition is true, execute a block of code
- `else if` tests a new condition, when 1st `if` condition is false
- `else` executives when `if` / `else if` is false
- `switch` specify many alternative blocks of code to be executed

### If

```js
if (condition) {
  //  block of code to be executed if the condition is true
}

if (hour < 18) {
  // If hour is less than 18:00 then
  greeting = "Good day";
}
```

### Else

```js
if (condition) {
  // ^ true
} else {
  // if = false
}

if (hour < 18) {
  // If hour is less than 18:00 then
  greeting = "Good day";
} else {
  // Hour is not less than 18:00
  greeting = "Good evening";
}
```

### Else If

```js
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
2. Value of expression is then compared with values of _each case_
3. If match, the associated block of code is executed.
4. If no match, the `default` code block is executed.

If multiple cases matches a case value, the _first case_ is selected.

If no matching cases are found, the program continues to the `default` label.

If no default label is found, the program _continues to the statement(s) after the switch_.

```js
switch (expression) {
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

```js
// Set the student's grade
const grade = 87;

switch (
  true // checks all conditions, until true
) {
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

```js
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

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `''` empty string 2

**Truthy Values**

- _Everything_ else

```js
let cheese = 'Cheddar';
if (cheese) { // true
  "Time to eat!"
}

let uploadComplete = false;
if (uploadComplete) { // don't need to specify `=== true` }
```

## Null Value

The special `null` value is a type of it's own which _only_ contains the `null` value.

It simply represents **nothing**, **empty**, or **value unknown**.

## Undefined value

Like `null`, `undefined` stands apart as it's own type.

It means **value is not assigned.** When a variable is declared without a value, it returns `undefined`.

In other words, it is the **default value for unassigned things.**

```js
let age;
alert(age); // shows "undefined"
```

## Object Type

`object` type is special. It is the only non-primitive data type because they are used to _store collections of data & more complex entities._

## Symbol Type

`symbol` type is used to _create unique identifiers_ for `object`.

## Logical Operators

There are four logical operators in JavaScript:

- `||` OR
- `&&` AND
- `!` NOT
- `??` Nullish Colaescing

### `||` (OR)

```js
result = a || b;
```

> In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are `true`, it returns `true`, otherwise it returns `false`.

In JavaScript, `||` is **trickier & more powerful.**

```js
// booleans:
// all result in true, except for when both operands are false
true || true; // true
false || true; // true
true || false; // true
false || false; // false

if (1 || 0) {
  // works just like if( true || false )
  ("truthy!"); // 'truthy!'
}
```

Most of the time, OR `||` is used in an `if` statement to test if any of the given conditions are true:

```js
let hour = 9;
let isWeekend = true;

// if hour less than 10 or greater than 18 or is weekend
if (hour < 10 || hour > 18 || isWeekend) {
  ("office is closed"); // 'office is closed'
}
```

**OR `||` finds the first truthy value**

The "extra" features of JavaScript provides the extended algorithm as follows:

```js
result = value1 || value2 || value3;
```

`||` OR operator does the following:

1. Evaluates operands from left to right
2. Each operand is converted to a boolean.
   1. If `true`, stops & returns **original value** of the operand.

```js
1 || 0; // 1 (1 is truthy)
null || 0 || 1; // 1 (1 is first truthy value)
undefined || null || 0; // 0 (all falsy, last operand is returned)
```

**1. Getting first truthy value from list of variables / expressions:**

```js
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

```js
true || alert("not printed"); // nothing: true's seen & evaluation stops
false || alert("printed"); // "printed"
```

Sometimes used to execute commands only if the condition on the left is `false`.

### AND `&&`

In _classical programming_, AND returns `true` if _both operands_ are truthy and `false` otherwise:

```js
true && true; // true
false && true; // false
true && false; // false
false && false; // false
```

Example with `if` `&&`

```js
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  ("the time is 12:30");
}
if (1 && 0) {
  // evaluated as true && false ** NOT POSSIBLE
  ("i'll never be executed! :(");
}
```

**AND `&&` finds the _first falsy_**

AND returns the **first falsy** or the last value if none were found:

1. Evaluates operands left to right
2. Each operand is converted to boolean.
   1. If result is `false`, stops & returns original value of that operand
3. If all operands have been evaluated (all were _truthy_), returns the last operand.

> OR returns the **first truthy** or the last value if none were found.

```js
1 && 0; // 0
1 && 5; // 5
null && 5; // null
0 && "no matter what"; // 0
```

Precedence: AND `&&` is HIGHER than OR `||`

```js
aa & bb || (c && d); // is read as:
(a && b) || (c && d); //
```

**Don't** replace `if` with `||` or `&&`.

If statements are more obvious and more readable, so it is recommended to use every construct for its purpose:

- `if` if we want `if`
- `&&` if we want `AND`

```js
let x = 1;
x > 0 && alert("Greater than zero!"); // NOT RECOMMENDED
if (x > 0) alert("Greater than zero!"); // BETTER! RECOMMENDED.
```

### NOT `!`

The boolean NOT operator `!` accepts a single argument & does the following:

1. Converts the operand to a boolean: `true` / `false`
2. Returns the _inverse_ value

```js
// syntax
result = !value;

// examples
!true; // false
!0; // true
```

**Double NOT** `!!` is sometimes used for converting a value to a boolean type.

```js
!!"non-empty string"; // true
!!null; // false
```

### AND, OR, NOT Tasks

```js
null || 2 || undefined; // 2 (first truthy value)
alert(1) || 2 || alert(3); // alert pops up, doesn't return a value (undefined)
// 2 is then returned (first truthy)
null || (2 && 3) || 4; // 2 && 3: returns 3 (all truthy, returns last truthy)
// null || 3 || 4: returns 3 (first truthy)
// && statements take precedence
// if condition, age between 14-90, inclusively (can reach the edges of 14-90)
if (age >= 14 && age <= 90)
  if (!(age >= 14 && age <= 90))
    if (age < 14 || age > 90)
      if (-1 || 0)
        // if condition, age NOT between 14-90, inclusively
        alert("first");
// Runs: -1 || 0 = -1, truthy

if (-1 && 0) alert("second");
// Doesn't run: -1 && 0 = 0, falsy

if (null || (-1 && 1)) alert("third");
// Runs: && higher precedence, -1 && 1 executes first:
// null || -1 && 1 ---> null || 1 ---> 1
```

[Check the login:](https://javascript.info/logical-operators)

```js
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
} else if (userName == "" || userName == null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
```

### Ternary Operator

The ternary _or conditional_ operator is a bit of syntax that tests a condition and returns one value/expression if true & another if false. It takes up a lot less code than `if...else` block.

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

- Making sure code is executing in the _right order_
- Inspecting _values of variables_ at a certain moment in time

**Debugging**

`debug(javascriptFunction)` will pause code on the first line of `javascriptFunction` the next time that it's called.

ie: `debug(hideModal)`

## Functions

Anytime you see `()`, a pair of parentheses, and you're not using a loop or if/else statement, you're making use of a function.

Executing a function is also known as **invoking a function**.

```js
function myFunction() {
  alert("hello");
}

myFunction(); // INVOKE or call function once
```

### Function Parameters

Some functions require _perameters_ or values that need to be included inside the `()` parentheses, in order to do it's job properly.

```js
// replace function parameters: string, string
string.replace("hi", "hello");
```

Not all parameters are required. Some are optional.

Default parameters can be specified by using `=`.

```js
function hello(name = "Bryan") {
  console.log(`Hey ${name}`);
}

hello("Dave"); // Hey Dave
hello(); // Hey Bryan
```

### Anonymous Functions

```js
function() {
  alert('hello');
}
```

You can create functions _without a name_. Anonymous functions are used when another function expects a function as a parameter, in order to reduce the number of lines of code.

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);

// Instead of defining logKey(), you can use an anonymous function:
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}"`);
});
```

### Arrow Functions

Another form of an anonymous function is called the _arrow function_.

Instead of typing `function(event)`, you use `(event) =>`.

Arrow functions are recommended because they make your code:

- more readable
- shorter

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

If the function contains a single line, you can skip the `{}`

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

If the function only takes one parameter, you can skip the `()` around it

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

If function needs to return a value, and only contains one line, you can omit the `return` statement.

```js
const doubled = originals.map((item) => item * 2);

// item => item * 2 is equivalent to:
function doubleItem(item) {
  return item * 2;
}
```

Arrow function live example

```html
<!-- html -->
<input id="textBox" type="text"></input>
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `You pressed "${event.key}".`)
);
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

```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
```

You can `return` without a value, which causes the function to exit immediately.

`return;` returns `undefined`, or no value.

```js
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Showing you the movie"); // (*)
  // ...
}
```

### Function Naming

Functions are _actions_ and their name is usually a _verb_. Naming should be

- Brief
- Accurate as possible
- Describe what the function does

Common verbs used:

- `get...` - return a value
- `calc...` - calculate something
- `create...` create something
- `check...` check something, return a boolean

One function, one action. It should do exactly what's suggested by it's name, **no more**.

Two independent actions deserve two functions. Examples of what _not to do_:

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

    alert(i); // a prime
  }
}

// GOOD
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
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

A second syntax for creating a function is called a _Function Expression_. It allows you to create a new function in the _middle of any expression_.

```js
let sayHi = function () {
  alert("Hello");
};
```

### Function is a value

No matter how a functions created, it is a _value_.

```js
function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code
```

Mentioning a function without parentheses does _not_ cause it to execute.

Because it's a _value_, we can work with it like other values. We can copy a function to another variable:

```js
function sayHi() {
  // creates a function, storing it in the variable sayHi
  alert("Hi");
}

let func = sayHi; // without (), it copies the function itself to func and doesn't invoke it.

func(); // "Hi" alert
sayHi(); // "Hi" alert
```

### Callback Functions

`ask(question, yes, no)` has three parameters:

`question` text of question
`yes` function to run if yes
`no` function to run if no

In the example below, `showOk` and `showCancel` are called **callbacks** OR **callback functions**.

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOkay() {
  alert("agreed");
}

function showCancel() {
  alert("cancelled");
}

// Functions showOk and showCancel are passed as parameters
ask("Do you agree?", showOk, showCancel);
```

Using Function Expressions, the above code can be condensed to:

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("agreed");
  }, // anonymous function
  function () {
    alert("cancelled");
  } // anonymous function
);
```

### Function Expressions vs Function Declarations

Function Declarations: a function, declared as a separate statement, in the main code flow.

Function Declarations can be called **earlier than it is defined**.

Why? JS looks for _global functions_ before running the script and creates them, during the _initialization phase_.

```js
// Function Declaration
function sum(a, b) {
  return a + b;
}
```

Function Expression: a function, created inside an expression or inside another syntax construct.

Function Expressions are created when the **execution reaches it and is usable only from that moment**.

```js
// Function expression
let sum = function (a, b) {
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

Instead, decompose the problem into smaller and easier to solve sub-problems. **Decomposition** is the main way to deal with complexity, making problems _easier_ and _more approachable_ to solve and understand.

Then, solve each sub-problem one by one.

- Begin with the simplest sub-problem: means you know the answer, or are closer to that answer.
- After that, simplest means _this sub-problem doesn't depend on others being solved._
- Once all sub-problems are solved, connect the dots.
- Connecting all _sub-solutions_ will give you the solution to the main problem.

### Getting suck

What if I can't solve a sub-problem?

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

```js
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  console.log(i);
}
```

- Declare var `i` and assign initial value to `1`
- `i <= answer` is our condition.
  - Loop until i is _greater than_ answer
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

```js
// Create an integer variable for x
// Create an integer variable for y
// create an integer variable for sum
// ask the user "X: " and put answer in x
// ask the user "Y: " and put answer in y
// put + y in sum
// tell user "answer is " sum
```

Flesh out the comments:

```js
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

- The best way to debug is to _not have bugs_
- Bad implementation can be googled
- Bad algorithms usually cannot
- What are you not understanding?
- What tools can you use?
- DON'T start with a solution
- You're most likely assuming something that isn't true

```js
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
const a = "Hello";
const b = "World";

console.log(c);
```

This code will run but it will generate an error.

This is called **throwing** an error.

`Uncaught ReferenceError: c is not defined at script.js:4`

A `ReferenceError` is thrown when one refers to a variable that is **not declared and/or initialized**.

`ReferenceError` can be caused by many things. ie: `ReferenceError: can't access lexical declaration 'X' before initialization`

The next part of the error tells you where to find the error: `script.js` file and `4` line number. Clicking on the error will navigate to that line of code in the Developer Tools.

**Stack trace** is another important part of an error. It helps you understand **when an error was thrown** and **what functions were called** that led up to that error.

```js
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

```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

Error: `Uncaught TypeError: str1.push is not a function`

`.push()` is a function for arrays, but _not for strings_.

### Console Methods

Console has other useful methods - not just `console.log()`.

`console.table()` can display the data in a table format.

```js
// console.table syntax
console.table(tabledata, tablecolumns);
// tabledata: The data to fill the table with.
// tablecolumns: OPTIONAL: An array with the names of the table columns.

console.table(["Audi", "Volvo", "Ford"]);
console.table({ firstname: "John", lastname: "Doe" });

// Example
const car1 = { name: "Audi", model: "A4" };
const car2 = { name: "Volvo", model: "XC90" };
const car3 = { name: "Ford", model: "Fusion" };

console.table([car1, car2, car3]); // print every value in table
console.table([car1, car2, car3], ["model"]); // only print the model column in table
```

`console.trace()` method displays a trace that show how the code ended up at a certain point.

### Errors vs Warnings

Errors _stop_ execution of your program and prevent further action.

Warnings provide you insight on _potential problems_ that _may not crash_ your program at runtime or at all.

[MDN's JavaScript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

## Clean Code

### [Rules of thumb for writing _clean code_:](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

- Indentation: Consistency is what matters.
- Semi-colons: Just use them.
- Naming Things: Be descriptive.
  - Single characters are _okay_ to use in the context of a **loop** or **callback function**. Otherwise:
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
let anotherReallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;
```

**Tips:**

- Revise Your Logic Before Coding: **flow diagrams** or **written pseudo-code**.
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

### [Code Tells You How, Comments Tell You Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

"Programs **must be written for people to read**, and only **incidentally** for **machines to execute**."

Concentrate on explaining to human beings what we want a computer to do --- _not instructing a computer what to do_.

If you write your code _to be consumed by other programmers first_, and by the compiler second, you may find the need for additional **comments** to be **greatly reduced**.

Sometimes **fewer** comments makes code **more readable**.

However, no matter how simple, concise and clear your code may end up being, it's **impossible for code to be completely self-documenting.**

**Comments can never be replaced by code alone:**

**Code can't explain**:

- WHY the program is being written
- REASON for choosing this or that method
- REASON why alternative approaches were taken.

Something that is **common sense** to you may be confusing to another developer without any context.

```perl
// You may very well know that
$string = join('',reverse(split('',$string)));
// How hard is it to add "# Reverse the string" into your code?
```

## Node.JS

Node.JS is a JavaScript runtime environment. It allows you to run JavaScript _outside of your web browser._

`nvm` Node Version Manager makes it easy to change Node versions and upgrade Node.

`npm` Node Package Manager installs various libraries and tools used in JavaScript environments.

Installation:

```sh
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

### Using Node console

To run Node console, run `node` in your terminal. To exit, type `.exit`.

## Arrays

Arrays are used to deal with large quantities of strings and numbers.

An **Array** is an ordered collection of items: strings, numbers or other things.

### Creating Arrays

```js
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

### Accessing Array Elements

You access an array element by referring to the index number:

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

### Changing an Array Element

```js
const cars = ["Saab", "Volvo", "BMW"];
// Change index 0 to Opel
cars[0] = "Opel";
```

### Accessing the Full Array

The full array can be accessed by referring to the name of the array.

```js
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
```

### Arrays are Objects

`typeof myArray` returns "object".

However, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". ie: `person[0]`

```js
const person = ["John", "Doe", 46];
person[0]; // "John"
```

**Objects** use **names** to access its "members". ie: `person.firstName`

```js
const person = { firstName: "John", lastName: "Doe", age: 46 };
person.firstName; // "John"
```

### Array Elements Can Be Objects

Variables can be objects. Arrays are special kinds of objects.

\*In a **single array**, you can have variables of different types:

- Objects
- Functions
- Arrays

```js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

### Array Properties & Methods

Array's _real strength_ is displayed when using their **built-in properties and methods**.

```js
cars.length; // Returns the number of elements
cars.sort(); // Sorts the array
```

### Length property

`.length` Returns the number of elements in the array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; // 4
```

### Accessing 1st & Last Array Element

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// First Element
let fruit = fruits[0]; // Banana
// Last Element
let fruit = fruits[fruits.length - 1]; // Mango (-1 because element #1 = index 0)
```

### Looping Array Elements

You can use `for` to loop through an array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitLength = fruits.length;

let text = "<ul>"; // begin text w/ unordered list tag

for (let i = 0; i < fruitLength; i++) {
  text += "<li>" + fruits[i] + "</li>"; // add list item element to text var w/ array element
}

text += "</ul>"; // append closing tag
```

There is also the `Array.forEach()` function:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```

### Adding Array Elements

Easiest way to add an element to an array: `.push()` method.

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
```

You can also use the `length` property:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits
// because .length is 1 greater than the last index
```

**WARNING**: You can create undefined holes in an array:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; // Creates undefined "holes" in fruits
// BAD
```

### Associative Arrays

**JavaScript does NOT support associative arrays.**

JavaScript **always** uses **numbered indexes** for **arrays**.

```js
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"
```

It does NOT support arrays with named indexes.

```js
const person = [];
person["firstName"] = "John"; // BAD, unsupported
person["lastName"] = "Doe";
person["age"] = 46;
person.length; // Will return 0 (WRONG)
person[0]; // Will return undefined (WRONG)
```

### Differences between Arrays & Objects

Arrays use **numbered indexes.**

- Use Arrays when you want element names to be **numbers**.

Objects use **named indexes.**

- Use Objects when you want element names to be **strings (text)**.

> Arrays are _special kinds_ of objects.

### Recognizing Arrays

`typeof myArray` returns `object`.

To get around this, you can use `Array.isArray()` function or `instanceof` operator.

```js
const fruits = ["Banana", "Orange", "Apple"];

Array.isArray(fruits); // true
fruits instanceof Array; // true
```

### Array Methods (Indepth)

#### toString

`toString()` method converts an _array_ to a string of _comma separated_ `,` array values.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// Banana,Orange,Apple,Mango
```

#### Join

`join()` method joins all elements into a string like `toString`, but you can specify the _separator_:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
// Banana * Orange * Apple * Mango
```

#### Pop & Push

Pop & push are used to add or remove new elements.

- Popping items **out** of an array.
- Pushing items **into** an array.

##### Pop

`.pop()` method removes the **_last_** element from an array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits; // ['Banana', 'Orange', 'Apple']
```

`.pop()` also returns the **_last_** value that was popped out.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let poppedFruit = fruits.pop();
poppedFruit; // 'Mango'
```

##### Push

`.push()` method adds a new element to the end of an array.

```js
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

### Shift

`.shift()` method removes the **_first_** array element, and shifts all other elements to a lower index.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
fruits; // ['Orange', 'Apple', 'Mango']
```

`.shift()` method returns the value that was _"shifted out":_

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
fruit; // Banana
```

### Unshift

`.unshift()` method **adds** a new element to the **beginning** of an array and _unshifts_ older elements.

AND it returns the new array length.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // 5
fruits; // ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']
```

### Merging Arrays (Concatenate)

`.concat()` method creates a new array by merging (concatenating) existing arrays:

```js
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

### Splice

`.splice(x, y, "Item",...,"Item")` method can add new items to an array.

- 1st parameter `x`: **where** new elements should be **added**
- 2nd parameter `y`: **how many** elements should be **removed**
- Rest of parameters: **define** new elements **to be added.**

`splice()` returns _an array with the deleted items._

**Adding elements to an array using `slice()`**

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Grapes"];
fruits.splice(2, 2, "Lemon", "Kiwi"); // ['Apple', 'Mango'] --- items removed
// 2: position -- fruit[2] (3rd item)
//    2: # of items to delete: fruit[2], fruit[3]
//       Add Lemon & Kiwi to array
```

**Deleting elements with `splice()`**

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Banana
fruits; // ['Orange', 'Apple', 'Mango']
```

### Slice

`.slice()` method slices out a piece of an array **into a new array.**

It does **NOT REMOVE** anything from the source array.

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Single argument: Everything from index X and on
const citrus = fruits.slice(1);
// 1: starting position -- fruits[1]

citrus; // ['Orange', 'Lemon', 'Apple', 'Mango']
fruits; // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```

If two arguments are passed to `slice(x, y)`:

- `x` starting position array[x]
- `y` ending position array[y]

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

citrus; // ['Orange', 'Lemon']
```

### Automatic ToString

JavaScript automatically converts arrays to comma separated strings.

ALL objects in JS have a `toString()` method.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits.toString(); // Verbose method
document.getElementById("demo").innerHTML = fruits; // AUTOMATIC version
```

### Optional Arguments

`...argVariable` causes all remaining arguments to be placed inside an **FAKE array**.

**IMPORTANT:** If you want to use array methods, convert `...extraArgs` to a **REAL ARRAY**:

```js
const removeFromArray = function (myArray, ...extraArgs) {
  const args = Array.from(extraArgs);
  // ...
};
```

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

## Loops

Loops are used to make a computer do a repetitive task.

### For ... Of Loop

The basic tool for looping through a collection is the `for ... of` loop.

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  // get 1st item in `cats`, assign it to `cat`
  console.log(cat); // run the code { } & repeat until end of collection
}
```

### Map() & Filter()

These are specialized loops.

`map()` is used to **do something** to every item in a collection and then **create a new collection** with the changed items.

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper); // perform function to every item in cats
// create new array in upperCats

upperCats; // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

function toUpper(string) {
  return string.toUpperCase();
}
```

`filter()` is used to **test each item** in a collection and **create a new collection** containing ONLY matching items.

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat); // test each item with lCat function
// store matches in filtered
function lCat(cat) {
  return cat.startsWith("L"); // boolean: if true, return item
}

filtered; // [ "Leopard", "Lion" ]
```

`filter()` and `map()` are often used with **function expressions**:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

//                            parameter of function
const filtered = cats.filter((cat) => cat.startsWith("L"));
//                                    code within function

filtered; // [ "Leopard", "Lion" ]
```

### Standard For Loop

```js
for (initializer; condition; final - expression) {
  // code to run
}
```

- **Initializer** variable to set a number, to be incremented (counter)
- **Condition** when loop should **stop**. (comparison operator)
- **Final Expression** evaluated during each run. (increment the variable)

```js
for (let i = 1; i < 10; i++) {
  i; // current value of counter
}
```

- `let i = 1` is the counter variable, starting at 1.
- `i < 10` keep looping as long as i is less than 10
- `i++` add 1 to loop each time round the loop

**Looping Through Collections**

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

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

However, it _increases the chances of bugs_ into your code./

**It's BEST to use `for...of` when you can!**

Sometimes, you still need a `for` loop. For example:

```js
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";
```

`for...of` **doesn't work** because there's no way to know when you're on the final loop iteration.

```js
for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

myFavoriteCats; // "My cats are called Pete, Biggles, Jasmine, "
// Missing ", and" -- not well formed
```

`for` loop allows you to know when you're on the last loop iteration:

```js
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array (last item)
    myFavoriteCats += `and ${cats[i]}.`; // add "and "
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}
```

### Exiting Loops `break`

To stop a loop mid-execution, you can use a `break` statement. A `break` statement will _immediately exit the loop_ and make the browser move onto any code that follows it.

Example: Search through contacts/phone numbers and return just the first number you want to find.

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

```js
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // When button is clicked
  const searchName = input.value.toLowerCase(); // Convert search term to lowercase
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    // Loop thru contact list
    const splitContact = contact.split(":"); // Split current contact into array
    if (splitContact[0].toLowerCase() === searchName) {
      // If splitContact name is match
      para.textContent =
        splitContact[0] + "'s number is " + splitContact[1] + "."; // Update <p> with the above string
      break; // Stop loop & move on
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```

### Skipping Iterations `continue`

`continue` is similar to `break`, but it skips to the _next iteration_ instead of exiting the loop.

Example: Takes a number as input & returns only numbers that are **squares** of integers (whole numbers).

```html
<label for="number">Enter number: </label>
<input id="number" type="text" />
<button>Generate integer squares</button>

<p>Output:</p>
```

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i); // sqRoot of i, ie:  4
    // if you round down sqRoot and it's NOT the same as the initial value (integer), ignore number
    if (Math.floor(sqRoot) !== sqRoot) {
      continue; // Skip to next loop iteration
    }
    para.textContent += `${i} `;
  }
});
```

### While & Do...While

`while` loops are very similar to `for` loops, except for:

- the initializer is set _before the loop_
- the final-expression is included _inside the loop_

Both loops contain the same 3 items and they're defined in the same order.

```js
initializer;
while (condition) {
  // code to run

  final - expression;
}
```

Example:

```js
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

let i = 0; // initializer

while (i < cats.length) {
  // condition
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++; // final-expression
}

myFavoriteCats; // "My cats are called Pete, Biggles, and Jasmine."
```

`do...while` is very similar, but structured slightly different.

**Do...While ALWAYS excutes at LEAST one time** because the condition comes _after_ the code.

```js
initializer;
do {
  // code to run

  final - expression;
} while (condition);
```

`do...while` example:

```js
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

let i = 0; // initializer
do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++; // final-expression
} while (i < cats.length); // condition

myFavoriteCats; // "My cats are called Pete, Biggles, and Jasmine."
```

### Choosing the Right Loop

If you're iterating through an **array** or **object** that supports it and you **don't need access to the index position**, use `for...of`. **It's the best choice.**

Otherwise, `for`, `while` or `do...while` are largely interchangeable.

`for` is recommended to begin with, because it's the easiest for remembering everything.

## Test Driven Development

TDD refers to the practice of writing automated tests that describe how your code should work before you actually write the code.

Using `jest` to test javascript:

```js
// reverseString.js
const reverseString = function (string) {
  return string.split().reverse().join();
};

module.exports = reverseString;

// reverseString.spec.js
const reverseString = require("./reverseString");

describe("reverseString", () => {
  test("reverses single word", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  test.skip("reverses multiple words", () => {
    expect(reverseString("hello there")).toEqual("ereht olleh");
  });
});
```

## DOM Manipulation & Events

What is the DOM?

The Document Object Model is a

- tree-like representation of the contents of a web page.
- a tree of "**nodes**" with different relationships, depending on how they're arranged in the HTML doc.
- family tree:
  - `parent` on it's own `branch`
  - `child` on its own `branch`
  - `sibling` share a `branch`

### Targeting Nodes w/ Selectors

Use CSS-style selectors & relationship properties to target nodes.

To target `div class="display"` in the example below, you could use:

- `div.display`
- `.display`
- `#container > .display`
- `div#container > div.display`

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

You can also use **relational selectors** like `firstElementChild` or `lastElementChild` with special properties owned by the nodes.

```js
const container = document.querySelector("#container");
console.dir(container.firstElementChild);
// selects 1st child of #container (ie: .display)

const controls = document.querySelector(".controls");
console.dir(controls.previousElementSibling);
// select the sibling before controls => .display
```

### DOM Methods

When HTML is parsed, it is converted to the DOM. The primary differences is:

- nodes are _objects_
- with many properties & methods attached to them

These properties & methods are main tools used to manipulate web pages with JavaScript.

### Query Selectors

To target nodes, you use query selectors.

`element.querySelector(selector)` returns a _reference_ to the first matched selector

`element.querySelectorAll(selector)` returns a _nodelist_ containing references to ALL matches of the selectors (**NOT AN ARRAY.**)

Nodelists look and somewhat act like arrays, but they're missing several array methods. To get around this, you can convert nodelists to arrays with `Array.from()` or the spread operator: `(...numbers)`.

### Creating Elements

`document.createElement(tagName, [options])` creates a new element of type tagName w/ optional parameters.

This **does not** put elements into the DOM; it creates it in memory. That way, you can manipulate the element before placing it on the page w/ css styles.

```js
constant div = document.createElement('div');
```

### Append Elements

`parentNode.appendChild(childNode)` appends _childNode_ as the last child of _parentNode_.

`parentNode.insertBefore(newNode, referenceNode)` inserts _newNode_ INTO _parentNode_ BEFORE _referenceNode_.

### Remove Elements

`parentNode.removeChild(child)` removes _child_ from _parentNode_ on the DOM & returns a reference to child.

### Altering Elements

After referencing an element, you can alter that element's properties. You can add/remove/alter attributes, change classes, add inline style info, etc.

**Adding Inline Style**

```js
const div = document.createElement("div");
// creates div element, referenced by variable 'div'

div.style.color = "blue";
div.style.cssText = "color:blue; background: white;";
div.setAttribute("style", "color: blue; background: white;");
```

To access CSS rules from JS, you need to use _camelCase_ or _bracket notation_:

```js
div.style.backgroundColor; // works -> NOT .background-color
div.style["background-color"]; // works
div.style.cssText = "background-color: white;"; // works, in string
```

**Attributes**

```js
const div = document.createElement("div");

div.setAttribute("id", "theDiv");
// creates/updates id to theDiv
div.getAttribute("id");
// returns value: 'theDiv'
div.removeAttribute("id");
// removes id= attribute from node
```

**Classes**

```js
const div = document.createElement("div");

div.classList.add("new");
// add new class to div
div.classList.remove("new");
// remove new class from div
div.classList.toggle("active");
// adds or removes 'active' (toggle on off)
```

Toggling CSS styles is standard and cleaner than removing them.

**Adding text**

```js
const div = document.createElement("div");
div.textContent = "Hello World!";
```

**Adding HTML**

```js
div.innerHTML = "<span>Hello world!</span>";
```

`textContent` should be used over `innerHTML`, because `innerHTML` can cause security risks if misused.

**JavaScript is run when the `script` tag is defined.**

- Causes DOM manipulation methods to _not work_ if it runs _before_ the nodes are created

To fix this issue, add the `defer` keyword to your `<script>` in the `<header>` of your page, or move your `<script>` to the end of your `<body>`.

```js
<head>
  <script src="./script.js" defer>
</head>
```

### Events

Events allow you to manipulate the DOM dynamically and on demand.

Events are actions that occur such as:

- Mouse clicks
- Keypresses

JavaScript can listen for these on webpages and react to these events.

**Three Primary Ways to Handle Events**

- Attach functions to HTML element attributes
- Set the `on_event_` property on the DOM object in JS
- Attach event listeners to nodes in JS

Event listeners are the preferred method.

**Method 1**

Less than ideal solution: cluttering HTML w/ JavaScript:

```html
<!-- functions' attributes (html elements) -->
<button onclick="alert('hello world')">Click me</button>
```

**Method 2**

Better solution: Moved JS to its own file. Buttons can only have a single `onclick` property.

```html
<!-- html -->
<button id="btn">Click Me!</button>
```

```js
// javascript
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");
```

**Method 3**

Best method: Maintains separation and we also allow multiple event listeners if needed.

More flexible & powerful, but a bit more complex to setup.

```html
<!-- html -->
<button id="btn">Click Me Too</button>
```

```js
// javascript
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World!");
});
```

**All three methods can be used with named functions.**

```html
<!-- html -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME</button>
```

```js
// javascript
function alertFunction() {
  alert("YOU CLICKED ME");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);
```

**Named functions**

- Clean up code considerably
- Good idea if you want to reference a function in multiple places

Retrieve event info by passing a parameter to the function - ie: `function (e)` is a callback from EventListener.

```js
btn.addEventListener("click", function (e) {
  console.log(e); // [object: PointerEvent]
  console.log(e.target); // [object: HTMLButtonElement]
  e.target.style.background = "blue";
});
```

Callback Example:

```js
const notes = ["do", "re", "me"];
notes.forEach((noteInNotes) => console.log(noteInNotes));
// or
notes.forEach((noteInNotes) => {
  console.log(noteInNotes);
});
// or
notes.forEach(function (noteInNotes) {
  console.log(noteInNotes);
});
// or
notes.forEach(console.log);
```

**Attaching listeners to GROUPS of nodes**

```html
<div id="container">
  <button id="1">Click Me</button>
  <button id="2">Click Me</button>
  <button id="3">Click Me</button>
</div>
```

```js
// buttons = node list, looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
```

**Other Useful Events**

- `click`
- `dblclick`
- `keydown`
- `keyup`

#### Event Capture, Propagation, Bubbling

```js
// 3 nested div1 > div2 > div3
const divs = document.querySelectorAll('div');

divs.forEach(div => div.addEventListener('click', miscFunction)
```

**Default**

Event capturing bubbles up by default, triggering the child first and then the parent nodes, as it travels upward in the dom.

> div3, div2, div1 (parent)

**Reverse**

```js
divs.forEach((div) => div.addEventListener("click"), miscFunction, {
  capture: true,
});
```

Adding `capture: true` to an event listener will cause `miscFunction` to be run on the capture **down**, instead of the bubble **up**.

> div1 > div2 > div3 (child)

**Stopping Propagation**

```js
function miscFunction(e) {
  e.stopPropagation(e); // stop bubbling (prevents parents from being triggered)
}
```

If you add a paremeter with the `.stopPropagation()` function, it prevents events from bubbling up to the parent nodes. It will trigger once, and then stop.

**Limit EventListener to 1 Event**

```js
button.addEventListener(
  "click",
  () => {
    console.log("Clicked!");
  },
  {
    once: true, // limits the EventListener to 1 event
    // = adding removeEventListener('click')
  }
);
```

## Objects

Objects are a very important part of JS and any real project will feature them.

Creating an empty object:

```js
let user = new Object(); // object constructor
let user = {...};  // object literal
```

### Literals & Properties

```js
let user = {
  // object
  name: "John", // key
  age: 30, // key
  // property key/name/identifier: value;
};
```

**Getting property values**

```js
alert(user.name); // John
alert(user.age); // 30
```

**Adding values**

```js
user.isAdmin = true;
```

**Removing values**

```js
delete user.age;
```

**Multi-word property names**

```js
let user = {
  name: "John",
  age: "30",
  "likes birds": true, // multi-word
};
```

**Trailing Commas** make it easier to add/remove/move around properties.

```js
let user = {
 ...
 finalProperty: "value", // < last item contains a comma
}
```

**Square brackets**

```js
user.like birds = true; // ERROR - multi-word property w/ dot access

let user = {};  // empty object
user["likes birds"] = true; // set
alert(user["likes birds"]); // get "true"
delete user["likes birds"]; // delete
```

Square brackets allow you use expressions, as opposed to a literal string:

```js
let key = "likes birds";
user[key] = true; // == user["likes birds"] = true

// key can be calculated at run-time or user input
let key = prompt("What do you want to know about the user?", "name");
user[key]; // "John" if name was passed
user.key; // UNDEFINED *** dot notation cannot be used this way
```

**Computed Properties**

We can use square brackets in object literal when creating an object.

An **object literal** is an object with properties literally written out when we create it.

```js
let fruit = prompt("Fruit name?", "apple");
let bag = {
  [fruit]: 5, // property name = fruit variable value
  [fruit + 'Computers']: 5; // bag.appleComputers = 5
}
bag.apple;  // 5 if fruit="apple"
```

**Property value shorthand**

Using existing variables as values for property names:

```js
function makeUser(name, age) {
  return {
    name, // name: name,
    age, //  age: age,
  };
}
let user = makeUser("John", 30);
user.name; // John
```

Property names are converted to strings:

```js
let obj = {
  0: "test", // "0": "test"
};
obj[0]; // test
obj["0"]; //test
```

**Does a property exist?**

```js
if (user.noSuchProperty === undefined); // true - means "no such property"

// special operator: in
"key" in object;

let user = { name: "John", age: 30 };
"age" in user; // true
"noSuchProperty" in user; // false, noSuchProperty doesn't exist within user object

let key = "age";
key in user; // true, "age" exists within user object
```

Use `in` instead of `=== undefined` because properties that do exist can contain the value "undefined".

**Looping through an object**

`for..in` is used to walk over all keys in an object.

`for (let prop in obj)` is often used.

```js
for (key in object) {
  // code to execute
}

let user = { name: "John", age: 30, isAdmin: true };
for (let key in user) {
  key; // name, age, isAdmin
  user[key]; // John, 30, true
}
```

**Order of properties**

Object properties are ordered in a _special way_:

- Integer properties are sorted
- Others appear in creation order

```js
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let code in codes) {
  code; // 1, 41, 44, 49
}
```

**Integer Properties** are properties that can be transformed to an integer and back without changing.

`49` is an integer property.

`+49` and `1.2` are not.

```js
// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert(String(Math.trunc(Number("49")))); // "49", same, integer property
alert(String(Math.trunc(Number("+49")))); // "49", not same "+49" ⇒ not integer property
alert(String(Math.trunc(Number("1.2")))); // "1", not same "1.2" ⇒ not integer property
```

### Methods

Methods are functions that exist within an object.

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  // bio: function () { // is equal to:
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  // introduceSelf: function () {
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

### Objects as Object Properties

An object property can itself be an object.

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
};

person.name.first; // Bob
person["name"]["first"]; // Bob
person.name.last; // Smith
person["name"]["last"]; // Smith
```

### Adding methods to existing object

```js
person.farewell = function () {
  console.log("Later!");
};
```

### `this`

`this` is keyword refers to the current object the code is being written inside.

### Defining the "shape" of an object

Object literals are seriously inadequate when you need to create multiple objects.

Inferior way: Using a function

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
```

> Using a function requires a lot of work: creating, initializing and returning an object.

Best way: Use a **constructor**

Constructors are functions that are called using the `new` keyword. When you call a constructor, it will:

- Create a new object
- Bind `this` to the object
- Run the code in the constructor
- Return the new object

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi. I'm ${this.name}.`);
  };
}

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
```

### Built-in Objects

`myString.split(",");`

`.split()` is a method available on a `String` object. When you create a string in your code, it is automatically created **as an instance of `String`**, which has several common methods and properties available on it.

`const myDiv = document.createElement('div')`

`createElement()` is a method available to the `Document` object. Every web page creates an instance of `Document` called `document`, containing the page structure, content and features such as its URL.

## Form Constraint Validation

Constraint Validation API provides form customization options which can enhance the standard HTML field checking.

- Stop validation until first interaction with a field or submits the form
- Show custom styled error messages
- Custom validation that's impossible w/ HTML alone
  - ie: Comparing 2 inputs: New & Confirm password fields
  - ie: Date comes after another date

### Form Validation

Before using the API, disable the default validation & error messages by setting `noValidate` property set to `true`.

> This is equivalent to the `novalidate` html attribute

```js
const myform = document.getElementById("myform");
myform.noValidate = true;
```

Event handlers can then be added:

```js
myform.addEventListener("submit", validateForm);
```

The submit handler can check if **the whole form is valid** with `checkValidity()` or `reportValidity` methods. These return `true` when all inputs are valid.

An `invalid` event is also triggered on every invalid field. This does **NOT** bubble --- handlers must be added to every control that uses it.

```js
// validate form on submission
function validateForm(e) {
  const form = e.target;

  if (form.checkValidity()) {
    // form is valid - make further checks
  } else {
    // form is invalid - cancel submit
    e.preventDefault();
  }
}
```

### Individual Field Validation

Each field will have their own **constraint validation properties**:

- `willValidate` returns `true`if element is a candidate for constraint validation
- `validationMessage` validation message, which is an **empty string** if the field is valid
- `valitity` _ValidityObject_ object
  - has a `valid` property
    - `true` field is valid
    - `false` field is invalid

| ValidityState      | description                              |
| :----------------- | :--------------------------------------- |
| `.badInput`        | browser can't understand the input       |
| `.customError`     | custom validity message has been sent    |
| `.patternMismatch` | value doesn't match `pattern` attribute  |
| `.rangeOverflow`   | value > `max` attribute                  |
| `.rangeUnderflow`  | value < `min` attribute                  |
| `.stepMismatch`    | value doesn't fit `step` attribute rules |
| `.tooLong`         | string length > `maxlength`              |
| `.tooShort`        | string length < `minlength`              |
| `.typeMismatch`    | value is not a valid email/url           |
| `.valueMissing`    | `required` value is empty                |

Individual fields have the following **constraint validation methods**:

- `setCustomValidity(message)` sets an error message for an invalid field. An empty string must be passed when field is valid or field will remain invalid forever.
- `validity.valid` returns `true` when input is valid
- `checkValidity()` property does the same thing and it also triggers an `invalid` event on the field, which can be useful.

`validateForm()` handler function can loop through every field and apply an `invalid` class to its parent element where necessary:

```js
function validateForm(e) {
  const form = e.target;
  if (form.checkValidity()) {
    // form is valid - make further checks
  } else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach((i) => {
      if (i.checkValidity()) {
        // field is valid - remove class
        i.parentElement.classList.remove("invalid");
      } else {
        // field is invalid - add class
        i.parentElement.classList.add("invalid");
      }
    });
  }
}
```

The script above applies `invalid` class to the `<div>` when email is not specified or invalid.

```html
<div>
  <label for="email">email</label>
  <input type="email" id="email" name="email" required />
  <p class="help">Please enter a valid email address</p>
</div>
```

CSS can then show or hide the validation message when the form's submitted.

```css
.help {
  display: none;
}
.invalid .help {
  display: block;
}
.invalid label,
.invalid input,
.invalid .help {
  color: red;
  border-color: red;
}
```

#### [Custom Form Validation Example](js/form-validation-class-example.md)

### Recommendations

- Use standard HTML input types where possible:
  - `min` `max`
  - `step`
  - `minlength` `maxlength`
  - `pattern`
  - `required`
  - `inputmode`
  - `autocomplete`
- If necessary, use a little JavaScript to enable custom validations & messages
- For complex fields, progressively enhance the standard inputs
- Forget Internet Explorer

## Organizing JavaScript Code

JavaScript is a very _forgiving_ & _flexible_ language, allowing us to structure it in many ways. As projects increase in size, maintenance becomes difficult unless code is structured well. Organization of code is known as `design patterns`.

### Objects And Object Constructors

Review:

```js
// Object LITERAL
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  },
};

// Get Info out of an Object
// 1. dot notation * PREFERRED: cleaner, but limited functionality
myObject.property; // 'Value!'

// 2. bracket notation * UGLIER, but MORE ROBUST
myObject["obnoxious property"]; // [Function]

// this is NOT possible w/ dot notation:
let varObjKey = "obnoxious property";
myObject[varObjKey];
```

### Objects as a Design Pattern

Tic Tac Toe example:

```js
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};
```

Benefit of using objects:

> As an app grows in complexity, objects allow us to organize data in a superior way:

```js
// OKAY:
console.log(playerOneName);
console.log(playerTwoName);

// BETTER: Don't have to remember the specific person's name
function printName(player) {
  console.log(player.name);
}
```

### Object Constructors

When we have a specific type of object that we need to duplicate, like an inventory of items, a bettery way to create them is using an **object constructor**:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

// To call an object constructor, you use the keyword new
const player = new Player("steve", "X");
player.sayName();
```

### [Exercise: Book Object](js/exer/../exercises/book.js)

### The Prototype

All JavaScript **objects** have a `prototype`.

- Prototype is another object that the original object inherits from.
- The original object has access to all of its prototype's methods & properties.

When using constructors to create objects, it is **best** to define functions on the `prototype` of that object.

- A _single instance_ of that function will be **shared between all of the Student objects**.
- If the function's declared inside the constructor, the function will be **duplicated every time a new Student object is created**.

```js
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.goToProm = function () {
  console.log("Eh.. go to prom?");
};
```

#### Prototypal Inheritance: Recommended Method

The current best way of setting the prototype of an object is with `Object.create`.

- `Object.create` returns a new object with the specified prototype & any additional properties you add

```js
function Student() {}

Student.prototype.sayName = function () {
  console.log(this.name);
};

function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}

EighthGrader.prototype = Object.create(Student.prototype);

const carl = new EighthGrader("carl");
carl.sayName(); // console.logs "carl"
carl.grade; // 8
```

**WARNING**: Do NOT set one prototype equal to another, because it can cause issues in the future. In other words:

```js
// BAD - DON'T DO THIS:
EighthGrader.prototype = Student.prototype;
```

#### More on Prototypes

1. Every JavaScript function has a **prototype property** (empty by default)

   We attach properties & methods **on this prototype property** when you want to implement _inheritance_

2. The **prototype attribute** (aka prototype object) is a characteristic of an object

   It points to **the object's parent** or the object it inherited its properties from.

   > `Object.prototype` or _prototype object_

The `__proto__` _pseudo_-property contains an object's prototype object.

```js
function People() {
  this.superstar = "Michael Jackson";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain.
console.log(famousPerson.superstar); // Steve Jobs

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log(famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log(famousPerson.toString()); // [object Object]
```

All built-in constructors:

- `Array()`
- `Number()`
- `String()`

... were created from the `Object constructor`, and their prototype is `Object.prototype`.

#### Looping through Objects

The `for...in` loop iterates over inherited properties.

To check if an object has its own (not inherited) property, use `obj.hasOwnProperty(key)`. `hasOwnProperty()` is inherited from `Object.prototype.hasOwnProperty`.

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats

// To sort properties by inherited or own:
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

#### [JavaScript Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)

#### Objects & Chaining

To chain multiple calls together in an object, `return this` within the method declaration:

```js
const cat = {
  init: function (sound) {
    this.sound = sound;
    // RETURN this = allows for chaining:
    return this;
  },
  // ...
};

const kitty = Object.create(cat).init("meow");
```

#### [Methods: Constructor vs Prototype](https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864)

```js
var Dog = function (name) {
  this.name = name;

  // PRIVATE variable (not accessible via dog.barkCount)
  var barkCount = 0;

  this.bark = function () {
    barkCount++;
    alert(this.name + " bark");
  };

  // PRIVATE variable `barkCount` requires the method be in the constructor
  this.getBarkCount = function () {
    alert(this.name + " has barked " + barkCount + " times");
  };
};

// PUBLIC variable name, should be defined on the prototype.
Dog.prototype.wagTail = function () {
  alert(this.name + " wagging tail");
};

var dog = new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();
```

#### `this`

Function invocation: `hello('World')`

- `hello` expression evaluates to a function object
- pair of parenthesis with `World` argument

**IIFE**: Immediately-invoked Function Expression

```js
// IIFE
const message = (function (name) {
  // function object
  return "Hello " + name + "!";
})("World"); // passes World as a parameter
// Hello World!
```

**"`this` is the **global object** in a function invocation"**

- _global object_: determined by execution environment (browsers: `window` object)
- function invocation, execution context is the _global object_

```js
function sum(a, b) {
  console.log(this === window); // => true
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}
// sum() is invoked as a function
// this in sum() is a global object (window)
sum(15, 16); // => 31
window.myNumber; // => 20
```

In a function call, `this` is automatically set to `window` in a browser.

In the global execution context (outside of any function scope), `this` also equals the global object `window`.

```js
console.log(this === window); // => true
this.myString = "Hello World!";
console.log(window.myString); // => 'Hello World!'
```

```html
<!-- In an html file -->
<script type="text/javascript">
  console.log(this === window); // => true
</script>
```

**`this` is _undefined_ in a function invocation in strict mode**

```js
function fun() {
  "use strict"; // enable the strict mode
  console.log(this === undefined); // => true
}

function fun() {
  // NON-strict mode
  console.log(this === window); // => true
}
```

**Pitfall:** `this` in an inner function:

```js
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    // method, not function
    console.log(this === numbers); // => true (obj name)
    function calculate() {
      // function
      // this = window OR undefined/strict mode
      console.log(this === numbers); // => false
      // therefore this.numberA/B don't exist
      return this.numberA + this.numberB;
    }
    return calculate();
  },
};
numbers.sum(); // => NaN or throws TypeError in strict mode
```

To solve the issue above:

1. Manually change the _context of calculate()_:

   Use `return calculate.call(this)` -- not `return calculate()`

   `function.call(this)` = indirect invocation of a function

   - it modifies the _context_ to a value specified as the 1st parameter.

2. Use an arrow function:

   ```js
   const calculate = () => {
     console.log(this === numbers); // => true
     return this.numberA + this.numberB;
   };
   ```

**Method invocation**

`this` is the _object that owns the method_ in a method invocation.

**Pitfall**: Separating method from its object:

```js
function Pet(name) {
  this.name = name;
  this.logInfo = function () {
    console.log(`${this.name} is my name`);
  };
}

const myCat = new Pet("Joe");
setTimeout(myCat.logInfo, 1000);
// " is my name"

const extractedLogInfo = myCat.logInfo;
extractedLogInfo();
// " is my name"

const boundLogInfo = myCat.logInfo.bind(myCat);
boundLogInfo();
// YAY! "Joe is my name"
```

When passed as a parameter, the method is separated from its object. To fix this:

1. use the `.bind(myCat)` method.
2. change method to arrow function

**Construction Invocation**

Constructor invocation is perform when the `new` keyword is followed by an expression that evaluates to a function object.

Always use `new` when creating instances from a constructor function.

- If `new` is omitted, a new object **is NOT** created. Instead, the `window` object will inherit the constructor's properties.

**Indirect Invocation**

Indirect invocation is performed when a **function is called using**:

- `myFunction.call()`
- `myFunction.apply()`

`myFunction.call(thisArg, arg1, arg2)` accepts the 1st argument `thisArg`, which sets the context of the invocation and a **list of arguments.**

`myFunction.apply(thisArg, [arg1, arg2])` accepts the 1st argument `thisArg`, which sets the context of the invocation and an **array of arguments.**

Example:

```js
// obj
const name = { name: "White Rabbit" };

// function
function concatName(string) {
  console.log(this === rabit); // true
  return string + this.name;
}

// indirect invocations
concatName.call(rabbit, "Hello"); // Hello White Rabbit
concatName.apply(rabbit, ["Bye"]); // Bye White Rabbit
```

**Bound Functions**

Bound functions are functions whos context and/or arguments are bound to specific values.

`myFunction.bind(thisArg, arg1, arg2)` accepts 1st argument `thisArg` as context an optional list of arguments `arg1` `arg2` to bound to. `.bind()` returns a new function that's bound to `thisArg`'s context and `arg1` `arg2` arguments.

```js
function multiply(number) {
  "use strict";
  return this * number;
}

// binds double to multiply with value of 2
const double = multiply.bind(2);

double(3); // 6
double(10); // 20
```

#### TLDR / Job Interview Answer

A prototype is a **property** that all functions have and it points to an object.

Prototypes are important because they allow you to share methods across all instances of an object.

`Object.create` creates a new object and it sets its prototype EQUAL to another pre-existing object.

#### new Keyword / Prototypal Inheritance

When creating a new instance of an object, the `new` keyword:

- Creates `this` object
- Implicitly returns `this` object for you
- Failed lookups go to the `.prototype` object

```js
function Animal(name, energy) {
  // 'new' => creates this object & automatically:
  // let animal = Object.create(Animal.prototype)
  // let this = Object.create(Animal.prototype);
  this.name = name; // animal.name
  this.energy = energy; // animal.energy
  // return this * automatic // return animal
}

Animal.prototype.eat = function (amount) {
  console.log("nom!", amount, "times");
};

const cow = new Animal("Maynard", 50);
```

To create another object that inherits the Animal object:

```js
function Dog(name, energy, breed) {
  // * remember, by calling 'new Dog', this is automatic:
  //   let this = Object.create(Dog.prototype);
  // 1) call the Animal constructor function
  //    passing context (this obj) and the arguments
  Animal.call(this, name, energy);
  this.breed = breed;
}

// then, inherit the Animal.prototype:
Dog.prototype = Object.create(Animal.prototype);
// ^ overrides the Dog constructor. to reset this to Dog:
Dog.prototype.constructor = Dog;

// add a method to dog
Dog.prototype.bark = function () {
  console.log("woof");
};

const molly = new Dog("Molly", 100, "black lab");
```

#### Classes

```js
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  },
  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }
}

const snoop = new Animal('Snoop', 10);
```

To create a dog class that inherits Animal class:

```js
// dog inherits animal class
class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }
  bark() {
    console.log("woof woof");
  }
}
```

#### Built-in Objects

```js
// Arrays
let array = []; // is syntactic sugar for:
let array = new Array();
// the Array() object has built-in methods
// .pop, .push, etc.
```

### Factory Functions

The factory function pattern is similar to constructors. Instead of using `new` to create an object, factory functions setup & return the new object when you call the function:

```js
// FACTORY FUNCTION VERSION

const personFactory = (name, age) => {
  const sayHello = () = console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);
jeff.name; // jeff
jeff.sayHello();  // hello!

// VS CONSTRUCTOR PATTERN:

const Person = function(name, age) {
  this.sayHello = () => console.log('hello!');
  this.name = name;
  this.age = age;
};

const jeff = new Person('jeff', 27);
```

#### Object Shorthand

If creating an object where the variables have the _exact same name_ as the object property you're defining, it can be condensed to:

```js
// 2015 Shorthand:
return { name, age, sayHello };

// Originally would have looked like:
return { name: name, age: age, sayHello: sayHello };
```

`console.log` hack:

```js
const name = "Maynard";
const color = "red";
const number = 34;

// HACK: display var name + value
console.log({ name, color, number }); // { name: 'Maynard', color: 'red', number: 34 }

console.log(name, color, number); // Maynard red 34
```

#### Scope & Closure

**Scope**: _where_ things like variables & functions are available to us (where they can be used in our code).

**Namespace**: sometimes means _scope_. It usually refers to **the highest level/global scope**.

- **Global Scope**: 1 and only: don't clutter it. Limit use to things that need to be shared/accessible across scopes.
- **Local Scope**: any scope defined _past the global scope._ Each function has its **own `(nested)` local scope.**
  - Any function defined _within another function_ has a local scope, which is _linked to the outer function_.

```js
let a = 17; // global / root / parent scope
window.a; // 17

const func = (x) => {
  let a = x; // function scope
  a; // 99
  window.a; // 17
};

func(99);

console.log(a); // 17
```

- Children have access to all of parent's _cookies_.
- Parents _don't_ have access to children's cookies ()

```js
// scope = variable access
// context = this

let a = 1;

function foo() {
  a = 2;
  // looks for 'a' defined in the local scope (function)
  // if it doesn't exist, it looks in parent for 'a'
  a; // 2
}

function bar() {
  let a = 3; // defined in function scope
  a; // 3
}

foo();
a; // 2
```

#### Function Scope

All scopes in JS are created with `Function Scope` **only**.

Function scopes are **NOT** created by:

- `for` / `while` loops (_block scope_)
- `if` / `switch` expression statements (_block scope_)

Exception\*

- `var` = function scoped
- `let/const` = block scoped

Function Scope: Falls back to the nearest function

Block Scope: `{ }` Anything within curly brackets

```js
// FUNCTION (var) vs BLOCK (let/const)
var age = 100;
if (age > 12) {
  var varYears = age * 7; // var, nearest function: window
  let dogYears = age * 7; // let, block scoped: stuck inside { }
}
varYears; // 700;
letYears; // error
```

> New Functions = New Scope

#### Lexical Scope

Lexical Scope or **Closure**: Nested functions, or functions within another function. The inner function has access to the scope of the outer function.

- Any variables/objects/functions defined in its parent scope, are available in the scope chain.
- **Scope Chain**: Establish scope for a given function
  - When resolving a variable, work at _innermost_ scope and search outwards.

#### Closures

Closures are similar to Lexical Scope.

Closure makes our scope inside `SayHello` inaccessible to the public scope:

```js
var sayHello = function (name) {
  var text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};

sayHello("Todd"); // returns NOTHING, no error, silence
```

`sayHello()` returns a function, which means it isn't executed -- it simply exists.

- It needs _assignment_ & _then_ calling:

```js
var helloTodd = sayHello("Todd");
helloTod(); // call the closure & logs 'Hello, Todd'
```

You can call it directly but to call your closure, you have to add `()` to the end:

```js
sayHello("Bob")(); // extra ()
```

#### Scope && `this`

Each scope binds a different value of `this`.

```js
var fun = function () {
  console.log(this); // this = global, [object Window] *DEFAULT*
};

var obj = {};
obj.method = function () {
  console.log(this); // this = Object { obj }
};

// <nav class="nav">
var nav = document.querySelector(".nav");

var toggleNav = function () {
  console.log(this); // this = <nav> element, due to how its called:
};
nav.addEventListener("click", toggleNav, false);
```

Within the same parent function, the value of `this` can change:

```js
var nav = document.querySelector(".nav"); // <nav class="nav">

var toggleNav = function () {
  console.log(this); // <nav> element

  // new scope, NOT called by nav
  setTimeout(function () {
    console.log(this); // [object Window]
  }, 1000);
};

nav.addEventListener("click", toggleNav, false);
```

#### Changing `this`

> Repeat notes, look above for more info.

`.call()` and `.apply()` methods

- allow you to pass in a **scope** to a function when **calling/invoking** it
- specifies the value of `this`.

```js
var links = document.querySelectorAll("nav li");

for (var i = 0; i < links.length; i++) {
  (function () {
    console.log(this); // this = set w/ call()
  }.call(links[i])); // this = links[i] aka nav li
}
```

- `.call(scope, arg1, arg2)` // individual args, comma separated
- `.apply(scope, [arg1, arg2])` // array of values

```js
myFunction();
myFunction().call(scope, arg1, arg2);
myFunction().apply(scope, [arg1, arg2]);
```

`.bind()` method

- Doesn't call/invoke the function
- Binds value of this _BEFORE_ it's called.

```js
// We CAN'T pass parameters into function references:
nav.addEventListener("click", toggleNav(arg1, arg2), false); // BAD: invokes function immediately

// GOOD:
nav.addEventListener("click", toggleNav.bind(scope, arg1, arg2), false);
```

### Private & Public Scope

Closures allow us to _emulate_ public/private scope.

The `Module` design pattern allows us to do this by _wrapping our functions inside a function:_

```js
(function () {
  // private scope
})();

(function () {
  // add functions within private scope
  var myFunction = function () {
    // function within private function
  };
});

myFunction(); // Uncaught ReferenceError: not defined
```

**Modules** allow us to scope functions correctly: private/public scope & an object.

```js
// global namespace / window obj
var Module = (function () {
  return {
    myMethod: function () {
      console.log("myMethod called!");
    },
  };
})();

// call module & methods
Module.myMethod();
```

`return` returns our `public` methods:

- accessible in global scope
- but are _`namespaced`_.

> Lots of developers go wrong and pollute the global namespace by dumping functions in global scope.

To create _private scope_, DON'T return functions:

```js
var Module = (function () {
  var privateMethod = function () {
    // private method, not returned
    // can't be called globally
  };

  return {
    publicMethod: function () {
      // public methods, inside return
      // can be called globally
    },
  };
})();

Module.privateMethod(); // error
Module.publicMethod(); // success
Module.publicMethod;
```

**ANYTHING** in the _same scope_ has access to anything in the same scope, **even after the function is returned.**

- `public` methods have _access_ to our `private` methods
- BUT they're unaccessible to global scope

```js
var Module = (function () {
  var privateMethod = function () {
    // privacy
  };

  return {
    publicMethod: function () {
      // publicMethod HAS ACCESS TO prviateMethod! ^ above
      privateMethod();
    },
  };
})();
```

- Above ^: powerful level of interactivity
- Security: why we can't put all of our functions in the global scope, making our code vulnerable to attack

Example of returning an object w/ private/public methods:

```js
var Module = (function () {
  var privateMethod = function () {
    // privacy
  };

  var myModule = {}; // create obj
  myModule.publicMethod = function () {
    // public method in myModule obj
  };

  // return object w/ public methods
  return myModule;
})();

Module.publicMethod();
```

Naming private & public methods:

- `_privateMethod()`: prefix private methods with `_`
- `publicMethod()`

This visually helps you differentiate the two:

```js
var Module = (function () {
  var _privateMethod = function () {};
  var publicMethod = function () {};
  return {
    publicMethod: publicMethod,
  };
})();
```

#### Private Variables & Functions \*\*\*

Scope prevents outside access to functions within `FactoryFunction`. The only way to use those functions is to `return` them.

- Big Deal: We can't access `capitalizeString()`, BUT `printString()` can. THAT is **closure.**

```js
const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"
```

Another example:

```js
const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
```

- `counter()` is calling the **return value** of `counterCreator()`.
- the `counter()` function is a **closure.**
  - has access to `count`
  - can print & increment it
  - **no other way for our program to access that variable**

#### Factory Functions & Closure \*\*\*

Closures allow us to create **private** variables & functions.

Private functions are used in the _workings_ of our object that are **not intended to be used elsewhere in our program**.

- Even though an object might only do 1-2 things, we are free to split our functions up as much as we want
  - Allows for cleaner, easier to read code
  - Only export the functions that the rest of the program are going to use

> Private functions are **very useful** and should be used as often as possible!

#### Back to Factory Functions

Factories are JavaScript functions that return an object.

Game example: Objects describe our players & all the things the player can do.

```js
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);

jimmie.die(); // ERROR, not publicly accessible
jimmie.health -= 1000; // ERROR, not publicly accessible
```

##### Inheritance With Factories

Using factories, there are many ways to accomplish prototypes & inheritance.

- Giving our objects access to methods/properties of another object

```js
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
```

Destructuring assignment: `const { sayName } = Person(name);`

- Allows us to cherry pick the `sayName()` function only.

To include an **entire object** and all of its properties & methods, you use `Object.assign`:

```js
const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy });
};
```

`Object.assign`

- allows you to copy one or more source objects into a new object:

**`Object.assign(target, ...sources)`**

- **target**: object you're creating, with receives all of the sources properties.
- **sources**: source objects, containing properties/methods you want to apply.

Prototypal inheritance can be achieved by passing `Object.create(proto)` as the target object:

```js
const proto = {
  hello() {
    return `Hello, my name is ${this.name}`;
  },
};

const greeter = (name) =>
  Object.assign(Object.create(proto), {
    name,
  });

const george = greeter("george");

const msg = george.hello();

console.log(msg);
```

#### Module Pattern

> ES6 introduced 'modules' to JS. Modules are a syntax for **importing** and **exporting** code between different JS files.

> **Note:** Modules are not the same as Module Pattern.

Modules & factory functions are very similar, but they differ in how they're created:

```js
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476
```

Instead of creating a factory to be used over and over again to create multiple objects, _the module pattern_ wraps the factory in an `IIFE` (immediately invoked function expression).

```js
// IIFE
(function () {
  var foo = "bar"; // private
  console.log(foo);
})();

// Same thing as:
function immediateFunction() {
  var foo = "bar"; // private
  console.log(foo);
}
immediateFunction();
```

**IIFE**: Obtains Data **Privacy**

- Any variable declared within the IIFE can't be accessed outside of its scope.

Explicitly defining & calling a function (second example above):

- Unnecessary clutter in global namespace
- Increases possible name collisions
- Intentions of code isn't as self-explanatory as an IIFE
- It might accidentally be called more than once.

To pass an argument to an IIFE:

```js
var foo = "foo";
(function (innerFoo) {
  console.log(innerFoo); // foo
})(foo); // pass argument to IIFE
```

#### Modular Pattern Ground Rules

- Self-contained module
  - Everything to do w/ module is in my module
  - No global variables
  - If a module manages more than one thing, it should be split up
- Separation of concerns
- DRY Code: Don't Repeat Yourself
- Efficient DOM caching: **limit DOM calls**, 1 per module
- No memory leaks
  - _Unbind_ unused EventsListeners!
  - Bind EventListeners functions to `this`

#### Namespacing

Encapsulating inner workings of our programs into objects produces _namespacing_.

Namespacing is a technique that is used to:

- avoid naming collisions in our programs

Example:

- Repeat use of `add()` function/method:
  - `calculator.add()`
  - `displayController.add()`
  - `operatorStack.add()`

### Classes

Classes are syntactic sugar in JS. They perform the exact same thing as object constructors and prototypes.

Some believe they are dangerous and/or misleading, obscuring what is really going on with these objects.

However, they are gaining popularity and exist in frameworks like React.

#### Getters & Setters

There are 2 types of **object properties**.

- Data Properties (everything up until now)
- Accessor Properties (**execute on getting/setting a value**)

Accessor properties are denoted by `get` and `set`:

- `get` executes when a property is _read_
- `set` executes when it is _assigned_

```js
let obj = {
  get propName() {
    // getter, code executed on getting obj.propName
  },
  set propName(value) {
    // setter, code executed on setting obj.propName = value
  },
};

// Example:
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

alert(user.fullName); // John Smith
```

From the outside, an accessor looks like a regular one.

- We don't _call_ `user.fullName` as a function
- We _read_ it normally & the **getter runs behind the scenes**

`fullName` is only a getter, so we can't assign it a value:

```js
let user = {
  get fullName() {
    return `...`;
  },
};

user.fullName = "Test"; // Error (property has only a getter)
```

By adding a `setter`, we can fix that:

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

#### Accessor Descriptors

Access properties DON'T have `value` or `writable`. They have:

- `get` a function w/o arguments, when property is read
- `set` a function w/ 1 argument, when property is set
- `enumerable` same as data properties
- `configurable` same as data properties

To create an _accessor `fullName` with `defineProperty`_, we can pass a descriptor with `get` and `set`:

```js
let user = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

for (let key in user) alert(key); // name, surname
```

> A property can be **either** an **accessor** (has get/set methods) **or a data property** (has a value), **not both.**

```js
// Error: Invalid property descriptor.
Object.defineProperty({}, "prop", {
  get() {
    return 1;
  },

  value: 2, // ERROR: Invalid property descriptor
});
```

#### Smarter Getters/Setters

```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
```

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john = new User("John", new Date(1992, 6, 1));

//
// Define age intelligently, by calculating age based on birthdate
//

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // birthday is available
alert(john.age); // ...as well as the age
```

#### What is a class?

```js
// Class Syntax:
class MyClass {
  // methods
  constructor() {
    // ..
  }
  // NOTE: NO COMMAS BETWEEN METHODS !
  method1() {}
  method2() {}
  method3() {}
}

// Example
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(`${this.name} says hi!`);
  }
}

let user = new User("John");
user.sayHi(); // 'John says hi!'
```

`new User("John")`:

- Creates a new object
- Constructor runs with the given argument and assigns it to `this.name`.

A class is a **kind of function**.

`class User {}`:

- Creates function named `User`
- Function code is taken from the `constructor` method
- Stores _class methods_ (`sayHi()`) in User.prototype

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

#### Not Just Syntactic Sugar

A constructor function and prototype are _almost the same_ as classes.

```js
// rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();
```

However...

- Functions created by `class` are labeled by internal property: `[[IsClassConstructor]]`
- Classes **must be called with `new`**
- Classes are _non-enumerable_
  - All methods in the prototype have `numerable` set to `false`
  - Good thing: if we `for...in` over an object, we don't want its class methods
- Classes always `use strict`

```js
class User {
  constructor() {}
}

alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'
alert(User); // class User { ... }
```

#### Class Expression

Classes can be defined inside another expression, passed around, returned & assigned -- just like functions.

```js
let User = class {
  sayHi() {
    alert("hi");
  }
};
```

Class expressions may have a name. It is only visible within the class itself:

```js
// "Named Class Expression"
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition
alert(MyClass); // error, MyClass name isn't visible outside of the class
```

Creating classes dynamically "on-demand":

```js
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello
```

#### Class Getters/Setters

Classes can include getters/setters, computed properties, etc... just like literal objects.

```js
class User {
  constructor(name) {
    // invoked the setter below
    this.name = name;
  }

  get name() {
    return this._name
  }

  set name(value) {
    if (value.length < 4 >) {
      alert('Get a longer name, man.');
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
alert(user.name); // John
user = new User(""); // 'Get a longer name, man.'
```

#### Class Computed Names

Using brackets `[...]`, we can set computed method names:

```js
class User {
  ["say" + "Hi"]() {
    alert("Hey");
  }
}

new User().sayHi(); // Hey
```

#### Class fields

Class fields that allow us to add _any properties_.

- NOT stored on the `User.prototype`
- Stored on all object instances

All you write is `property = value`:

```js
class User {
  // class fields -- all obj get this property
  // public class fields
  name = "John";
  name = prompt("Name please?", "John");

  // private class fields: only accessible within class
  #height = 0;
  width;

  constructor(job) {
    this.job = job;
  }
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // !!! undefined
```

#### Bound Methods w/ Class fields

Functions have a dynamic `this`, dependent on the function call.

- If object is _passed around_, `this` won't reference its object anymore:

```js
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // undefined
```

To fix this, you can:

- Use a wrapper function: `setTimeOut(() => button.click(), 1000)`
- Bind the method to object in the _constructor_

```js
class Button {
  constructor(value) {
    // binds `this` to object
    this.value = value;
  }
  // becomes `class field` -- not method click()
  // NOT defined on prototype; copied on each object instance
  click = () => {
    alert(this.value);
  };
}

let button = new Button("Hello");
setTimeOut(button.click, 1000); // hello due to this.value = value in constructor
```

#### Sub classing with `extends`

`extends` keyword: creates a child of another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Sub class / inheritance
class Dog extends Animal {
  constructor(name) {
    // super class constructor, passing name parameter
    super(name);
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const doggy = new Dog("Sparky");
doggy.speak(); // 'Sparky barks.'
```

You can also extend traditional function-based "classes":

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const doggy = new Dog("Buddy");
doggy.speak(); // 'Buddy barks.'
```

Classes **cannot** extend regular objects -- objects without a constructor. If you want to inherit a regular object, use `Object.setPrototypeOf()`.

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// inherit from a regular object, without extends:
Object.setPrototypeOf(Dog.prototype, Animal);

const doggy = new Dog("Baxter");
doggy.speak(); // Baxter makes a noise.
```

The `super` keyword can reference the methods of the super / parent class, which is an advantage over prototype-based inheritance.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    // parent's speak method call, even though this is
    // "overwriting it"
    super.speak();
    console.log(`${this.name} ROARS.`);
  }
}

const leo = new Lion("Leo");
leo.speak();
// Leo makes a noise.
// Leo ROARS.
```

#### Static Class Methods

Static class methods are methods that

- Belong to the class itself
- Are private and not accessible outside of the class
- Object instances cannot access public class methods

```js
class Person {
  // Doesn't belong to instances!!
  static species() {
    return "Homo sapiens";
  }

  static speciesSentence() {
    // static method this => points to Person class (not instance)
    return `Humans are classified as ${this.species()}`;
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const joe = new Person("Joe", "Schmoe");
joe.species(); // error
Person.species(); // Homo sapiens
Person.speciesSentence(); // Humans are classified as Homo sapiens
```

#### Mix-ins

Mix-ins or _abstract subclasses_ are **templates for classes.**

Classes can only have 1 superclass, so multiple inheritance from tooling classes is _not possible._

A function with:

- superclass as input
- subclass extending that superclass as output

can be used to implement **mix-ins**

```js
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };
const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

// Mix-ins can be used by a class like this:
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

#### Composition vs Inheritance

- Inheritance: Design types by **what they are**
- Composition: Design types by **what they do**

```
//
// Inheritance: what they ARE
//

Robot
  .drive()

    CleaningRobot
    .clean()

    MurderRobot
    .kill()

Animal
  .poop()

    Dog
      .bark()

    Cat
      .meow()

//
// Composition: what they DO
//

dog             = pooper + barker
cat             = pooper + meower
cleaningRobot   = driver + cleaner
murderRobot     = driver + killer
murderRobotDog  = driver + killer + barker
```

```js
const barker = (state) => ({
  bark: () => console.log(`Woof. I'm a ${state.name}`),
});

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});

barker({ name: "karo" }).barker();
// Woof, I am karo

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobot("sniffles").bark();
// Woof, I am sniffles
```

## Package Managers / Module Bundlers

_History & Why_

JavaScript Pacakage Managers emered to help _automate the process of downloading & upgrading libraries from a central repository._

`npm` was originally a package manager made specifically for `node.js`, a JS runtime designed to run on the server --- not the frontend. It is automatically included with `node.js`.

Linking modules to a webpage with `npm` alone requires going through the `node_modules/` directory and manually linking them in the `<head>` of a web page.

JavaScript wasn't designed to import code from one file to another. It was only meant to run in the browser.

In 2009, CommonJS was created with the goal of creating an ecosystem for JavaScript, and modules were a big part of it. This would allow you to import/export code across files, like most programming languages, without resorting to global variables. The most well known implementation of CommonJS is `node.js`.

Instead of loading a module like `moment.min.js` in an HTML script tag, `node.js` allows you to load it directly in the JavaScript file: `var moment = require('moment');`. This works great with server side node.js because it has access to the file system. However, this doesn't work in the browser. Loading files in the browser has to be done dynamically - synchronously, slowing down execution, or ascnhronously, which has timing issues.

Module bundlers is a tool that gets around this problem with a build step, which has access to the file system, to create a final output that is browser compatible.

- Converts `require` statements (invalid in JavaScript)
- to actual contents of each file (JavaScript friendly)

Modern JS Summary:

- **Package Manager**: Automatically download 3rd party packages
- **Module Bundler**: Create a single js script file
- **Transpiler**: Use future JS features
- **Task Runner**: Automate different parts of the build process

### `npm`

Installing packages:

```sh
# unscoped packages
npm install package-name

# scoped public packages
npm install @scope/package-name

# private packages
npm install @scope/private-package-name

# package with dist-tags
npm install example-package@beta
```

#### package.json File

`package.json`

- lists package dependencies
- specifies versions of packages that can be used
- makes build reproducible, easier to share

**Required**: `name` & `version` fields

- `"name"` contains package names, all lowercase, one word, \_/-
- `"version"` form: `x.x.x.x`

**Author field**

- `Your name <email@example.com> (http://www.example.com)`

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "author": "Your Name <email@example.com>"
}
```

**To create a new package.json:**

```sh
npm init

# default values
npm init --yes
```

**To customize the npm questionaire:**

```sh
vi ~/.npm-init.js

module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");
```

**To set config options for the init command:**

```sh
npm set init-author-email "example@email.com"
npm set init-author-name "example name"
npm set init-license "MIT"
```

#### Dependencies & devDependencies

`devDependencies` and `dependencies` are 2 properties that are added to `package.json`.

When an app is fed _into a module bundler_ (Webpack/Rollup), all required dependencies are **pulled together** and **bundled**.

- These packages should be present in `dependencies`

`devDependencies` are only required during the development phase and not necessary for the production build. Examples are `babel` plugins, `test runners` and `linter packages`.

For packages required in both production and development, add them to the `dependencies` section.

#### [Official npm documentation](https://docs.npmjs.com/)

#### `yarn`

Yarn is a replacement for the default `npm`. It's the same for the most part, but it does have a few more features.

### Webpack

Webpack is a tool for bundling modules.

```js
// src/index.js
import bar from "./bar.js";
bar();

// src/bar.js
export default function bar() {
  //
}

// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

```html
<body>
  ...
  <script src="dist/bundle.js"></script>
</body>
```

#### Creating a bundle

- mkdir `src/` `dist/`
- index.html > `dist/`

To bundle a package as a dependency:

```sh
# production dependency
npm install --save package_name

# development dependency
npm install --save-dev package_name
```

Remove any `<source>` tags for dependencies from your html file. This is done automatically via `import` lines. Rename our javascript file to:

```html
<script src="main.js"></script>
```

```js
import _ from "lodash";
```

- `import` doesn't pollute global scope

By stating what dependencies a module needs, webpack:

- builds a **dependency graph.**
- uses graph to **generate an optimized bundle**
  - where scripts are executed in the correct order

`npx webpack` takes our script `src/index.js` as our entry point & generates `dist/main.js` as the output.

Behind the scenes, webpack **transpiles** the code so that older browsers can also run it.

- Webpack only alters code that contains `import` and `exxport`

#### Using a Configuration

`./webpack.config.js` is run by default, but you can specify another file as your config using the `--config` arg.

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

#### NPM Scripts

Running a local copy of webpack from CLI is painful, so we can automate the process with a shortcut:

```json
// package.json
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
   },
```

With `build` setup, we can now run `npm run build`.

#### Webpack Concepts

- `entry`: which module webpack should use to begin building its dependency graph
  - `./src/index.js` by default
- `ouput`: where webpack should emit bundles it creates & how to name them
  - `./dist/main.js` by default
- `loaders` by default, webpack only understands JS & JSON files.
  - loaders allow webpack to process other types of files & convert them into valid modules
  - loaders have 2 properties in your config:
    - `test` file/files should be transformed
    - `use` what loader should be used to do the transforming

```js
// loader example
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
```

- `plugins` perform wider range of tasks, like bundle optimization, asset management, injection of `env` variables
  - to use a plugin, you need to `require()` it & add it to the `plugins` array

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
```

`html-webpack-plugin` generates an HTML file for your app & automatically generates bundles into this file.

- `mode`: development, production, or none

### Webpack Lesson

Aside from bundling modules, webpack can:

- Process & manipulate code during compilation step
- Writing SASS for CSS
- Manage images, compress & optimize them for web use
- Minify & Uglify your code
  - Minify: Remove whitespace, comments, semi-colons, can be reversed back when needed
  - Uglifying: Code becomes unreadable, reducing naming to single letters, no way to reverse
  - CSS: Remove whitespace
  - JS: Remove whitespace, truncate variables to single letters, etc. Makes it less readable.

```sh
npm install --save-dev style-loader css-loader
```

Allows us to import CSS from within a JavaScript module. The file is then automatically added to the `<style>` tag in with final html file.

```js
//webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

```js
// js file
import "./style.css";
element.classList.add("hello");
```

Module loaders can be **chained**. Chains are executed in reverse order. The first loader passes its result (ie: resource with applied transformations) to the next one, and so forth. \* JavaScript is expected to be the last loader in the chain.

**Loading Images** into webpack can be done with the built-in Asset Modules:

```js
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      { // Loading Images:
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```

- Javascript Loader: `import myImage from './my-image.png'`
- CSS Loader: `url(./my-image.png)`
- HTML Loader: `<img src=".my-image.png" />`

Each of those references automatically triggers optimization, a new URL/path to the optimized version will be substituted in its place & the new file will be added to your `output` directory.

**Loading Fonts** into webpack will automatically output them in your build directory:

```js
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```

In addition, webpack can also:

- Load fonts
- Load data: `xml`, `csv`, `json`
- Parse `json` files

Output Management:

- `npm install --save-dev html-webpack-plugin`
- `clean: true` under `output` to remove unused files from `dist/`

Development:

- source maps: `devtool: 'inline-source-map'`
- webpacks `watch mode`
  - scripts > `"watch": "webpack --watch"`

Other useful features:

- **Code splitting**: Allows you to split your code into bundles, which can then be loaded **on demand** or **in parallel**. It can have a major impact on load times.
- **Lazy loading**: **On-demand loading**, which speeds up initial load of the app.
- **Tree shaking**: Dead code elimination.

### ES6 Modules

Module syntax in ES6 contains 2 components:

- `import`
- `export`

```js
// file: myModule.js
const functionOne = () => console.log("function one, yo.");
const functionTwo = () => console.log("function two, yo.");
export { functionOne, functionTwo };
export default expression;
export default function functionName();
export default class ClassName;
export default function* generatorFunctionName();

// another file: otherJS.js
import { functionOne, functionTwo } from "./myModule.js";
functionOne();

// rename / alias
import { functionOne as f1, functionTwo as f2 } from "./myModule.js";

// default import:
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding

// namespace import:
import * as myModule from "./myModule.js";
myModule.doCoolStuff();
// myModule has a null prototype

// import module for its side effects (ie global scope content)
import "./myModule.js";
```

In order to load modules into your html file:

```js
<script type="module" src="index.js"></script>
```

Benefits of writing code in **modules**:

- **Code reuse**: If you have written functions that manipulate the DOM in a specific way, putting all of those functions into their own file as a `module` means you can copy that file and reuse it **very easily**.

With the introduction of ES6 Modules, the modular pattern (IIFEs) is **not needed anymore.**

You can _definitely_ export:

- constructors
- classes
- factory functions

## OOP Principles

### Single Responsibility

_Single Responsility_ states that a class, object, module, etc. should only have **one responsibility**.

- Does NOT mean an object can do only one thing
- Should be a part of one responsibility

Most of our code has functions to update & write things to the DOM in addition to our application logic.

It is a _really_ good idea to separate **DOM stuff** from **application logic**.

Example:

```js
function isGameOver() {
  // game over logic goes here!

  if (gameOver) {
    const gameOverDiv = document.createElement("div");
    gameOverDiv.classList.add("game-over");
    gameOverDiv.textContent = `${this.winner} won the game!`;
    document.body.appendChild(gameOverDiv);
  }
}

// Separate DOM stuff into its own module:

function isGameOver() {
  // game over logic goes here!

  if (gameOver) {
    DOMStuff.gameOver(this.winner);
  }
}
```

The function `isGameOver` shouldn't call the DOM function at all. That should go elsewhere, directly in the game-loop.

Another way to think about the Single Responsibility Principle:

- A method/class/component should have **a single reason** to change
- Otherwise, if an object is trying to have multiple responsibilities, _changing one aspect might affect another_

Single Responsibility is the first of a commonly found set of 5 design principles called: The **SOLID** Principles.

### Loosely Coupled Objects

Obviously, all of our objects are inteded to work together to form our final application. However, _you should make sure that individual objects can stand alone as much as possible._

**Tightly coupled objects** are objects that rely so heavily on each other than removing/changing one will require that you completely change another. _A real bummer._

For example, writing a game: if we wanted to completely change how the interface worked, we should be able to do that without reworking the game logic.

- We should be able to start off writing our game primarily using `console.log` and then add in a bunch of `DOM` functions later.

#### Object Role Stereotypes

Object Role Stereotypes are a set of general, pre-established roles that commonly occur across object-oriented stereotypes.

They are templates which can help decompose behavior into cohesive components.

- **Information Holder** object that knows information & provide info to other objects
- **Structurer** object that maintains relationships between objects & info about those relationships
- **Service Provider** object that performs specific work & offers service to others on demand
- **Controller** object that makes decisions & control a complex task
- **Coordinator** object delegates work to other objects, doesn't make any decisions
- **Interfacer** object that transforms info or requests between parts of a system

### S.O.L.I.D.

- `S` Single Responsibility
- `O` Open/Closed Principle
- `L` Liskov Substituion Principle
- `I` Interface Segregation Principle
- `D` Dependency Inversion Principle

### S. Single Responsibility

The Single Responsibility Principle states that a class or module should have:

- A single purpose
- Only one reason to change

An object's definition should only have to be modified due to changes to it's single responsibility within the system.

A class should have one and only one reason to change, meaning that a class should only have one job.

### O. Open-Closed

Open-Closed Principle states that code should be:

- Open for extension
- Closed for modification

We should be able to add additional functionality **by extending the original
functionality**, without the need to modify it.

> Open for extension means that we should be able to add new features or components to the application without breaking existing code.

> Closed for modification means that we should not introduce breaking changes to existing functionality, because that would force you to refactor a lot of existing code — Eric Elliott

Violation of Open-Closed Principle:

```js
// Hybrid Vehicle has an electric range in addition to fuel-based range
class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }

  getRange() {
    let range = this.fuelCapacity * this.fuelEfficiency;

    // VIOLATION: Should NOT extend existing class!
    if (this instanceof HybridVehicle) {
      range += this.electricRange;
    }
    return range;
  }
}

class HybridVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEfficiency, electricRange) {
    super(fuelCapacity, fuelEfficiency);
    this.electricRange = electricRange;
  }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'
```

Instead of adding to the existing `getRange()` method, we should override the
`getRange()` method within the `HybridVehicle` class, without modifying the
original code:

```js
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    // GOOD: Original code is untouched
    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    // Leaves the base class Vehicle untouched by overriding getRange() method
    within another class
    getRange() {
        return (this.fuelCapacity * this.fuelEfficiency) + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'
```

### L. Liskov Substitution

The Liskov Substitution Principle states that:

- Any class should be substitutable for its parent class without unexpected
  consequences.

If `Cat` and `Dog` extend the class `Animal`, we should expect:

- All of functionality in the `Animal` class to behave normally for a `Cat` and
  `Dog` object.

A classic violation of the Liskov Principle is the "square and rectangle"
problem. It is posed that a `Square` class can inherit from a `Rectangle`
class. Both shapes have 2 sides & both calculate area by multiplying their
sides by each other.

Problems arise when we try to use `Rectangle` functionality on a `Square`
object:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }
}

class Square extends Rectangle {}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`); // 'Height: 4, Width: 5' (correct)
console.log(`Height: ${square.height}, Width: ${square.width}`); // 'Height: 4, Width: 4' (correct)

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 5, Width: 4' (wrong)
```

`.setHeight()` on the `Square` object makes the square have a different height
than length, which makes for an invalid square.

This can be solve with **polymorphism**: an if statement in the Rectangle
class, or a variety of other methods.

The real issue is that `Square` is not a good child class of `Rectangle`, and
both shapes should be inherited from a `Shape` class instead.

### I. Interface Segregation

Interface Segregation principle states that an entity should:

- Never be forced to implement an interface that contains elements **which it
  will never use**.

For example: A `Penguin` should never be forced to implement a `Bird` interface
IF that `Bird` interface includes flying functionality. Penguins can't fly.

In JavaScript, a good way to implement Interface Segregation is through
**composition**:

```js
class Penguin {}
class Bird {}

const flyer = {
  fly() {
    console.log(`Flap flap, I'm flying!`);
  },
};

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly(); // 'Flap flap, I'm flying!'

const penguin = new Penguin();
penguin.fly(); // 'Error: penguin.fly is not a function'
```

Using `Object.assign`, we're able to selectively assign functionality to the
classes that require it. This way, we can avoid giving flight to penguins.

### D. Dependency Inversion

Dependency Inversion Principle states that:

- High level code should never depend on low level interfaces
- Abstractions should be used instead
- It's all about `decoupling` code

Example:

Software that runs an online store, and within it is a class `PurchaseHandler`
that handles the final purchase. This class is capable of charging the user's
credit card via a Paypal API:

```js
// BAD: Our code breaks IF we need to swap to Square API or something else in
the future!
class PurchaseHandler {
    processPayment(paymentDetails, amount) {
        // Complicated, PayPal specific logic goes here
        const paymentSuccess = PayPal.requestPayment(paymentDetails, amount);

        if (paymentSuccess) {
            // Do something
            return true;
        }

        // Do something
        return false;
    }
}
```

The issue is that if we need to change from Paypal to another API for handling
purchases, our code breaks. We need to go back and swap out Paypal API calls
for Square API calls. If Square accepts different types of data or wants us to
stage a payment first, and then process it once staging has completed, it
creates a headache.

Instead, we need to abstract the functionality out.

- Create another class called `PaymentHandler`
- It will remain the same no matter what the underlying payment system we use
- `PaymentHandler` will require changes in the future
- BUT our higher level interface remains the same: `PurchaseHandler`

```js
// Remains consistent, regardless of payment system: Paypal, Square, etc.
class PurchaseHandler {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PaymentHandler.requestPayment(
      paymentDetails,
      amount
    );

    if (paymentSuccess) {
      // Do something
      return true;
    }

    // Do something
    return false;
  }
}

// Abstracted away, allowing us to keep a consistent PurchaseHandler above ^
class PaymentHandler {
  requestPayment(paymentDetails, amount) {
    // Complicated, PayPal specific logic goes here
    return PayPal.requestPayment(paymentDetails, amount);
  }
}
```

Like many of the SOLID principles, the objective is:

- less about writing less code OR writing it quicker
- more about **writing better code**!
- save us days/weeks further down the line in exchange for a few hours now

### Encapsulation

Encapsulation means hiding information and data.

- Object can execute functionality without revealing details to the caller
- Private variable is only visible to the current function & is not accessible
  to the global scope/other functions

```js
const Book = (t, a) => {
  let title = t;
  let author = a;

  return {
    summary() {
      console.log(`${title} written by ${author}.`);
    },
  };
};

const book1 = new Book("Hippie", "Paul Coelho");
book.summary(); // Hippie written by Paulo Coelho.
```

The `title` and `author` variables are only visible within the scope of the
function `Book`. `summary()` is visible to the caller of `Book`.

- `title` and `author` are **encapsulated** inside `Book`

### Abstraction

Abstraction means implementation hiding.

- Hiding implementation details
- Only showing essential features to the caller

It hides irrelevant details & only shows what's necessary to the outer world.

A **lack of abstraction** will lead to **problems of code maintainability**.

```js
const Book = function (getTitle, getAuthor) {
  // private variables / properties
  let title = getTitle;
  let author = getAuthor;

  // public method
  this.giveTitle = function () {
    return title;
  };

  // private method
  const summary = function () {
    return `${title} written by ${author}.`;
  };

  // public method that has access to private method.
  this.giveSummary = function () {
    return summary();
  };
};

const book1 = new Book("Hippie", "Paulo Coelho");
book1.giveTitle(); // "Hippie"
book1.summary(); // Uncaught TypeError: book1.summary is not a function
book1.giveSummary(); // "Hippie written by Paulo Coelho."
```

### Reusability & Inheritance

Classes are syntactic sugar for prototypal inheritance under the hood.

```js
let Corebook = (title) => {
  this.title = title;
};

Corebook.prototype.title = function () {
  console.log(`title: ${this.title}`);
};

Corebook.prototype.summary = function (author) {
  console.log(`${this.title}, written by ${this.author}`);
};

let Book = function (title, author) {
  Corebook.call(this, title, author);
};

Book.prototype = Object.create(Corebook.prototype);

let book1 = new Book("The Alchemist", "Paulo Coelho");
book1.title();
book1.summary();
```

### Polymorphism

Polymorphism is the ability to call the same method on different objects and
have each of them respond in their own way.

```js
let book1 = () => {
  return 'summary of book1'
}

let book2 = function() {};

book2.prototype = Object.create(book1.prototype);
book2.prototype.summary = function() {
  return 'summary of book2'
}

let book3 = function() {};
book3.prototype = Object.create(book1.prototype);
book3.prototype.summary = function() {
  return 'summary of book3'
}

var books = [new book1(), new book2(), new book3()];
books.forEach((book) => console.log(book.summary());

// summary of book 1
// summary of book 2
// summary of book 3
```

### Relationships Between Objects

#### Association

Association is the relationship between two or more objects.

- Each object is independent
- Defines the multiplicity between objects
  - one-to-one, one-to-many, many-to-one, many-to-many

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
}
const book1 = new Book("Hippie", "Paulo Coelho");
const book2 = new Book("The Alchemist", "Paulo Coelho");
book2.multiplicity = book1;
```

`book1` is assigned to the `multiplicity` property on `book2`. It shows the
relationship between objects `book1` and `book2`. Both can be added & removed
independently.

#### Aggregation

Aggregation is a special case of association.

- Relationship between 2 objects
- One object can have a more major role than the other.

Aggregation = Ownership, when an object takes more ownership than another one.

- Owner Object: aggregate
- Owned Object: component

Aggregation is also called 'Has-a' relationship.

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// components
const book1 = new Book("Hippie", "Paulo Coelho");
const book2 = new Book("The Alchemist", "Paulo Coelho");

// aggregate
let publication = {
  name: "new publication Inc",
  books: [],
};
publication.books.push(book1);
publication.books.push(book2);
```

#### Composition

Composition is a special case of aggregation:

- When an object contains another object
- Contained object can't live without the container object

```js
let Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publication: {
    name: "new publication inc.",
    address: "chennai",
  },
};
```

`publication` is strictly bounded with the `Book` object and can't live without
it. If `book` object was deleted, then the `publication` would also be deleted.

#### Composition Over Inheritance

Inheritance: When an object is based on another object.

`book1` inherits properties/methods from `Book`: title, author, summary.

- Creates a `book1` **_is-a_** Book relationship

Composition: Collecting simple objects and combining them to build more complex
objects.

```js
const getTitle = (data) => ({
  title: () => console.log(`title: ${data.title}`),
});

const getAuthor = () => ({
  author: () => console.log(`author: ${data.author}`),
});

const getSummary = (data) => ({
  summary: () => console.log(`book summary need to update`),
});

const Book = (title, author) => {
  const data = {
    title,
    author,
  };

  return Object.assign({}, getTitle(data), getAuthor(data), getSummary(data));
};

let book1 = Book("The Alchemist", "Paulo Coelho");
book1.title(); // "title: The Alchemist"
```

## Dynamic User Interface Interactions

### Drop-down Menus

Example: nav-bar or button. When clicked, a menu slides down nicely.

Things to keep in mind:

- Allow menu to show up on **click** or **hover**
- Hardcode the menu items into HTML
  - Hide/reveal them using JavaScript
  - Via class: `visible`, etc.
  - Or manually setting style in JS
- Make sure code is reusable
  - Should be able to create multiple drop-downs on a page
  - Without repeating JS code
- [Bundle code into a module & publish it to npm](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
  - Then you can install it and use it anytime you like

### Mobile Menus

Mobile versions of your site are **definitely** going to need their own menu implementation.

- You could reuse existing menu here
- Tons of more inventive options out there
- [Dribble Examples](https://dribbble.com/search/mobile-menu)
- [Inspiration on Marvel](https://marvelapp.com/blog/hamburger-menu-alternatives-mobile-navigation/)

### Image Slider

Create a simple image carousel.

- Arrows on each side of image to advance forward/backward
- Automatically move forward every 5 seconds
- Little navigation circles at bottom to indicate which slide you're on
  - Clickable to advance to that slide

Steps:

1. Setup a very wide `div`, that contains the individual image slides
2. Position that `div` inside a container `div`
   1. A picture frame which determines which image is currently visible
3. Build the next/previous image functionality
   1. Make transitions smooth
4. Setup arrows that activate that functionality
5. Add in navigation dots
   1. Horizontal series of empty circles with CSS
   2. Active image gets filled in
   3. Make each circle link to a particular slide
6. Add a timeout that advances the slide every 5 seconds

## Form Validation w/ JavaScript

Form validation with JS is handled with the Constraint Validation API.

The following DOM interfaces have a set of methods & properties via the Constraint Validation API:

- `HTMLButtonElement`
- `HTMLFieldSetElement`
- `HTMLInputElement`
- `HTMLOutputElement`
- `HTMLSelectElement`
- `HTMLTextAreaElement`

Properties available on the above elements:

- `validationMessage`
- `validity`: returns `ValidityState` object, describing the state of the element:
  - `patternMismatch` true if pattern isn't met
  - `tooLong` true if > `maxlength`
  - `tooShort` true if < `minlength`
  - `rangeOverflow` true if value > `max`
  - `rangeUnderflow` true if less than `min`
  - `typeMismatch` true if value doesn't match `type` = `email` `url` etc.
  - `valid` true if meets all constraints
  - `valueMissing` true if empty & `required` is specified
- `willValidate` true if element will be validated when form is submitted

Properties available on the above elements **and the `form` element**:

- `checkValidity` true if no validity problems
- `reportValidity` reports invalid fields using events
  - useful with `preventDefault()` on `onSubmit` event handler
- `setCustomValidity(message)` add custom message to element

### Customized error message

Automated form validation error message pop-ups are:

- NOT customizable with CSS
- Depend on the browser locale
  - language issues: page displayed in one language, errors in another

Customizing these error messages is **one of the most common** use cases of the constraint validation API.

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
```

`novalidate` attribute on the `form` element turns off the custom error messages.

- Does NOT disable `:valid` pseudo-classes

Example of custom error messages:

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something
  if (email.validity.valid) {
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Set the styling appropriately
  emailError.className = "error active";
}
```

```css
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

# [More examples](https://www.w3schools.com/js/js_validation_api.asp)

## ES6

**Babel** takes modern JavaScript & **transpiles** it to code that older browsers can understand.

It also allows you to use JavaScript features as they're announced and released, often before they're available in _any_ browser!

Adding Babel

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
      },
    },
  ];
}
```

Babel doesn't do anything _out-of-the-box_.

- Babel is built on **presets** & **plugins**
- Babel plugins do all the work
  - Each plugin is it's own NPM library

Arrow function transformation plugin example:

1. Install the plugin

```sh
npm install --save-dev @babel/plugin-transform-arrow-functions
```

2. Tell Babel to use the plugin as a dependency

> .babelrc

```rc
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

## JSON

JavaScript Object Notation is a standardized format for structuring data.

- Heavily based on syntax for JS Objects
- Often encounter JSON formatted data when working with
  - External APIs
- Universal format for transmitting data on the web

JSON exists **as a string**.

- Useful for transferring across a network.
- Needs to be converted to native JS Object when you want to access the data
- JS provides `JSON` global object with methods available for conversion

> Example

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Accessing the data: bracket or dot notation.

```json
superHeroes.homeTown
superHeroes['active']
superHeroes['members'][0]['powers'][2]
```

### Arrays as JSON

JSON text looks like a JavaScrit object inside a string. We can also convert arrays to/from JSON.

```js
[
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
];
```

### JSON Notes

- Purely a string, with specified data format
  - No properties
  - No Methods
- Requires `"double quotes"` around strings & property names
  - Single quotes are invalid, except when surrounding the entire JSON string
- Misplaced comma/colon can break a JSON file
- JSON can be validated using apps (ie: JSONLint)
- JSON can be any data type: arrays, objects, **single string**, **number**
- Only quoted strings can be used as properties

### Requesting JSON from Server

To obtain JSON, we use an API called `Fetch`. Fetch allows us:

- To make network requests
- Retrieve resources from server via JS
  - Images
  - Text
  - JSON
  - HTML Snippets

Meaning we can _update small sections of content_, **without having to reload the entire page**.

Steps taken:

1. Declare `requestURL`
2. Initialize a new `Request` object
3. Make network request using `fetch()` function
   1. Returns a `Response` object
4. Retrieve response as JSON using `Response.json()`

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

`fetch()` API is **asyncronous.**

- `async` is required before the name of the function that uses the fetch API
- `await` is required before the calls to any asychronous functions

### Converting to/from JSON

The built-in `JSON` object contains two methods:

- `parse()` converts JSON string TO JavaScript Object
- `stringify()` converts an object to a JSON string

#### `JSON.parse()`

```js
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
document.getElementById("demo").innerHTML = obj.name;
```

Parsing dates: Date objects are not allowed in JSON. Dates need to be converted back into an object later:

```js
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
```

`JSON.parse(x, reviver)`

The second parameter is called a reviver, or a function that checks each property before returning a value:

```js
// example
JSON.parse(jsonString, function (key, value) {});

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  // reviver function
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

Parsing functions: functions need to be written as a string and converted back to a function later.

```js
const text =
  '{"age":"function () {return 30;}", "name":"John", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
```

#### `JSON.stringify()`

Stringify converts stuff to JSON.

```js
const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);
```

Storing & Retrieving Data w/ `localStorage`:

```js
// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
```

### [Testing JSON](https://jsonformatter.curiousconcept.com/)

## Asynchronous Code

Fetching data from a server to display on your site takes a decent amount of time.

JavaScript includes **asynchronous functions**

- Functions that happen in the background, _while the rest of your code executes_

### Callbacks

In the recent past and even now are used quite a lot in certain circumstances, **callbacks** were most commonly used to handle this.

A **callback function** is a function passed into another function as an argument.

- It is then evoked inside the outer function
- Completes some kind of routine/action

```js
// function is invoked when myDiv is clicked
myDiv.addEventListener("click", function () {
  // do something!
});
```

- Happens all the time in JS

Two core issues with **callbacks**:

- **Callback Hell**

  Using callbacks can get out hand, _especially when chaining several of them together, in a specific order._

  Your brain processes code sequentially. Callbacks do NOT follow this paradigm.

- **Inversion of Control**

  Inversion of control occurs when handing over critical functionality to a third party service.

  You lose trust - uncertain of the outcome.

```js
// implementing async code:
var fs = require("fs");
fs.readFile("movie.mp4", finishedReading);

function finishedReading(error, movieData) {
  if (error) return console.error(error);
  // do something w/ moviedata
}

// OR

var fs = require("fs");

function finishedReading(error, movieData) {
  if (error) return console.error(error);
  // do something with the movieData
}

fs.readFile("movie.mp4", finishedReading);

// OR

var fs = require("fs");

fs.readFile("movie.mp4", function finishedReading(error, movieData) {
  if (error) return console.error(error);
  // do something with the movieData
});
```

### Promises

One way of handling asynchronous code is **promises**.

- Frequently used in libraries & frameworks

A **promise** is an object that might produce a value at some point in the future.

- Addresses inversion of control issue
- We can expect what's going to be returned when it's finished
- Then our code can decide what to do next

Real life example:

- Place an order at restaurant: cheeseburger, $1.47
- Placing order & paying: make request for a value back (cheeseburger)
- Receive Receipt w/ Order # (IOU promise), representing a future cheeseburger
- While waiting, you do other things: text friend, join me for lunch, I'm going to eat a cheeseburger

  - Even though cheeseburger doesn't exist, the placeholder (future value) can used to reason about what to do next

  **Outcomes:** Success or Failure

- Receive cheeseburger, swap future value for the value itself: value-promise > value
- Cashier: "No cheeseburgers are available"
- Everytime I order a cheeseburger, I'll get a cheeseburger or notice that one isn't available, requiring another plan

> Problematic: Unless we tell our code that it takes time to fetch data, it happens instantly

```js
const getData = function () {
  // fetch data from API
  // clean it up
  return data;
};

const myData = getData();
const pieceOfData = myData["whatever"];
```

The above causes trouble. `getData()` will most likely still be fetching when `myData[]` is called, resulting in `undefined`.

We need to tell our code to **wait until the data is done fetching** to continue. Promises solve this issue:

```js
const myData = getData(); // if getData() is refactored to return a promise

myData.then(function (data) {
  const pieceOfData = data["whatever"];
});
```

### Promises, Async & Await

Synchronous is easier to follow & debug.

Asynchronous is generally better for performance & flexibility.

Why "hold up the show" when you can trigger multiple requests at once and handle them when they're ready?

The `new Promise()` constructor should only be used with legacy tasks:

- `XMLHttpRequest`
- `setTimeOut`

```js
var p = new Promise(function(resolve, reject) {
	// Do an async task async task and then...
	if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function(result) {
	/* do something with the result */
}).catch(function() {
	/* error :( */
}).finally(function() {
  /* executes regardless or success for failure */
});
```

Returning a promise means that you can count on a promise coming out of a given function.

```js
var userCache = {};

function getUserDetail(username) {
  // In both cases, cached or not, a promise will be returned

  if (userCache[username]) {
    // Return a promise without the "new" keyword
    return Promise.resolve(userCache[username]);
  }

  // Use the fetch API to get the information
  // fetch returns a promise
  return fetch("users/" + username + ".json")
    .then(function (result) {
      userCache[username] = result;
      return result;
    })
    .catch(function () {
      throw new Error("Could not find user: " + username);
    });
}
```

^ A promise is always returned. Therefore, you can always use the `then` and `catch` methods.

#### Then

All promise instances gets a `then` method:

- Allows you to react to a promise
- First `then` method callback receives the result given to it by the `resolve()` call

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve(10);
  }, 3000);
}).then(function (result) {
  console.log(result);
});

// From the console:
// 10
```

`then` is triggered when the promise is resolved. `then` statements can be chained together.

- Each `then` receives the result from the previous `then`'s return value
- If a promise has already been resolved, but `then` is called again, the callback fires **immediately.**
- If a promise is rejected and you call `then` after the rejection, the callback is never called.

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve(10);
  }, 3000);
})
  .then(function (num) {
    console.log("first then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("second then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("last then: ", num);
  });
```

#### Catch

`catch` callback is called when a promise is rejected:

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    reject("Done!");
  }, 3000);
})
  .then(function (e) {
    console.log("done", e);
  })
  .catch(function (e) {
    console.log("catch: ", e);
  });

// From the console:
// 'catch: Done!'
```

#### Finally

`finally` is _always_ called: rejected or resolved.

```js
new Promise((resolve, reject) => {
  reject("Nope");
})
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("fail");
  })
  .finally((res) => {
    console.log("finally");
  });
```

#### Promise All

`Promise.all` is used when:

- Trigger multiple async interactions
- Only want to respond when **all of them are completed**

`Promise.all` accepts an array of promises and fires one callback once they are resolved:

```js
Promise.all([promise1, promise2])
  .then(function (results) {
    // Both promises resolved
  })
  .catch(function (error) {
    // One or more promises was rejected
  });
```

A perfect way of thinking about `Promise.all` is firing off multiple AJAX (via `fetch`) requests at one time:

```js
var request1 = fetch("/users.json");
var request2 = fetch("/articles.json");

Promise.all([request1, request2]).then(function (results) {
  // Both promises done!
});
```

Combining APIs is possible if they both return promises.

> `fetch` & Battery API

```js
Promise.all([fetch("/users.json"), navigator.getBattery()]).then(function (
  results
) {
  // Both promises done!
});
```

Dealing with rejection is difficult. If any promise is rejected, the `catch` fires for the 1st rejection.

```js
var req1 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve("First!");
  }, 4000);
});
var req2 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    reject("Second!");
  }, 3000);
});
Promise.all([req1, req2])
  .then(function (results) {
    console.log("Then: ", results);
  })
  .catch(function (err) {
    console.log("Catch: ", err);
  });

// From the console:
// Catch: Second!
```

#### Promise Race

`Promise.race` triggers as soon as any promise in the array is resolved OR rejected. A use case could be triggering a request to a primary source and a secondary source, in case either one is unavailable.

```js
var req1 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve("First!");
  }, 8000);
});
var req2 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve("Second!");
  }, 3000);
});
Promise.race([req1, req2])
  .then(function (one) {
    console.log("Then: ", one);
  })
  .catch(function (one, two) {
    console.log("Catch: ", one);
  });

// From the console:
// Then: Second!
```

#### [Promise / Fetch Walkthrough](https://www.youtube.com/watch?v=vQ3MoXnKfuQ)

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeOut(() => {
    resolve("p #1");
  }, 3000);
});

const my2ndPromise = new Promise((resolve, reject) => {
  setTimeOut(() => {
    reject("p #2");
  }, 1500);
});

Promise.all([myPromise, my2ndPromise]).then((data) => {
  console.log(data); // ["p #1", "p #2"]
});

// -------------------------------

// fetch returns a response object
fetch("https://someapi/").then((res) => {
  // .json returns another promise, resolves the data > javascript object
  res.json().then((data) => {
    console.log(data);
  });
  .catch((err) => {
    console.log(err);
  })
});
```

## Event Loop

JS is a single threaded language: Can do one thing at a time

- Heap
- Callstack
- WebAPIs
- Event Loop
- Callback Queue

**Call Stack**: Data structure that records where in the program we are.

`main()`

- Call a function: push something **onto the stack.**
- Return: pop something **off of the stack.**

Stack trace: State of the stack when an error occurs.

Blowing the stack: Infinite loop > ultimately, crashes browser: `Range Error: Maximum Call Stack Exceeded`

Blocking: code that is slow.

**Event Loop**: Can't execute code until the stack is empty.

- `setTimeOut` of 0
  - Hits the WebAPI (waits for 0ms)
  - The callback is then sent to Event Loop
- Event loop waits for stack to clear
  - Defers execution
- Once empty, it gets pushed to the stack
- Executes

## APIs

APIs: **Application Programming Interfaces**

APIs are:

- Mostly accessed by URL
- Specifics of query are determined by the service you're using

```sh
# Weather data based on specific location: London
api.openweathermap.org/data/2.5/weather?q=London
```

[Specifics can be found in OpenWeatherMap's API Documentation](https://openweathermap.org/current)

APIs usually require that you create an account & request an **API Key**.

Every request made to the API will require the API key as another parameter in the URL query:

```sh
# API request w/ API key parameter
https://api.openweathermap.org/data/2.5/weather?q=London&APPID=1111111111
```

**API Keys** allow:

- API service to track abuse of systems/data
- API services to mitigate & recuperate operating costs

Single API requests can cost less than a fraction of a penny. However, if a very popular app is created, used all over the world, you can easily have 1000s of people accessing that data every minute.

Costs could then skyrocket to significant amounts of money for the API service.

Many APIs offer:

- Free tier
  - Limit requests
- Paid tier
  - More frequent requests, more access to info

Because your API key is **your** key, **securing them is important -- especially if you're using a paid tier.**

Bots automatically crawl through GitHub repos solely for hardcoded/unsecured API keys.

- Allowing **bad agents** to access/utilize services/data you've paid for.

### Fetching Data

A few years ago, the main way to access API data was using an `XMLHttpRequest`.

> Still works, but is painful:

```js
// Just getting XHR is a mess!
if (window.XMLHttpRequest) {
  // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE
  try {
    request = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// Open, send.
request.open("GET", "https://url.com/some/url", true);
request.send(null);
```

Developers began writing 3rd party libraries to make it easier: **axios** and **superagent**.

Recently, web browsers began to implement a new _native function_ for making HTTP requests: `fetch`!

> Fetch uses promises!

```js
// URL (required), options (optional)
fetch("https://url.com/some/url")
  .then(function (response) {
    // Successful response :)
  })
  .catch(function (err) {
    // Error :(
  });
```

`fetch` uses `.then()` and `.catch()`, because it uses promises.

### CORS

**CORS**: Cross Origin Resource Sharing

For security reasons & by default, browsers **restrict HTTP requests to outside sources.** This is exactly what we're trying to achieve with APIs.

In order to use `fetch`, you need to supply a JavaScript options object and include `mode: 'cors'`.

```js
fetch("url.url.com/api", {
  mode: "cors",
});
```

CORS protects the internet from evil hackers. For many years, a script from one site could not access the content of another site.

There are two types of cross-origin requests:

1. Safe requests
2. All the others

Safe requests satisfy 2 conditions:

1. Safe method: `GET` `POST` `HEAD`
2. Safe headers:
   - `Accept`
   - `Accept-Language`
   - `Content-Language`
   - `Content-Type`
     - Values: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`

All other request is considered "unsafe". For example: `PUT` method or w/ an `API-Key` HTTP-header does not fit the limitations.

**CORS for safe requests**

- CORS: Mechanism that allows restricted resources on a webpage to be requested from another domain _outside the domain_ from which the first resource was served.
- CORS defines how browser/servers can interact to determine whether it is safe to allow cross-origin requests

### Fetch API Example

Use the GIFFY API to retrieve & display a GIF assignment:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <img src="#" />
    <input type="text" id="searchterm" />
    <button>New Image</button>
    <script>
      const img = document.querySelector("img");
      const btn = document.querySelector("button");
      const searchInput = document.querySelector("input");
      const renderImg = () => {
        let searchTerm = searchInput.value.trim().replace(/\s+/gi, "%20");
        if (!searchTerm) searchTerm = "cat";
        fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=XXXXXXXXXXXX&s=${searchTerm}`,
          { mode: "cors" }
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            const newUrl = response.data.images.original.url;
            if (newUrl === img.src) renderImg();
            else img.src = response.data.images.original.url;
          })
          .catch((e) => {
            console.log(`Error! "${e}"`);
          });
      };
      btn.addEventListener("click", (e) => {
        renderImg();
      });
      renderImg();
    </script>
  </body>
</html>
```

### Free API Lists

1. [Public APIs](https://github.com/n0shake/Public-APIs)
2. [Public APIs](https://github.com/public-apis/public-apis)

## Async & Async Await

Asynchronous code can become difficult to follow when it has a lot of things going on.

`async` and `await`are two keywords that make asynchronous read more like synchronous code.

- Helps code look cleaner, while retaining benefits of async code

> Two examples of getting info from a server & returning a promise:

```js
// Standard promise
function getPersonsInfo(name) {
  return server.getPeople().then((people) => {
    return people.find((person) => {
      return person.name === name;
    });
  });
}

// Appears like synchronous code, using async/await
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find((person) => {
    return person.name === name;
  });
  return person;
}
```

### `async` keyword

`async` keyword lets the JS engine know that you're declaring an asynchronous function.

- Requireds `await` inside the function
- Functions declared w/ `async` **automatically return a promise**
- `Return` within an `async` function is the same as **resolving a promise**.
- Throwing an error will **reject the promise**.

Async functions are just syntactical sugar for promises.

- Can be used with any other ways of creating functions:

```js
const myAsyncFunction = async () => {
  // do something async & return promise
  return results;
};
```

```js
myArray.forEach(async (item) => {
  // do something async for each item in array
});
myArray.map(async (item) => {
  // return array of promises
});
```

```js
server.getPeople().then(async (people) => {
  people.forEach((person) => {
    // do something async for each person
  });
});
```

### `await` Keyword

`await` is pretty simple:

- tells JS to wait for an async action to finish before continuing the function
- "pause until done"

Await is used to get a value from a function where you would normally use `.then()`.

Instead of calling `then()` after the async function:

- Assign a variable to the result using `await`
- Result can be used as if you're writing synchronous code

### Error handling

Handling errors in `async` functions is very easy.

- Promises use the `.catch()` method for handling rejected promises.
- Async functions return a promise, so `.catch()` is used.

```js
asyncFunctionCall().catch((err) => {
  console.log(err);
});
```

Another way of handling errors: the `try/catch` block.

```js
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find((person) => {
      return person.name === name;
    });
    return person;
  } catch (error) {
    // error handle me!
  }
}
```

`try/catch` may look messy, but it's a very easy way to handle errors without using `.catch()` method.

Throwing errors:

```js
async function f() {
  await Promise.reject(new Error("Whoops));
};

// is the same as:

async function f() {
  throw new Error("Whoops!");
}
```

```js
// async try/catch

async function f() {
  try {
    let response = await fetch("no-such-url");
    let user = await response.json();
  } catch (err) {
    // catches errors for both response, response.json()
    alert(err);
  }
}

// .catch() alternative to try/catch
async function f() {
  let response = await fetch("no-such-url");
}

// f() becomes a rejected promise
f().catch(alert); // type error
```

Without a `try/catch` or `.catch()`, errors will be displayed to the console.

### Async Await & Promise

### Converting GIPHY Promises example to Async/Await

> Promises:

```js
const img = document.querySelector("img");
fetch("https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats", {
  mode: "cors",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
```

`await` doesn't work on the **global scope.** It requires an `async` function.

```js
const img = document.querySelector("img");

async function getCats() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
```

From there, the code can be refactored to use `await` instead of `.then()`:

```js
const img = document.querySelector("img");

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();
```

Remember: `async/await` are just **promises**, written in a different way.

### Async/Await Summary

`async` keyword has 2 effects:

- makes a function always return a promise
- allows `await` to be used in it

`await` keyword before a promise makes it wait until the promise settles, then:

- if error, an exception is generated (same as if `throw error` were called)
- otherwise returns the result
- Only use await when one operation is dependent on another
- Promise.all([a, b]) to run those operations concurrently

`async/await`

- Introduced in ES7
- Functions nested inside an async function (subfunctions) will cause issues
  - Parent async function will not wait for subfunctions

```js
let docs = [{}, {}, {}];

// WARNING: this won't work
docs.forEach(async function (doc, i) {
  await db.post(doc);
  console.log(i);
});
// synchronous - outside of async
console.log("main loop done");

// main loop done
// 0
// 1
// 2
```

### Error Catching Higher Order Function

[From Wes Bos' Async Await Video](https://www.youtube.com/watch?v=9YkUCxvaLEk)

```js
// function that handles errors
// params: a function
// return: same function but with a catch
function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (err) {
      console.error(`Oops!`, err);
    });
  };
}

// es6 version:
onst handleError = fn => (...params) => fn(...params).catch(console.error);

// examle use case:
const safeMyFun = handleError(myFun);
safeMyFun();
```

### Async/Await & Loops

`forEach()` `map()` combined with `async` run concurrently & do not wait for a promise.

```js
const fruits = ["peach", "pineapple", "strawberry"];

// when async is used in a 'map' or 'foreach'
// each LOOP is RUN AT THE SAME TIME (concurrently)
const smoothie = fruits.map(async (v) => {
  const emoji = await getFruit(v);
  log(emoji);
  return emoji;
});
```

If you want to await a promise from each loop, you need to use a traditional loop:

```js
const fruitLoop = async () => {
  // wait for the promise to resolve
  // BEFORE next iteration
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

// OR

const fruitLoop = async () => {
  // you can use 'await' within the loop declaration
  for await (const emoji of smoothie) {
    log(emoji);
  }
};

// OR

const fruitInspection = async () => {
  // await within conditionals
  if ((await getFruit("peach")) === "Peach") {
    console.log("Peaches rule.");
  }
};

fruitLoop();
```

## Computer Science

**Algorithm**: Method of solving problems

- Step by step instructions

**Pseudo-code**: English-like way to state an algorithm

- input user for a number
- multiply number by itself & store value in a variable squared
- print squared output

### Recursion

Recursion: A function that calls itself.

- Recursion **step**: when function calls itself
- **Basis** of recursion: function arguments that make the task so simple no further calls are needed.

It is used to take a big problem and break it down into smaller & smaller pieces: **Divide & Conquer**. It continues to feed the solution _back into the original function_, until some sort of answer is achieved and the whole chain unwinds.

**Divide and Conquer Algorithms** (D&C)

- D&C is based on **multi-branched recursion**
- Recursively breaks down a problem into two or more sub-problems of the same/related type, until they become simple enough to be solved directly.
- Sub-problems are combined to give a solution to the original problem

Recursion should be used selectively:

- Any problem that recursion solves can also be done with **iterators** that you know & love
- If you find yourself saying, "Why not use a `while` loop here?", you probably should have
- Some problems break down into **far too many pieces** & totally overwhelm your computer's memory. _There's a balance._

#### Execution Context & Stack

Functions execute and the information about their processes is stored in its **execution context**.

Execution context:

- internal data structure
- contains details about the execution of a function
  - where control flow currently is
  - current variables
  - value of `this`
  - few other internal details

Each function has a single execution control associated with it.

When a function makes a **nested call**:

- current function is paused
- execution context of current function is stored in `execution context stack`
- nested call executes
- old execution context is retrieved from the stack
- outer function is resumed where it stopped

#### Recursive Traversals

```js
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};
```

- Two departments
- Development department is split into subdepartments
  - `sites` & `internals`
- When department grows, it can be further split in subsubdepartments
  - `siteA` and `siteB`

**Goal**: Function that sums ALL of the salaries

Iterative approach to this would **not be easy**, because the structure is not simple and would require nested subloops.

Recursive approach:

- 1. Simple department w/ array of people
  - Sum salaries in simple loop
- 2. An object, with `N` subdepartments
  - Make `N` recursive calls, to get sum for each of the subdeps
  - Combine results

1st case: **Base of recursion** - trivial case

2nd case: Object is the **recursive step**.

```js
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
```

#### Recursive Structures

Recursively defined data structures are data structures that can be defined using itself.

- **Linked Lists**

Example: store an ordered list of objects

```js
let arr = [obj1, obj2, obj3];
```

'Delete element' and 'insert element' operations are **expensive**. `unshift()` has to _renumber_ all elements to make room for a new `obj`. If the array is big, it takes time. Same w/ `shift()`.

Only structural modifications that **do not require mass-renumbering** are those that operate with the _end of th array_: `push` and `pop`.

Alternatively, if fast insertion/deletion is needed, **linked list** is another good choice.

Linked lists is recursively defined as an object with:

- `value`
- `next` property referencing _next linked list_ or `null` (if its the end)

```js
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Alternative code:
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// List can easily be split into multiple parts
let secondList = list.next.next;
list.next.next = null;

// and later joined back:
list.next.next = secondList;
```

To prepend a new value, we need to update the _head of the list_:

```js
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: "new item", next: list };
```

To remove a value from the middle, change `next` to the previous one:

```js
list.next = list.next.next;
```

Unlike arrays, there's **no mass-renumbering** & we can easily rearrange elements.

Lists are not _always_ better than arrays, otherwise no one would use arrays.

Main drawback: **can't** easily access an element by it's number

- ie: `arr[n]` a direct reference
- in a list, you need to start from item #1 and go `next` `N` times to get the Nth element.

Lists can be enhanced:

- `prev` property to go backwards
- `tail` to reference last element in the list
  - update it when adding/removing elements from end

### Data Structures

Data structures: Storing data in a way that meets the needs of your particular application.

- **Giant Array**: Time consuming to locate a specific value, if you had a significantly large number & depth of items

Alternative data structures typically have trade-offs:

- How long it takes to first populate it
- How long it takes to add/find elements
- How large the structure is in memory

Structures & strategies are relevant when:

- trying to search through large batch of data for a single value
- plan out a strategy several moves in advance

Common algorithms:

- Sorting
- Searching\*

When **searching through enormous data sets**, the _quality of your search algorithm_ is incredibly important and milliseconds _count_.

## Testing Basics

Test Driven Development (TDD) is a **big deal** in modern development.

- Start by writing automated tests
- BEFORE writing code that is being tested

Test-Running Systems in JavaScript:

- Mocha
- Jasmine
- Tape
- Jest

> Syntax for all test running systems is very similar.

Benefits:

- Produces clean code that works (goal of TDD)
- Forces us to think through requirements/design before writing functional code
- Keeps you out of the debugger
- Reduces bugs in new/existing features
- Reduces cost of change
- Improves design
- Encourages refactoring
- Builds a safety net to defend against other programmers
- Is Fun
- Speeds up development by eliminating waste
- Reduces fear
- Improves productivity
- Helps devs maintain focus
- Improves communication
- Communicate design decisions
- Loosely-coupled design

**[WHY?](https://www.youtube.com/watch?v=Eu35xM76kKY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr&index=1)**

### Jest

> installation

```js
npm i -D jest
```

```json
// package.json
"scripts": {
  "test": "jest",
  "watch": "jest --watch *.js",
}
```

> tdd syntax with Jest

```js
// somefile.test.js
it("description", () => {
  expect(1).toBe(1); // pass
});

it("ordertotal, single item", () => {
  expect(
    orderTotal({
      items: [{ name: "dragon candy", price: 2, quantity: 3 }],
    }).toBe(6)
  );
});
```

> running jest

```sh
npm run test # single test
npm run watch # continuous feedback loop
```

#### Common Matchers

`.toBe()` uses `Object.is` to test exact equality.

To check the value **of an object**, use `.toEqual()` or `toStrictEqual()` instead.

- `toStrictEqual()` is _preferred_
- `toEqual()` ignores undefined

```js
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

To test the inverse of something, add `.not` to the matcher:

```js
test("add positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

**Truthiness Matchers:**

- `toBeNull`
- `toBeUndefined`
- `toBeDefined`
- `toBeTruthy`
- `toBeFalsy`

**Numbers:**

- `toBeGreaterThan`
- `toBeGreaterThanOrEqual`
- `toBeLessThan`
- `toBeLessThanOrEqual`
- `toBeCloseTo` \* floating point equality
  - ie: `0.1 + 0.2` `.toBeCloseTo(0.3)`-- NOT `.toBe()`

**Strings** Using Regex

- `toMatch(/stop/)`

```js
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
```

**Arrays & Iterables**

- `toContain`

```js
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
```

**Exceptions** Error Throwing

To test if a function will throw an error: `.toThrow`

```js
expect(() => compileAndroidCode()).toThrow();
expect(() => compileAndroidCode()).toThrow(Error);
```

#### Mock Tests

Running lots of tests to API's can become unfeasible: charging credit cards, etc.

Examples: VAT (value added tax) varies based on the country. [VAT API](https://vatapi.com/).

- Change thinking process
-

```js
function orderTotal(fetch, order) {
  fetch();
  return Promise.resolve(
    order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
  );
}

module.exports = orderTotal;
```

```js
//  sandbox.js
const fetch = require("node-fetch");

const result = fetch("vatapi.com/...")
  .then((response) => response.json())
  .then((data) => data.rates.standard.value);
```

> Change tests to expect a promise

```js
const orderTotal = require("./order-total");
const emptyFunction = () => {};

it("calls vatapi.com if country code specified", () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    isFakeFetchCalled = true;
  };
  orderTotal(fakeFetch, {
    country: "DE",
    items: [{ name: "dragon waffles", price: 20, quantity: 2 }],
  }).then((result) => expect(isFakeFetchCalled).toBe(true));
});

it("no qty specified", () =>
  orderTotal(emptyFunction, {
    items: [{ name: "dragon candy", price: 3 }],
  }).then((result) => expect(result).toBe(3)));
```

### More Testing

Another important basic concept is **testing in isolation.** Only one method should be tested at a time and your tests should not depend on an external function behaving correctly --- especially if that function's being tested elsewhere.

Main reason for testing in isolation:

- When tests fail, you want to be able to narrow down the cause of this failure as quickly as possible
- If a test depends on several functions, it can be difficult to tell what exactly is going wrong

### Pure Functions

Tightly coupled code is hard to test.

For example:

```js
function guessingGame() {
  const magicNumber = 22;
  const guess = prompt("guess a number between 1 and 100!");
  if (guess > magicNumber) {
    alert("YOUR GUESS IS TOO BIG");
  } else if (guess < magicNumber) {
    alert("YOUR GUESS IS TOO SMALL");
  } else if (guess == magicNumber) {
    alert("YOU DID IT! 🎉");
  }
}
```

Making this testable requires splitting up **all the different things that are happening.** What we need to test is the number logic, which is much easier to untangle it:

```js
function evaluateGuess(magicNumber, guess) {
  // * Only function that needs to be tested*
  if (guess > magicNumber) {
    return "YOUR GUESS IS TOO BIG";
  } else if (guess < magicNumber) {
    return "YOUR GUESS IS TOO SMALL";
  } else if (guess == magicNumber) {
    return "YOU DID IT! 🎉";
  }
}

function guessingGame() {
  const magicNumber = 22;
  const guess = prompt("guess a number between 1 and 100!");
  const message = evaluateGuess(magicNumber, guess);
  alert(message);
}

guessingGame();
```

This implementation is much nicer:

- Clear input
- Clear output
- Doesn't call any external functions
- Easier to extend

If this was written _with TDD_, it would have looked more like the 2nd example.

**TDD encourages better program architecture** because it encourges us to write **PURE FUNCTIONS.**

### Mocking

Tightly coupled code has two solutions:

1. Best\*: Remove those dependencies, as we did in example 2.
2. **Mocking**: writing fake versions of a function that always behaves exactly how you want.

Mocking example: testing a function that gets info from DOM input. You don't want to have to setup a webpage and dynamically insert something into the input just to run your tests.

With a mock function, we can create a fake version of the input-grabbing that always returns a specific value --- and use THAT in your test.

_Too much mocking_ can be a bad thing. It is _sometimes_ necessary, but if you have to setup an elaborate system of mocks to test any bit of your code, that means **your code is too tightly coupled.**

One thing you should NEVER do: **Share state between tests**.
