// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// elegant
const summationElegant = (n) => (n * (n + 1)) / 2;

// brute force
var summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};
