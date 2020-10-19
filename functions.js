/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */
function greet(name) {
  console.log(`Hello ${name}`);
  // if (name === "Mshary") console.log(`My first IOD ${name}`);
  // else if (name === "Lailz") console.log(`My second IOD ${name}`);
  // else if (name === "Hasan") console.log(`My third IOD ${name}`);
}

// greet("Lailz");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 === 1) return true;
  return false;
}

// let numberTester = isOdd(5);
// console.log(numberTester);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if (n % 2 === 1) return n / 2 - 0.5;
  return n / 2;
}

// Tester call: console.log(15 / 2 - 0.5);
// let numberTesterRound2 = oddsSmallerThan(8);
// console.log(numberTesterRound2);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * n;
  }
  // Math.pow(n, 2)
}

// let numberTesterRound3 = squareOrDouble(7);
// console.log(numberTesterRound3);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
