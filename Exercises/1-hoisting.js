'use strict';

const fn = (a, b, c) => {
  // console.log(d);   var allows hoisting (bubbling in functional context)!
  // ...
  const d = (a + b + c) / 3;
  return d ** 3;
};

module.exports = { fn };
