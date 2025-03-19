/**
 *
 */
export const shiftCharacters = (text = '', shift = 0) => {
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    const newCode = text.charCodeAt(i) + shift;
    const newChar = String.fromCharCode(newCode);
    newText += newChar
  }
  return newText;
};
