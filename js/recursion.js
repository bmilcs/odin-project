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

countDownRecursive(3);

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
