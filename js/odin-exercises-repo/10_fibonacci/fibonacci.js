const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  let fibArray = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray[num];

  // odin
  // if (count < 0) return "OOPS";
  // if (count === 0) return 0;
  // let a = 0;
  // let b = 1;
  // for (let i = 1; i < count; i++) {
  //   const temp = b;
  //   b = a + b;
  //   a = temp;
  // }
  // return b;
};

// Do not edit below this line
module.exports = fibonacci;
