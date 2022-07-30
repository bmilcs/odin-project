const repeatString = function (string, repeats) {
  let finalString = "";
  if (repeats < 0) return "ERROR";

  for (let i = 0; i < repeats; i++) finalString = finalString + string;
  return finalString;
};

console.log(repeatString("hey", -1));

// Do not edit below this line
module.exports = repeatString;
