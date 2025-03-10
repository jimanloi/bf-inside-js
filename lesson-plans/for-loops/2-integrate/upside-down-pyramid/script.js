import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userText = readString('to-pyramid');

  // create the pyramid
  let output = '';

  for (let i = 0; i < userText.length; i++) {
    const slicedText = userText.slice(i);
    output += slicedText + '\n';
  }

  // display the pyramid
  display('pyramided', output);
});
