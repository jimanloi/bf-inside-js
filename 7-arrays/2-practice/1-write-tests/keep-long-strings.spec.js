// #todo

import { keepLongStrings } from './keep-long-strings.js';

console.assert(
  JSON.stringify(keepLongStrings(['apple', 'banana', 'kiwi'], 4)) ===
    JSON.stringify(['apple', 'banana']),
  'Test',
);

describe('Keep strings longer than a given number', () => {
  describe('keep strings longer than 3', () => {
    it('array with 5 items', () => {
      const arr1 = ['1111', '222', '3333', '444', '555'];
      const arr2 = keepLongStrings(arr1, 3);
      expect(arr2).toEqual(['1111', '3333']);
    });
    it('array with some empty string', () => {
      const arr1 = ['', 'hello', 'bye', ''];
      const arr2 = keepLongStrings(arr1, 3);
      expect(arr2).toEqual(['hello']);
    });
  });
});
