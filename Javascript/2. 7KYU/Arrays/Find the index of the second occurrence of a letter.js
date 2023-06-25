Find the index of the second occurrence of a letter in a string
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

function secondSymbol(s, symbol) {
  const firstOccurance = s.indexOf(symbol)
  return s.indexOf(symbol, firstOccurance + 1 )
}
