WeIrD StRiNg CaSe

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

function toWeirdCase(string) {
  const words = string.split(' ');
  const chars = words.map(word => word.split(''));

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars[i].length; j++) {
      if (j % 2 === 0) {
        chars[i][j] = chars[i][j].toUpperCase();
      } else {
        chars[i][j] = chars[i][j].toLowerCase();
      }
    }
  }

  return chars.map(word => word.join('')).join(' ');
}
