/**
 * Keep string when it is longer than a given number
 */
export const keepLongStrings = (strings = [], long = 5) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
