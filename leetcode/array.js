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
