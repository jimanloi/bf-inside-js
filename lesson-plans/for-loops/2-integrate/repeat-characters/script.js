import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const numberOfTimes = readNumber('number-of-times');


  // repeat the characters in the text

  let output = '';

  for (let i = 0; i <= userText.length - 1 ; i++) {
    const character = userText[i];
    for (let t = 0; t < numberOfTimes; t++ ) {
      output += character
    }
  }

  // display the text with repeated characters
  display('repeated-output', output);
});
