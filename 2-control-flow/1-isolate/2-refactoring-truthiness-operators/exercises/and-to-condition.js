// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 2000;
console.log(a);

let isBigNumber;

if (typeof a === 'number') {
  isBigNumber = a > 1000? true : false;
} else {
    isBigNumber = 'Not a number';
  }

console.log(isBigNumber)

// const isBigNumber = typeof a === 'number' && a > 1000;
// console.log(isBigNumber);

console.log('-- end --');
