Decode the Morse code

n this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

const decodeMorse = function(morseCode) {
  const codes = morseCode.split(' ');
  const decoded = [];

  let space = 0;

  for (let code of codes) {
    if (code in MORSE_CODE) {
      const decodedLetter = MORSE_CODE[code];
      decoded.push(decodedLetter);
      space = 0; // Reset the space count
    } else if (!code) {
      if (!space) {
        decoded.push(' ');
        space++;
      } else {
        space = 0; 
      }
    }
  }

  return decoded.join('').trim();
};
