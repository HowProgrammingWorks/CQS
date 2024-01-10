'use strict';

const adder = (value) => (x) => (x ? void (value += x) : value);

const a1 = adder(2);

console.log(a1(7));
console.log(a1());
console.log(a1(3));
console.log(a1());
console.log(a1(8));
console.log(a1());
