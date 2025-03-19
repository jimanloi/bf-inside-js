/**
 *filter out specific characters inside a string
 @param {string} (toFilter='') - the string to filter
 @param (string) (removeThese='') - the characters to remove
 @return (string) filtered string
 */
export const filter = (toFilter = '', removeThese = '') => {
  let newText = '';
  toFilter = toFilter.toLowerCase();
  removeThese = removeThese.toLowerCase();
  for (const char of toFilter) {
    if (!removeThese.includes(char)) {
      newText += char;
    }
  }
  return newText;
};
