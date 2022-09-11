const palindromes = function (str) {
  // str = Array.from(str.toLowerCase().replace(/[^a-z]/g, ""));
  // for (i = 0; i < str.length / 2; i++) {
  //   let a = str[i];
  //   let b = str[str.length - i - 1];
  //   if (a != b) {
  //     return false;
  //   }
  // }
  // return true;

  str = str.toLowerCase().replace(/[^a-z]/g, "");

  // odin
  if (str.split("").reverse().join("") == str) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;

console.log(`racecar \n- ${palindromes("racecar")}`);
console.log(`racecar! \n- ${palindromes("racecar!")}`);
console.log(
  `A car, a man, a maraca. \n- ${palindromes("A car, a man, a maraca.")}`
);
console.log(
  `Animal loots foliated detail of stool lamina. \n- ${palindromes(
    "Animal loots foliated detail of stool lamina."
  )}`
);
console.log(
  `ZZZZ car, a man, a maracaz. ${palindromes("ZZZZ car, a man, a maracaz.")}`
);

// racecar!
// A car, a man, a maraca.
// Animal loots foliated detail of stool lamina.
// FALSE: ZZZZ car, a man, a maracaz.
