Replace letters

In input string word(1 word):
replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.


function replaceLetters(word) {
  const letters = word.split('');

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let letterIdx = alphabet.indexOf(letter);

    const isVowel = vowels.includes(letter);

    if (isVowel) {
      if (letter === 'a') {
        letters[i] = 'z';
      } else {
        letterIdx = (letterIdx - 1 + alphabet.length) % alphabet.length;
        while (!consonants.includes(alphabet[letterIdx])) {
          letterIdx = (letterIdx - 1 + alphabet.length) % alphabet.length;
        }
        letters[i] = alphabet[letterIdx];
      }
    } else {
      if (letter === 'z') {
        letters[i] = 'a';
      } else {
        letterIdx = (letterIdx + 1) % alphabet.length;
        while (consonants.includes(alphabet[letterIdx])) {
          letterIdx = (letterIdx + 1) % alphabet.length;
        }
        letters[i] = alphabet[letterIdx];
      }
    }
  }

  return letters.join('');
}


