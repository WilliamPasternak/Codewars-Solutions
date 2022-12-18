/* Is there a vowel in there?
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
// Iterate over array, for each element, check if charcode provided = 

*/

function isVow(a){
for(let i = 0; i < a.length;i++){
  if(a[i] === 97 ||
     a[i] === 101 ||
     a[i] === 105 ||
     a[i] === 111 ||
     a[i] === 117) {
    a[i] = String.fromCharCode(a[i])
  }
  }
  return a
}