/*
ASCII Total
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
*/

function uniTotal (string) {
  if(!string) return 0
  let arrOfCodes = string.split('').map(x => x.charCodeAt(0))
  return arrOfCodes.reduce((a,b) => a + b)
}