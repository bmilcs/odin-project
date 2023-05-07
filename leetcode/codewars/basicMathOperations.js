// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// best practices
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

// mine: ternary operator
function basicOp(operation, value1, value2) {
  return operation === "*"
    ? value1 * value2
    : operation === "/"
    ? value1 / value2
    : operation === "+"
    ? value1 + value2
    : operation === "-"
    ? value1 - value2
    : 0;
}
