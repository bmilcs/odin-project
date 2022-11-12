// https://javascript.info/recursion
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function sumToLoop(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n -= 1;
  }
  return sum;
}

function sumToRecursive(n) {
  if (n === 1) return 1;
  return n + sumToRecursive(n - 1);
}

function sumToArithmeticProgression(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumToArithmeticProgression(3));
// console.log(sumToRecursive(3));
// console.log(sumToLoop(3));
// console.log(sumToArithmeticProgression(100));
// console.log(sumToRecursive(100));
// console.log(sumToLoop(100));

// --------------------------------------

// https://www.youtube.com/watch?v=6oDQaB2one8
// webdev simplified

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("hooray!");
}

function countDownRecursive(n) {
  // guard clause
  if (n <= 0) {
    console.log("hooray!");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

// < !--prettier - ignore-- >
// countDownRecursive(3);
//   countDownRecursive(2);
//     countDownRecursive(1);
//       countDownRecursive(0);
//       return
//     return
//   return
// return

// countDownRecursive(3);

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Jacob",
          children: [],
        },
        {
          name: "Joseph",
          children: [],
        },
      ],
    },
  ],
};

function printChildrenRecursive(t) {
  if (t.children.length === 0) return;
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

// printChildrenRecursive(tree);

// https://www.youtube.com/watch?v=mz6tAJMVmfM
// cs50 shorts: recursion

// n! factoral function: defined over all positive integers
// n! = all positive integers less than or equal to n
//      multiplied together

// base case
// fact(1) = 1

// fact(3) = 3 * 2 * 1
// fact(4) = 4 * 3 * 2 * 1

function fact(n) {
  if (n === 1) return 1; // base case
  return n * fact(n - 1); // recursive case
}

function factIteration(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}
// console.log(fact(3));
// console.log(factIteration(3));

// fibonaci
//  1: 0
//  2: 1
//  3: 0 + 1 (2)
//  4: 1 + 2 (3)
//  5: 2 + 3 (5)

// Collatz conjecture:
// - positive integers
// - always possible to get 'back to 1' if:
//    - n = 1: stop
//    - n = even: repeat process on n/2
//    - n = odd:   repeat process on 3n+1

function collatz(n, sum = 0) {
  if (n === 1) return sum;
  if (n % 2 === 0) return collatz(n / 2, ++sum);
  else return collatz(3 * n + 1, ++sum);
}

function printCollatz(n) {
  console.log(`collatz ${n} = ${collatz(n)}`);
}

// printCollatz(5);
// printCollatz(12);

function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

// console.log(sumRange(5));

// 2,3 = 8
// 2,2 = 4
// 2,1 = 2
// 2,0 = 1

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// 2,3

// console.log(power(2, 4));
// console.log(power(2, 3));

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5));

function all(array, callback) {
  // return array.some(callback);
  let copy = array.slice();

  if (array.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove 1st element
    return all(copy, callback);
  } else return false;
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 10;
});

// console.log(allAreLessThanSeven);

// function productOfArray(array, product = 1) {
//   if (array.length === 0) return product;
//   return productOfArray(array, product * array.pop());
// }

function productOfArray(array) {
  if (array.length === 0) return 1;
  return array.shift() * productOfArray(array);
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

// console.log(six);
// console.log(sixty);

//-----------------------------------
// search js object
//  if it contains a value, return true

function contains(obj, value) {
  // loop through all keys
  for (const key in obj) {
    if (typeof objKey === "object") {
      return contains(objKey, value);
    }

    if (obj[key] === value) return true;
    return false;
  }
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// console.log(contains(nestedObject));

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

// ----------------------------------
// parse multi-dimensional array
// ----------------------------------

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
// console.log(seven);

// ----------------------------------
// Sums squares of umbers in list, which may contain more lists
// ----------------------------------

function SumSquares(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  let first = arr.shift();

  if (Array.isArray(first)) {
    total += SumSquares(first);
  } else if (Number.isInteger(first)) {
    total += first * first;
  }

  return total + SumSquares(arr);
}

var l = [1, 2, 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

//
// return array containing reptitions of the number arg
// replicate(3,5) = 5,5,5
// negative = return empty array
//

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []

function replicate(reps, num) {
  if (reps <= 0) return [];
  return [num].concat(replicate(reps - 1, num));
}
