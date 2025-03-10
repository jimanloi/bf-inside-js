/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; 0 <= i; i--) {
    reversed += str[i];
  }
  return reversed;
};
