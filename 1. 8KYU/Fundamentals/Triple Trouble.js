Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. 

function tripleTrouble(one, two, three){
 let message = ""
 one = one.split('')
 two = two.split('')
 three = three.split('')
  for(let i = 0; i <= one.length - 1 ; i++){
    message += one[i] + two[i] + three[i]
  }
  return message
 }

// Refactored Code
function tripleTrouble(one, two, three){
 let message = ""
  for(let i = 0; i < one.length ; i++){
    message += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return message
 }

