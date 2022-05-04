/* 8Kyu Add item to array*/
websites[0]="codewars";

/* 7 kyu Sum of two lowest positive integers */
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1]
}

/* 6KYU */