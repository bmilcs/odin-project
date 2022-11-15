const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }
  return [...arr, ...left, ...right];
};

const mergeSort = (array, lvl = 0) => {
  if (array.length < 2) {
    log(lvl, "* return (base case reeached)", array);
    return array;
  }
  log(lvl, "new", array);

  const mid = array.length / 2;
  const left = array.splice(0, mid);
  const right = array;

  const leftMergeSort = mergeSort(left, lvl + 1);
  log(lvl, `left done on lvl ${lvl}`, leftMergeSort);

  const rightMergeSort = mergeSort(array, lvl + 1);
  log(lvl, `right done on lvl ${lvl}`, rightMergeSort);

  log(
    lvl,
    "merging! left & right sides",
    `${leftMergeSort}] [${rightMergeSort}`
  );
  const sorted = merge(leftMergeSort, rightMergeSort);
  log(lvl, "*** merged (sorted)", sorted);

  return sorted;
};

const log = (level, desc, value) => {
  let space = "";
  for (let i = 0; i < level; i++) {
    space += "----";
  }
  console.log(`${space}${level}:`, `[${value}] ${desc}`);
};

const testArray = [9, 5, 1, 3, 6, 8, 2, 0];

console.log("\nmerge sort");
console.log(`in:\t${testArray}\n`);
console.log(`\nout\t${mergeSort(testArray)}\t`);
