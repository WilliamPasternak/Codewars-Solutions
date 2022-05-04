/* 8Kyu Add item to array*/
websites[0]="codewars";

/* 7 kyu Sum of two lowest positive integers */
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1]
}

/* 6 kyu Take a Ten Minutes Walk */
  function isValidWalk(walk) {
  let north = walk.filter(x => x === 'n').length
  let south = walk.filter(x => x === 's').length
  let east = walk.filter(x => x === 'e').length
  let west = walk.filter(x => x === 'w').length
  return walk.length === 10 && north === south && east === west
}

/* 7 kyu Sum of odd numbers*/
function rowSumOddNumbers(n) {
  if(n <= 1) return 1
  let startingNum = 1
  
  // Sets first number in row
for(let i = 1; i < n ;i++){
    startingNum = i * n + 1
 }
  // Calculates sum of row
let currentTotal = startingNum
let solution = 0
  
  // Add 2 to Current total. Then add current total to solution.
for(let i = 1; i < n ;i++){
  currentTotal += 2 
  solution += currentTotal 
}
  
  return solution + startingNum
}

/* 8KYU */
function array(arr){ 
 
let stringToArr = arr.split(',')
let middle = stringToArr.slice(1,-1)
let solution =  middle.join(' ')
 if (arr.length <= 0 || solution.length <= 0){
    return null
  } 
  return solution

}

