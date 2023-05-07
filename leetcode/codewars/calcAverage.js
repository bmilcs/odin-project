// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  return array.reduce((acc, cur, i) => {
    acc += cur;
    if (i === array.length - 1) {
      return acc / array.length;
    }
    return acc;
  }, 0);
}
