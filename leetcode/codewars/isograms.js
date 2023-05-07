// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// best practices * brilliant
function isIsogram(str) {
  return new Set(str.toUpperCase()).size === str.length;
}

// my approach
function isIsogram(str) {
  const prevLetters = [];
  const strArray = str.toLowerCase().split("");

  for (let x = 0; x < str.length; x++) {
    if (prevLetters.includes(strArray[x])) {
      return false;
    }

    prevLetters.push(strArray[x]);
  }

  return true;
}
