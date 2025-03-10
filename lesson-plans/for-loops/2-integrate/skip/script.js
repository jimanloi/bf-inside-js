import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const readEvery = readNumber('skip-size');
  const text = readString('user-text');

  // create a new string with skipped characters
  let skippedText = '';

  for (let i = 0; i < text.length; i += readEvery) {
    skippedText += text[i];
  }

  // display the skipped string
  display('skipped-output', skippedText);
});
