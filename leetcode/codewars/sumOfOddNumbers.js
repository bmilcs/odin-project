// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 --> 1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27
// 4 --> 13 + 15 + 17 + 19 = 64

// elegant
function rowSumOddNumbersSimple(n) {
  return Math.pow(n, 3);
}

// brute force haha
function rowSumOddNumbers(n) {
  let val = 1;
  let row = 1;
  let rowTotal;

  if (n === 1) return 1;

  while (row < n) {
    row++;
    rowTotal = 0;

    for (let i = 0; i < row; i++) {
      val += 2;
      rowTotal += val;
    }
  }

  return rowTotal;
}
