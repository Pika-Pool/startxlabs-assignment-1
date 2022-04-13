"use strict";
/**
 * Sort the given T strings according to their first character
 */

function sortStringsByFirstChar(strArr) {
  return strArr.sort((str1, str2) => str1[0].localeCompare(str2[0]));
}

module.exports = { sortStringsByFirstChar };

const fs = require("fs");

// read from stdin(0)
console.log("Enter the input and exit using CTRL+D");
const [T, ...rest] = fs
  .readFileSync(0)
  .toString()
  .split(/[\n\r]/g)
  .filter(Boolean);

const result = sortStringsByFirstChar(rest);
result.forEach((str) => console.log(str));
