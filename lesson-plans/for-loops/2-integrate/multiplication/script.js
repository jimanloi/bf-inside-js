import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  const leftInput = readNumber('left');
  const rightInput = readNumber('right');

  // use a for loop to multiply the two numbers

  const left = Number(leftInput);
  console.log(left);

  const right = Number(rightInput);
  console.log(right);

  let result = 0;

  for (let i = 0; i < right; i++) {
    result += left;
  }

  // display the product
  display('product', result);
});
