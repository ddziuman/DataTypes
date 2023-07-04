'use strict';

const inc = (n) => ++n;

const a = 5; // scalar -> !
const b = inc(a); // by value
console.dir({ a, b });

module.exports = { inc };
