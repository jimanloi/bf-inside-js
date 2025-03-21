/**
 *reverse a string
 *@param {string} (text='')
 *@return {string} reversed text
 */
export const reverse = (text = '') => {
  let reversedText = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
};
