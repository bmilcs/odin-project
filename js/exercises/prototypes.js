// Prototypal Inheritance Knowledge Check

// Constructor Function
function Person(name, age, favColor) {
  this.name = name;
  this.age = age;
  this.favColor = favColor;
}

// Add prototype function to the Person constructor
Person.prototype.code = function () {
  console.log(this.name, 'says "Let\'s Code!"');
};

// Create a Developer constructor, that inherits the Person Object properties
function Developer(name, age, favColor) {
  // Passing parameters to an inherited object constructor:
  Person.call(this, name, age, favColor);
  this.job = "Developer";
}

// Developer inherits Person properties in addition to its own properties
Developer.prototype = Object.create(Person.prototype);

// Add the 'addFunction' method to the Developer prototype
Developer.prototype.addFunction = function () {
  console.log(this.name, "created a new function!");
};

const bryan = new Developer("Bryan", "35", "Blue");

console.table(bryan);
bryan.code();
bryan.addFunction();
