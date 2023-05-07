/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // Input: s = "PAYPALISHIRING", numRows = 3
  // Output: "PAHNAPLSIIGYIR"

  if (numRows === 1) {
    return s;
  }

  const arr = [];

  for (let x = 0; x < numRows; x++) {
    arr.push([]);
  }

  let row = 0;
  let direction;

  for (let x = 0; x < s.length; x++) {
    if (row === 0) {
      direction = "down";
    } else if (row === numRows - 1) {
      direction = "up";
    }

    arr[row].push(s[x]);

    if (direction === "up") {
      row--;
    } else if (direction === "down") {
      row++;
    }
  }

  return arr.map((subArr) => subArr.join("")).join("");
};
