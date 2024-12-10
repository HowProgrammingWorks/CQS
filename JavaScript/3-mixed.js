'use strict';

class Adder {
  constructor(x) {
    this.value = x;
  }

  add(x) {
    this.value += x;
    return this.value;
  }
}

const a1 = new Adder(2);

console.log(a1.add(7));
console.log(a1.add(3));
console.log(a1.add(8));
