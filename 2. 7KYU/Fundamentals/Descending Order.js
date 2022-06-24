/* 
Convert n to string so we can use string methods.
Split string into array
Sort in decending order, join back to a string, convert all of this to a number
Return above number
*/

function descendingOrder(n){
  n = n.toString();
  let numArr = n.split('')
  let sorted = Number(numArr.sort((a,b) => a > b ? -1: 1).join(''))
  return sorted
}