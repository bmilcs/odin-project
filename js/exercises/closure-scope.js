// global scope
let a = 1;
console.log("global scope:", { a });

// function / child scope
function functionScope() {
  // create a new var "a" within child scope
  // * doesn't affect globally scoped "a"
  // var a = 2;

  // "a" is not defined within function scope
  // * scope chain: "a" looks to the parent scope
  //   and changes its value to 3
  a = 3;
  console.log("function scope:", { a });

  let closureVar = "* this is a private variable! closure is awesome! *";

  function closurePrint() {
    console.log(closureVar);
  }

  return {
    closurePrint,
  };
}

let x = functionScope();

console.log("global access via .closurePrint() method:");
x.closurePrint(); // * this is a private variable! closure is awesome! *

console.log(
  "global access to closureVar?\n",
  x.closureVar, // undefined!
  "\n^ CLOSURE = Private Variables & Stuff"
);

console.log("global:", { a }); // a: 3
