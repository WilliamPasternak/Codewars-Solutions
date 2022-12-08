Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num){
   if(num <= 9) return 0
   let counter = 0
   while(String(num).length > 1){
      num = String(num).split('').reduce((acc,cur) => acc * cur , 1)
      counter++
   }
return counter
}

// Tests:
console.log(persistence(39),'3')
console.log(persistence(999),'4')
console.log(persistence(4),'0')
