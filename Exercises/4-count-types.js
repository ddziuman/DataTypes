'use strict';


const array = [
  1, 2, 0x16d, 0n, -0n,
  -Infinity, NaN, { hello: 'hi!' }, () => 1,
  function decl(a, b) { return a + b; }, undefined,
  undefined, Symbol('what is you?'), -34n, 0.001e50,
];

const countTypesInArray = (array) => {
  const counter = {};
  for (const item of array) {
    const type = typeof item;
    counter[type] = type in counter ? ++counter[type] : 1;
  }
  return counter;
};

console.dir(countTypesInArray(array));

module.exports = { countTypesInArray };
