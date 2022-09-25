//
// Factory method that returns an object
//

const ballFactory = (type, color) => {
  const ballType = type;
  const ballColor = color;

  const _getBallColor = () => {
    console.log(`And it is ${ballColor} in color!`);
  };

  const throwBall = () => {
    console.log(`A ${ballType} is thrown in the air.`);
    _getBallColor();
  };

  // only returning throwBall
  return { throwBall };
};

const basketball = ballFactory("basketball", "orange");

basketball.throwBall();

// Closure success:
console.log(
  "ballColor & ballType (global scope access):\n",
  basketball.ballColor, // undefined
  basketball.ballType // undefined
);

//
// Use inheritance in objects w/ factory pattern
//

const Person = (name) => {
  const _getFavColor = () => {
    // private function
    console.log("access denied... or at least it should be!");
  };
  const sayHello = () => {
    console.log(`Hey! My name is ${name}.`);
  };
  return {
    sayHello,
  };
};

const Doctor = (name, salary) => {
  // destructuring assignment syntax
  // pulls "sayHello" function out of Person() factory
  const { sayHello } = Person(name); // accessible via Doctor

  // private function, only available within function scope
  const _getSalary = () => {
    console.log(`${name}'s salary: ${salary}`);
  };

  const getProfession = () => {
    console.log(`My profession is doctor.`);
  };

  return {
    // _getSalary not returned: Closure, private method & variable
    sayHello,
    getProfession,
  };
};

const joe = Doctor("Joseph", "$150,000");

joe.sayHello();
joe.getProfession();
console.log("Admin._getFavColor: ", joe._getFavColor, "* Closure success!");
console.log("Admin.salary var:", joe.salary);
console.log("Admin._getSalary: ");
joe._getSalary(); // ERROR: not a function! -- private due to closure
