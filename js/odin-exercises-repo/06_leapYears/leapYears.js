const leapYears = function (year) {
  // leap years are divisible by 4
  if (year % 4 === 0) {
    // years divisible by 100 are NOT leap years UNLESS divisible by 400
    if (year % 100 === 0 && year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else return true;
  } else return false;
};

// Odin solution
// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

console.log(leapYears(2000)); // is a leap year: returns true
console.log(leapYears(1985)); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
