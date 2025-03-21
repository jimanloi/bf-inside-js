// #todo

import { fileToVariable } from './file-to-variable.js'
/*
 * @example
 * fileToVariable('file-to-variable.js');
 * // -> 'fileToVariable'
 *
 * @example
 * fileToVariable('do-magic.js');
 * // -> 'doMagic'
 */

describe('Converts a kebab-case file name from to camel-case variable name', () => {
  it('converts file name with 3 words', () => {
    const expected = 'fileToVariable';
    const actual = fileToVariable('file-to-variable.js');
    expect(actual).toBe(expected);
  });
  it('converts file name with 2 words', () => {
    const expected = 'doMagic';
    const actual = fileToVariable('do-magic.js');
    expect(actual).toBe(expected);
  })
});

