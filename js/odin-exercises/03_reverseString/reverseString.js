const reverseString = function (string) {
  // create reversedString variable
  let reversedString = "";

  // loop the string's length
  for (let i = 0; i < string.length; i++) {
    // grab the substr of current index and add it to reversedString
    reversedString = reversedString + string.substr(-i - 1, 1);
  }
  // return final result
  return reversedString;
};

// ODIN'S SOLUTION
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
