// #todo

/**
 *longToUpper: makes all long strings in an array upper case
 *@param {array}
 *@return {array}
 */
export const longToUpper = (arr=[], num=0) => {
  let newArr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length >= num) {
      newArr[i] = newArr[i].toUpperCase();
    }
  }
  return newArr;
};
