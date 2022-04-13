"use strict";
/**
 * You are given 2 numbers L and R
 * you have to find if XOR of all the numbers in the range L-R(both inclusive) is odd
 */

function isXOROddOrEven(L, R) {
  const numOfOdds = countNumberOfOddsInRange(L, R);
  return numOfOdds % 2 === 0 ? "Even" : "Odd";
}

function countNumberOfOddsInRange(L, R) {
  let numOfOdds = (R - L) / 2;
  return R % 2 === 1 || L % 2 === 1 ? numOfOdds + 1 : numOfOdds;
}

module.exports = { isXOROddOrEven, countNumberOfOddsInRange };

const fs = require("fs");

// read from stdin(0)
console.log("Enter the input and exit using CTRL+D");
const [T, ...rest] = fs.readFileSync(0).toString().split(/\s/g).filter(Boolean);

for (let i = 0; i < T * 2; i += 2) {
  console.log(isXOROddOrEven(rest[i], rest[i + 1]));
}
