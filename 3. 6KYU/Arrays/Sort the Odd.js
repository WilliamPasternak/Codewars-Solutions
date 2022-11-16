Challenge: Sort the Odd
Difficulty: 6KYU
Description: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// Original Solution
function sortArray(array) {
  const arrayCopy = [...array]
  const sortedOdds = arrayCopy.filter(num => num % 2 !== 0).sort((a,b) => a - b)
  for(let i = arrayCopy.length - 1; i >= 0; i--){
    if(arrayCopy[i] % 2 !== 0){
      arrayCopy[i] = sortedOdds.pop()
}
}
  return arrayCopy
}

// Refactored
function sortArray(arr){
  const oddNums = arr.filter(num => num % 2 !== 0).sort((a,b)=>b-a)
  return arr.map(num => num % 2 === 0 ? num : oddNums.pop())
}

// Tests
console.log(sortArray([7, 1]), '[1, 7]')
console.log(sortArray([5, 8, 6, 3, 4]), '[3, 8, 6, 5, 4]')
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), '[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]')
console.log(sortArray([5, 3, 2, 8, 1, 4]), '[1, 3, 2, 8, 5, 4]')
console.log(sortArray([5, 3, 1, 8, 0]), '[1, 3, 5, 8, 0]')