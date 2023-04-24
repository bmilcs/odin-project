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
