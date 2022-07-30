// const ftoc = function (fTemp) {
//   let cTemp = ((fTemp - 32) * (5 / 9)).toFixed(1);
//   return +cTemp;
// };

// const ctof = function (cTemp) {
//   let fTemp = (cTemp * (9 / 5) + 32).toFixed(1);
//   return +fTemp;
// };

// odin solution
const ftoc = function (f) {
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (c) {
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
