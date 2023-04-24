// rotate an array of numbers k times
// [1,2,3], 2 => [2,3,1]

const rotate = function (nums, k) {
  for (let x = 0; x < k; x++) {
    const x = nums.pop();
    nums.unshift(x);
  }
};

//
// contains a duplicate
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] === nums[y]) return true;
    }
  }
  return false;
};

//
// single number
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let x = 0; x < nums.length; x++) {
    const dupes = nums.filter((num) => num === nums[x]);
    if (dupes.length === 1) return nums[x];
  }
};

// return an array of intersection
// nums1 = [1,2,2,1]
// nums2 = [2,2]
// = [2,2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const answer = [];
  const nums1ids = [];
  const nums2ids = [];
  for (let x = 0; x < nums1.length; x++) {
    for (let y = 0; y < nums2.length; y++) {
      if (
        nums1[x] === nums2[y] &&
        !nums1ids.includes(x) &&
        !nums2ids.includes(y)
      ) {
        answer.push(nums1[x]);
        nums1ids.push(x);
        nums2ids.push(y);
      }
    }
  }
  return answer;
};

//
// plus 1
//

// Input: digits = [1, 2, 3];
// Output: [1, 2, 4];

// Input: digits = [9];
// Output: [1, 0];

var plusOne = function (digits) {
  const num = [...digits];

  // always add 1
  num[num.length - 1] += 1;

  // keep track of what column we're in
  let place = num.length - 1;

  while (true) {
    // current column < 10
    if (num[place] < 10) break;

    // if at the first index
    if (place === 0) {
      num[place] = 0;
      num.unshift(1);
      break;
    }

    // current place has to be 10: set to zero & add 1 to previous index
    num[place] = 0;
    num[place - 1] = num[place - 1] + 1;

    place -= 1;
  }

  return num;
};

//
// Move Zeroes
//

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

var moveZeroes = function (nums) {
  const maxIndex = nums.length - 1;

  for (let x = 0; x < nums.length; x++) {
    if (x === maxIndex) continue;
    if (nums[x] !== 0) continue;

    // current index is zero
    // find next non-zero index

    let nextIdx = x + 1;

    while (true) {
      if (nums[nextIdx] !== 0) break;
      if (nextIdx === maxIndex) break;
      nextIdx += 1;
    }

    // swap current index (0) with next non-zero index
    nums[x] = nums[nextIdx];
    nums[nextIdx] = 0;
  }
};

//
// Two Sum
//

// Return an array of indexes that add up to our target number

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Input: (nums = [2, 7, 11, 15]), (target = 9);
  // Output: [0, 1];

  // Input: (nums = [3, 2, 4]), (target = 6);
  // Output: [1, 2];

  const solution = [];

  for (let x = 0; x < nums.length; x++) {
    // [2, 7, 11, 15];
    const max = nums.length - 1;
    let next = x + 1;

    for (let y = next; y < max + 1; y++) {
      if (nums[x] + nums[y] !== target) continue;
      solution.push(x);
      solution.push(y);
      break;
    }

    if (solution.length > 1) break;
  }

  return solution;
};
