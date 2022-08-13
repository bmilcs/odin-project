const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  return args.reduce((previous, current) => previous + current, 0);
};

const multiply = function (args) {
  // return args.reduce((previous, current) => previous * current, 1);

  // odin
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) return 1;
  // let num = n;
  // for (i = 1; i < n; i++) num *= i;
  // return num;

  // odin: recursive factorial
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

let array = [1, 2, 3, 4, 5];
let summy = sum(array);
let multy = multiply(array);
console.log(`Array: ${[array]}`);
console.log(`Sum: ${summy}`);
console.log(`Multiply: ${multy}`);
console.log(`Factorial 5: ${factorial(5)}`);
