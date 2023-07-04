'use strict';

console.dir({ hoisted }); // { hoisted: undefined }
hoisted = 5; // Assign 5 to hoisted
console.dir({ hoisted }); // { hoisted: 5 }
var hoisted; // Declare hoisted

let scalarVariable = 6;
const scalarConstant = 7;
const o = { scalarVariable, scalarConstant };
console.dir(o);

o.scalarVariable = 8;
scalarVariable = 9;
// scalar values are copying, not referencing the same value!

console.dir(o);
