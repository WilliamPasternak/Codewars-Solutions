/**
 * Collects and returns an Array of'Eureka' numbers (described below), between a & b.
 * @param {number} a - The starting number.
 * @param {number} b - The ending number.
 * @returns {array} - A sorted collection of numbers that meet the Eureka property described below.
 */

/*
The number 89 is the first integer with more than one digit that fulfills the property below.
This sum gives the same number: 89 = 8**1 + 9**2 

The next number in having this property is 135.
135: See this property again: 135 = 1**1 + 3**2 + 5**3

We need a function to collect these numbers, that may receive two integers a & b that defines the range [a ... b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.
*/

function sumDigPow(a, b) {
  const eurekaNums = []
  // create and fill an array with numbers a - b inclusive.
  const numsAtoB = Array.from({ length: b - a + 1 }, (_, index) => a + index);
  // iterate over array
  for(let i = 0; i < numsAtoB.length; i++){
    const originalNum = numsAtoB[i]
    let currentTotal = 0
    // Iterate over each digit of originalNum
    const digitsOfCurrentNum = String(originalNum)
    for(let j = 0; j < digitsOfCurrentNum.length; j++){
       // add this total to current total.
      currentTotal += digitsOfCurrentNum[j]**(j+1)
    }
     // if original number == curent total, push original number to answers array
    if(originalNum === currentTotal){
      eurekaNums.push(originalNum)
    }
  }
  return eurekaNums
}
