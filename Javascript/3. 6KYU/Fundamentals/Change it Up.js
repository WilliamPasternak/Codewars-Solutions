Change it Up
/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A

*/
function changer(str) { 
  const pairs = {
    'a' : 'b', 'b': 'c', 'c': 'd', 'd': 'E', 'e' :'f', 'f':'g', 'g':'h', 'h': 'I',
    'i': 'j', 'j': 'k', 'k': 'l', 'l':'m', 'm':'n','n':'O','o': 'p','p': 'q', 'q':'r', 
    'r':'s','s': 't', 't': 'U', 'u': 'v','v':'w','w':'x', 'x': 'y', 'y':'z', 'z' : 'A'
  }
  const chars = str.toLowerCase().split('')
  return chars.map(char => pairs[char] || char).join('')
}

