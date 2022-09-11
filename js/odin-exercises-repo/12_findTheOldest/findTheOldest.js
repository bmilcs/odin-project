const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
    currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  });
};

function getAge(death, birth) {
  if (!death) death = new Date().getFullYear();
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.table(findTheOldest(people));
