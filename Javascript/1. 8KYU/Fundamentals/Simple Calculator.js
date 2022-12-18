Simple Calculator
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.


function calculator(a,b,sign){
  
  // Calculate Object holds all of the valid functions
 let calculate = {
    '+': function(a,b) {return a + b},
    '-': function(a,b) {return a - b},
    '*': function(a,b) {return a * b},
    '/': function(a,b) {return a / b},
  }
  
 // If A or B not a number or Sign is invalid
  if(typeof a !== 'number' || 
     typeof b !== 'number' || 
     sign in calculate === 'false') {
     return 'unknown value'
    }

  // If sign is valid, run the corresponding calculation
   if(sign in calculate){
      return calculate[sign](a,b)
   }
  return 'unknown value'
  }

