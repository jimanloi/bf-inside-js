'use strict';
console.log('-- begin --');

// write the function to pass the assertions
// fill in the documentation to describe the function

/**
 * Rearrange the string which consists of param1, param2 and param3
 * The result will be a string in this order: param2 param3 param1
 * 
 * @param {string} param1 - first character
 * @param {string} param2 - second character
 * @param {string} param3 - third character
 * @returns (string) combined characters
 */

const scramble = (param1, param2, param3) => {
  const result = param2+param3+param1;
  return result
};

const _1_expect = 'zyx';
const _1_actual = scramble('x', 'z', 'y');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'yzx';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'xyz';
const _3_actual = scramble('z', 'x', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');

console.log('-- end --');
