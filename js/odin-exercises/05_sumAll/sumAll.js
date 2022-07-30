const sumAll = function (num1, num2) {
  // declare var to hold final sum
  let finalSum = 0;

  // if num 1 > num2, swap values
  if (num1 > num2) {
    const tempNum = num1;
    num1 = num2;
    num2 = tempNum;
  }

  // if either number is negative or parameters contain non-numbers, return ERROR
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  )
    return "ERROR";

  // loop from num1 to num2
  for (let i = num1; i <= num2; i++) {
    // add each integer to final value
    finalSum += i;
  }
  // return final value
  return finalSum;
};

// Odin solution difference:
// if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
