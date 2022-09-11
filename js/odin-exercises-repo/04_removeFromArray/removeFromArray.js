// My First Solution:
// const removeFromArray = function (myArray, ...elementsToRemove) {
//   const args = Array.from(elementsToRemove);

//   // for every number of arguments added
//   for (let i = 0; i < arguments.length - 1; i++) {
//     let argIndex = myArray.indexOf(args[i]); // search through array for argument & find it's index

//     // console.log(args[i] + " is located at " + argIndex);

//     if (argIndex >= 0) myArray.splice(argIndex, 1); // if index isn't negative, it's a valid index. Remove it from array.
//   }
//   return myArray;
// };

// Odin Solution #1 review
// function removeFromArray(...args) {
//   const argsArray = args[0];
//   const newArray = [];

//   argsArray.forEach((element) => {
//     if (!args.includes(element)) {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }

var removeFromArray = function (...args) {
  const array = args[0];
  return array.filter((val) => !args.includes(val));
};

let testArray = removeFromArray([1, 2, 3, 4], 3, 1, 5);
console.log(testArray);

// Do not edit below this line
module.exports = removeFromArray;
