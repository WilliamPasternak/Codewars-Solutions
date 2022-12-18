Convert an array of strings to array of numbers
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
function toNumberArray(stringarray){
 return stringarray.map(x=> Number(x))
}