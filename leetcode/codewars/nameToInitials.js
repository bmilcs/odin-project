// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// best practices
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// mine
function abbrevName(name) {
  return name
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join(".");
}
