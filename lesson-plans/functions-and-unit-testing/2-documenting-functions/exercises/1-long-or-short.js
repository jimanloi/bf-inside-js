'use strict';

console.log('-- begin --');

/**
 * To determine if a text length is long or short.
 * If it is shorter than the cutoff, it is short. Otherwise, it is long.
 *
 * @param {string} text - the text to examine
 * @param {number} cutoff - the cutoff number
 * @return {string} 'long' or 'short'
 */

const longOrShort = (text, cutoff) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('qwerty', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
