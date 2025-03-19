/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {number} [num=1] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', num = 1) => {
  if (typeof text === 'string' && num >= 0) {
    let repeated = '';
    for (let char of text) {
      for (let i = 1; i <= num ; i++) {
        repeated += char;
      }
    }
    return repeated
  } else {
    throw new Error('Invalid input');
  };
};
