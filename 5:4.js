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