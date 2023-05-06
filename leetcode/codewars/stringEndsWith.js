// Complete the solution so that it returns true if the first argument(string) passed in
// ends with the 2nd argument(also a string).

// BEST
function solution(str, ending) {
  return str.endsWith(ending);
}

// brute force
function solution(str, ending) {
  if (!ending) return true;

  const strEnding = str
    .split("")
    .splice(ending.length * -1)
    .join("");

  if (ending === strEnding) return true;

  return false;
}
