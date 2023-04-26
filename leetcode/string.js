//
// reverse string
// ["b", "r", "y", "a", "n"];
// [ 'n', 'a', 'y', 'r', 'b' ]

var reverseString = function (s) {
  // return s.reverse();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    left++;
    right--;
  }
};

// reverse integer
// Input: x = -123;
// Output: -321;
// Input: x = 120;
// Output: 21;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const num = x.toString().split("");

  const negativeSign = num[0] === "-" ? num.shift() : [];

  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    const temp = num[right];
    num[right] = num[left];
    num[left] = temp;
    left++;
    right--;
  }

  if (negativeSign.length > 0) num.unshift(negativeSign);

  const ans = Number(num.join(""));

  if (Math.abs(ans) > 2147483648) return 0;
  return ans;
};

//
// first unique character
//

var firstUniqChar = function (s) {
  const str = s.split("");
  let idx = -1;

  for (let x = 0; x < str.length; x++) {
    let letter = str[x];
    let count = 0;

    for (let y = 0; y < str.length; y++) {
      if (str[y] === letter) count++;
      if (count > 1) break;
    }

    if (count === 1) return x;
  }

  return idx;
};

//
// is anagram
//

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // (s = "anagram"), (t = "nagaram");
  // true
  // (s = "rat"), (t = "car");
  //  false

  const sArr = s.split("");
  const tArr = t.split("");

  if (sArr.length !== tArr.length) return false;

  for (let x = 0; x < tArr.length; x++) {
    const letter = tArr[x];
    let isFound = false;

    for (let y = 0; y < sArr.length; y++) {
      if (sArr[y] === letter) {
        sArr.splice(y, 1);
        isFound = true;
        break;
      }
    }

    if (!isFound) return false;
  }

  return true;
};

//
// is a palindrome
//

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const str = s.split("");
  const regex = /^[a-z0-9]+$/i;
  const filteredStr = str
    .filter((letter) => letter.match(regex))
    .map((letter) => letter.toLowerCase());
  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) return false;
    left++;
    right--;
  }

  return true;
};

//
//   String to Integer (atoi)
//

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const str = s.toString();
  let ans = "";
  let sign = "";

  for (let x = 0; x < s.length; x++) {
    const isANumber = str[x].match(/[0-9]/i);
    const isWhiteSpace = str[x].match(/\s/i);
    const isPlusOrMinus = str[x] === "-" || str[x] === "+";
    const isNumberComplete = ans && !isANumber;
    const lastIndexIsPlusOrMinus = str[x - 1] === "-" || str[x - 1] === "+";

    if (isNumberComplete) break;

    if (isPlusOrMinus) {
      const signAlreadyAssigned = sign;
      if (signAlreadyAssigned) return 0;

      sign = str[x];
      continue;
    }

    if (lastIndexIsPlusOrMinus && !isANumber) break;

    if (isWhiteSpace) continue;

    if (!isANumber) break;

    ans = `${ans}${str[x]}`;
  }

  if (!ans) return 0;

  if (sign === "-") ans = `-${ans}`;

  if (+ans >= 2147483648) return 2147483647;
  else if (+ans < -2147483648) return -2147483648;

  return +ans;
};

//
// implement strStr()
//

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  haystack = haystack.split("");
  needle = needle.split("");

  let needleIdx = 0;
  let ans = -1;

  for (let x = 0; x < haystack.length; x++) {
    const areLettersMatching = haystack[x] === needle[needleIdx];

    if (!areLettersMatching) {
      const idxAfterFirstNeedleMatch = x - needleIdx;
      x = idxAfterFirstNeedleMatch;
      needleIdx = 0;
      continue;
    }

    const isFullMatch = needleIdx === needle.length - 1;

    if (isFullMatch) {
      ans = x - needle.length + 1;
      break;
    }

    needleIdx++;
  }

  return ans;
};

//
// longest common prefix
//

// Input: strs = ["flower", "flow", "flight"];
// Output: "fl";

// Input: strs = ["dog", "racecar", "car"];
// Output: "";

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.map((str) => str.split(""));
  let ans = "";

  for (let x = 0; x < strs[0].length; x++) {
    const letterToCompare = strs[0][x];

    const allLettersAreSame = strs.every((letter) => {
      return letter[x] === letterToCompare;
    });

    if (!allLettersAreSame) break;

    ans = `${ans}${letterToCompare}`;
  }

  return ans;
};
