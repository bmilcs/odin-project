# JavaScript Cheat Sheet

## Arrays

```js
// Reversing Letters in a String: Convert to an array!
const reverseString = function (string) {
  return string.split("").reverse().join("");
  // .split  = converts string to an array
  // .reverse = reverses the order of the array
  // .join = converts array to string
};
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
if (typeof num1 !== "number");  // not a number
if (!Number.isInteger(number);  // not an integer
```

## Rounding w/o trailing `.0`

```js
function roundNumber(number, decimalPlaces) {
  const x = Math.pow(10, decimalPlaces);
  return Math.round(number * x) / x;
}
```
