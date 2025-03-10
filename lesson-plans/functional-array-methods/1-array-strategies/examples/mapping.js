// #todo

'use strict';

console.log('-- begin --');

// mapping means to convert something to something else
//  using a clearly defined process
// mapping an array means creating a new array with the same number of items
//  each item has been transformed in the same way
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const values = [NaN, 'tree', false, 42, null];

// map using typeof
let _1_types = [];
// for (const value of values) {
//   const type = typeof value;
//   _1_types.push(type);
// }

_1_types = values.map((value) => typeof value);
console.log(_1_types);

// map using boolean coercion and + 'y'
let _2_truthiness = [];
// for (const value of values) {
//   const castToBool = Boolean(value);
//   const truthiness = castToBool + 'y';
//   _2_truthiness.push(truthiness);
// }

_2_truthiness = values.map((value) => Boolean(value) + 'y');
console.log(_2_truthiness);


const _3_strings = ['infinity', '1.4', '1000', 'NaN'];

// map according to if a string is NaNy
let _3_areNaNy = [];
// for (const string of _3_strings) {
//   const isNaNy = isNaN(string);
//   _3_areNaNy.push(isNaNy);
// }

_3_areNaNy = _3_strings.map((item) => isNaN(item));

console.log(_3_areNaNy);

console.log('-- end --');
