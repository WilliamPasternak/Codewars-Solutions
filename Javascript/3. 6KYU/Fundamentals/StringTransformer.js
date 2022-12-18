Challenge:
String Transformer

Difficulty: 
6KYU

Description:
Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

Solution:
function stringTransformer(str) {
let cleanChars = str.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase() )
return cleanChars.join('').split(' ').reverse().join(' ')
}