# JavaScript Cheat Sheet

## Strings & Arrays

string`.split("")` converts string > array

array`.reverse()` reverses order of array

array`.join("")` converts array to string

```js
// Reversing Letters in a String: Convert to an array!
const reverseString = function (string) {
  return string.split("").reverse().join("");
  // .split  = converts string to an array
  // .reverse = reverses the order of the array
  // .join = converts array to string
};
```

### `.map()`

- takes an array and returns a new array of same length
- always returns same # of items
- factory machine: takes raw material, stamp it, kick out item on other end

```js

```

## Functions: Optional Arguments

`...argVariable` causes all remaining arguments to be placed inside an **FAKE array**.

**IMPORTANT:** If you want to use array methods, convert `...extraArgs` to a **REAL ARRAY**:

```js
const removeFromArray = function (myArray, ...extraArgs) {
  const args = Array.from(extraArgs);
  // ...
};
```

## Is variable a number?

```js
if (typeof num1 !== "number"); // not a number
if (!Number.isInteger(number)); // not an integer
```

## Rounding w/o trailing `.0`

```js
function roundNumber(number, decimalPlaces) {
  const x = Math.pow(10, decimalPlaces);
  return Math.round(number * x) / x;
}
```

## Scope & Closure

```js
// global scope
let a = 1;

// function / child scope
function functionScope() {
  // create a new var "a" within child scope
  // * doesn't affect globally scoped "a"
  // var a = 2;

  // "a" is not defined within function scope
  // * scope chain: "a" looks to the parent scope
  //   and changes its value to 3
  a = 3;

  let closureVar = "* this is a private variable! closure is awesome! *";

  function closurePrint() {
    console.log(closureVar);
  }

  return {
    closurePrint,
  };
}

let x = functionScope();
x.closurePrint(); // * this is a private variable! closure is awesome! *
x.closureVar; // ERROR: undefined * due to closure!

a; // 3 -- due to scope chain
```

## Factory Functions

Factories:

- Used over and over
- Create multiple objects

```js
// factory function: constructor without "new" keyword
// sets up & returns object.
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const joe = Person("Joe");
joe.sayName(); // my name is Joe

// factory function object inheritance

const Nerd = (name) => {
  // inheritance - destructuring assignment syntax!
  const { sayName } = Person(name);

  const doSomethingNerdy = () => console.log("nerd stuff");

  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName(); // my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
```

## Module Pattern

Modules are like Factory Functions, but wrapped in an `IIFE`.

- **NOT** used over & over to create multiple objects
- **Immediately invoked** / Doesn't require assignment to a variable
- `IIFE` = **Privacy**

```js
var myModule = (function () {
  "use strict";

  var _privateProperty = "Hello World";

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function () {
      _privateMethod();
    },
  };
})();

console.log(myModule._privateProperty); // undefined: protected by module closure
myModule._privateMethod(); // TypeError: protected by module closure
myModule.publicMethod(); // 'Hello World'
```

### Revealing Module Pattern:

- Return statement: object literal that _reveals_ publicly available methods/properties

```js
var myModule = (function () {
  "use strict";

  var _privateProperty = "Hello World";
  var publicProperty = "I am a public property";

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty,
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure
```

Example with HTML elements:

```js
const Formatter = (function () {
  const writeToDOM = (selector, message) => {
    document.querySelector(selector).innerHTML = message;
  };
  return {
    writeToDOM,
  };
})();

Formatter.writeToDOM("#target", "Hi there");
```
