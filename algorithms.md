# Algorithm Cheatsheet

1. Merge Sort

## Merge Sort

Worst-case: `O (n log n)`

1. Split a list into ~2 halves
2. Continue dividing subarrays until left with single element arrays `[2]` `[5]`
3. Merge subarrays in a sorted order, starting with single element arrays
4. Merge the rest of the subarrays by their 1st index

![Merge Sort](./img/algo-mergesort.jpg)

```js
const merge = (left, right) => {
  let arr = [];

  // while both left/right have elements left, add them
  // in sorted order to `arr`
  while (left.length && right.length) {
    left[0] < right[0]
      ? arr.push(left.shift()) // shift: return 1st element & rm it from orig. array
      : arr.push(right.shift());
  }
  // return sorted array & any leftover elements
  // at this point, any leftover elements are already sorted & larger than the last element in 'arr'
  return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
  // base case: single element arrays
  if (array.length < 2) return array;

  // find middle element
  const mid = array.length / 2;

  // remove left side of array
  // leaving right side in 'array' variable
  const left = array.splice(0, mid);

  // magic:
  return merge(mergeSort(left), mergeSort(array));
};
```
