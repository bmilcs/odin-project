// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// best practices
function simpleMultiplication(number) {
  return number * (number % 2 === 0 ? 8 : 9);
}

// mine
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
