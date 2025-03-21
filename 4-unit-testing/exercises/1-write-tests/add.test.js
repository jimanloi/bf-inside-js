// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */

const sum = (x = 0, y = 0) => {
  return x + y;
};

describe('Add two numbers', () => {
  describe('Add two positive numbers', () => {
    it('add 2 and 3', () => {
      const expected = 5;
      const actual = sum(2, 3);
      expect(expected).toEqual(actual);
    });
    // ...
  });
  describe('Add two negative numbers', () => {
    it('add -1 and -1 together', () => {
      const expected = -2;
      const actual = sum(-1, -1);
      expect(expected).toEqual(actual);
    });
    // ...
  });
  // ...
});
