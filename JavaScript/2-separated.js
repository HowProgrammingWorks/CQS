'use strict';

const adder = (initial) => {
  let value = initial;
  return (x) => {
    let result;
    if (x !== undefined) {
      value += x;
      result = value;
    }
    return result;
  };
};

const a1 = adder(2);

console.log(a1(7));
console.log(a1());
console.log(a1(3));
console.log(a1());
console.log(a1(8));
console.log(a1());
