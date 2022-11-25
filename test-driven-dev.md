# Test Driven Development

Test Driven Development (TDD) is a **big deal** in modern development.

- Start by writing automated tests
- BEFORE writing code that is being tested

Test-Running Systems in JavaScript:

- Mocha
- Jasmine
- Tape
- Jest

> Syntax for all test running systems is very similar.

Benefits:

- Produces clean code that works (goal of TDD)
- Forces us to think through requirements/design before writing functional code
- Keeps you out of the debugger
- Reduces bugs in new/existing features
- Reduces cost of change
- Improves design
- Encourages refactoring
- Builds a safety net to defend against other programmers
- Is Fun
- Speeds up development by eliminating waste
- Reduces fear
- Improves productivity
- Helps devs maintain focus
- Improves communication
- Communicate design decisions
- Loosely-coupled design

**[WHY?](https://www.youtube.com/watch?v=Eu35xM76kKY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr&index=1)**

## Jest

> installation

```js
npm i -D jest
```

```json
// package.json
"scripts": {
  "test": "jest",
  "watch": "jest --watch *.js",
}
```

> tdd syntax with Jest

```js
// somefile.test.js
it("description", () => {
  expect(1).toBe(1); // pass
});

it("ordertotal, single item", () => {
  expect(
    orderTotal({
      items: [{ name: "dragon candy", price: 2, quantity: 3 }],
    }).toBe(6)
  );
});
```

> running jest

```sh
npm run test # single test
npm run watch # continuous feedback loop
```

### Common Matchers

`.toBe()` uses `Object.is` to test exact equality.

To check the value **of an object**, use `.toEqual()` or `toStrictEqual()` instead.

- `toStrictEqual()` is _preferred_
- `toEqual()` ignores undefined

```js
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

To test the inverse of something, add `.not` to the matcher:

```js
test("add positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

**Truthiness Matchers:**

- `toBeNull`
- `toBeUndefined`
- `toBeDefined`
- `toBeTruthy`
- `toBeFalsy`

**Numbers:**

- `toBeGreaterThan`
- `toBeGreaterThanOrEqual`
- `toBeLessThan`
- `toBeLessThanOrEqual`
- `toBeCloseTo` \* floating point equality
  - ie: `0.1 + 0.2` `.toBeCloseTo(0.3)`-- NOT `.toBe()`

**Strings** Using Regex

- `toMatch(/stop/)`

```js
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
```

**Arrays & Iterables**

- `toContain`

```js
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
```

**Exceptions** Error Throwing

To test if a function will throw an error: `.toThrow`

```js
expect(() => compileAndroidCode()).toThrow();
expect(() => compileAndroidCode()).toThrow(Error);
```

### Mock Tests

Running lots of tests to API's can become unfeasible: charging credit cards, etc.

Examples: VAT (value added tax) varies based on the country. [VAT API](https://vatapi.com/).

- Change thinking process
-

```js
function orderTotal(fetch, order) {
  fetch();
  return Promise.resolve(
    order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
  );
}

module.exports = orderTotal;
```

```js
//  sandbox.js
const fetch = require("node-fetch");

const result = fetch("vatapi.com/...")
  .then((response) => response.json())
  .then((data) => data.rates.standard.value);
```

> Change tests to expect a promise

```js
const orderTotal = require("./order-total");
const emptyFunction = () => {};

it("calls vatapi.com if country code specified", () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    isFakeFetchCalled = true;
  };
  orderTotal(fakeFetch, {
    country: "DE",
    items: [{ name: "dragon waffles", price: 20, quantity: 2 }],
  }).then((result) => expect(isFakeFetchCalled).toBe(true));
});

it("no qty specified", () =>
  orderTotal(emptyFunction, {
    items: [{ name: "dragon candy", price: 3 }],
  }).then((result) => expect(result).toBe(3)));
```

## More Testing

Another important basic concept is **testing in isolation.** Only one method should be tested at a time and your tests should not depend on an external function behaving correctly --- especially if that function's being tested elsewhere.

Main reason for testing in isolation:

- When tests fail, you want to be able to narrow down the cause of this failure as quickly as possible
- If a test depends on several functions, it can be difficult to tell what exactly is going wrong

## Pure Functions

Tightly coupled code is hard to test.

For example:

```js
function guessingGame() {
  const magicNumber = 22;
  const guess = prompt("guess a number between 1 and 100!");
  if (guess > magicNumber) {
    alert("YOUR GUESS IS TOO BIG");
  } else if (guess < magicNumber) {
    alert("YOUR GUESS IS TOO SMALL");
  } else if (guess == magicNumber) {
    alert("YOU DID IT! 🎉");
  }
}
```

Making this testable requires splitting up **all the different things that are happening.** What we need to test is the number logic, which is much easier to untangle it:

```js
function evaluateGuess(magicNumber, guess) {
  // * Only function that needs to be tested*
  if (guess > magicNumber) {
    return "YOUR GUESS IS TOO BIG";
  } else if (guess < magicNumber) {
    return "YOUR GUESS IS TOO SMALL";
  } else if (guess == magicNumber) {
    return "YOU DID IT! 🎉";
  }
}

function guessingGame() {
  const magicNumber = 22;
  const guess = prompt("guess a number between 1 and 100!");
  const message = evaluateGuess(magicNumber, guess);
  alert(message);
}

guessingGame();
```

This implementation is much nicer:

- Clear input
- Clear output
- Doesn't call any external functions
- Easier to extend

If this was written _with TDD_, it would have looked more like the 2nd example.

**TDD encourages better program architecture** because it encourges us to write **PURE FUNCTIONS.**

## Mocking

Tightly coupled code has two solutions:

1. Best\*: Remove those dependencies, as we did in example 2.
2. **Mocking**: writing fake versions of a function that always behaves exactly how you want.

Mocking example: testing a function that gets info from DOM input. You don't want to have to setup a webpage and dynamically insert something into the input just to run your tests.

With a mock function, we can create a fake version of the input-grabbing that always returns a specific value --- and use THAT in your test.

## [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)

_Too much mocking_ can be a bad thing. It is _sometimes_ necessary, but if you have to setup an elaborate system of mocks to test any bit of your code, that means **your code is too tightly coupled.**

One thing you should NEVER do: **Share state between tests**.

Testing is NOT what you should spend most of your time doing.

Test assertions (`.equal`, `.deepEqual`) should be **dead simple** and completely free of magic. WHY?

- Provide quality info about expectations
- Lead to concise test cases
- Easy to read & maintain

Test cases should be written just like a bug report:

1. Describe the feature you're testing in plain English.
2. Provide expected outcome.
3. Compare expectation to the actual value.

When a unit test fails, the _error message_ is your _bug report._

- Your automated test error messages are your bug reports.

Your test descriptions should be clear enough to use as documentation:

```js
import test from "tape";

test("A passing test", (assert) => {
  assert.pass("This test will pass.");
  assert.end();
});

test("Assertions with tape.", (assert) => {
  const expected = "something to test";
  const actual = "sonething to test";

  assert.equal(
    actual,
    expected,
    "Given two mismatched values, .equal() should produce a nice bug report"
  );

  assert.end();
});
```

## [Mocking is a Code Smell](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)

Mocking becomes a requirement when there is coupling between units and unit isolation is needed for testing.

**Tight Coupling**: Rigid, brittle code - more likely to break when changes are needed

**Less Coupling**: Easy to extend & maintain. Testing becomes easier, which is a bonus side effect.

If we're mocking something, there may be a way to reduce coupling and make our code more flexible.

**Coupling**: Degree to which a module, function, class, etc. depends on other units of code. Coupling comes in many forms:

- **Subclass Coupling**: _inheritance_
- **Control Dependencies**: _code that controls its dependencies by telling them what to do_.
  - Passing method names
  - If control API of dependency changes, dependent code breaks.
- **Mutable State Dependencies**: _code that shares a mutable state w/ other code_
  - Can change properties on a shared object
  - If relative timing of mutations change, dependent code can break
- **State Shape Dependencies**: _code that shres data structures with other code & only uses a subset of the structure_
- **Event/message coupling**: _code that communicates w/ units via message passing, events, etc._

**Tight Coupling**:

- **Mutation** vs immutability
- **Side-Effects** vs purity/isolated side-effects
- **Responsibility Overload** vs Do One Thing (DOT)
- **Procedural Instructions** vs describing structure
- **Class Inheritance** vs composition

Imperative/Object-oriented code is more susceptible to tight coupling.

Functional code is less susceptible. Functional code uses **pure functions** as the core unit of composition and are less vulnerable to tight coupling by nature.

**Pure Functions**:

- Given the same input, always return the same output
- Produce no side-effects
- **Immutability**: Don't mutate existing values. They return new ones instead.
- **No Side Effects**: Only thing pure functions do is return a value. It doesn't interfere with the operation of other functions.
- **Do One Thing** (DOT): Avoid responsibility overload, which plague object & class-based code.
- **Structure, not instructions**: Pure functions can be replaced with a lookup table (input/output values).
  - Pure functions describe _the structural relationship between data_ - NOT instructions for the computer to follow
