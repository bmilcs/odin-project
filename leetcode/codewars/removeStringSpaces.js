// Write a function that removes the spaces from the string, then return the resultant string.

// best
function noSpaceBest(x) {
  return x.replace(/\s/g, "");
}

// brute force
function noSpace(x) {
  return x
    .split("")
    .filter((char) => !char.match(/\W/))
    .join("");
}
