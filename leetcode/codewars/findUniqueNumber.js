// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2;
// findUniq([0, 0, 0.55, 0, 0]) === 0.55;

function findUniq(arr) {
  const prevDuplicates = [];
  let isDuplicate;

  for (let x = 0; x < arr.length; x++) {
    const curVal = arr[x];
    if (prevDuplicates.includes(curVal)) continue;

    isDuplicate = false;

    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] === curVal) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) return curVal;

    prevDuplicates.push(curVal);
  }
}
