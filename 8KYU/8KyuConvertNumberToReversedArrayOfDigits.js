/*8 kyu
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

// Convert to string, Split it, Convert to Nums, Reverse it

function digitize(n) {
  let numAsString = String(n);
  let arrayOfString = numAsString.split('')
  let arrayOfNum = arrayOfString.map(x => Number(x))
  let reversedArray = arrayOfNum.reverse()
  return reversedArray  
}


function digitize(n) {
  return String(n).split('').map(Number).reverse()
}