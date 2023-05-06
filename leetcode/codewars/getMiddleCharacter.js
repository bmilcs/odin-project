// You are going to be given a word.Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  const middle = (s.length - 1) / 2;
  const isMiddleAWholeNumber = middle % 1 === 0;
  return isMiddleAWholeNumber
    ? s[middle]
    : s[Math.floor(middle)] + s[Math.ceil(middle)];
}
