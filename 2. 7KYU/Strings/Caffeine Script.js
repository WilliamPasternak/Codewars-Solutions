Challenge:
Caffeine Script

Description:
Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

function caffeineBuzz(n){
  let message = "mocha_missing!"
  
  if(n % 12 === 0) message = 'CoffeeScript'
  if(n % 6 === 0) message = 'JavaScript'
  if(n % 3 === 0) message = 'Java'
  
  return message
}


