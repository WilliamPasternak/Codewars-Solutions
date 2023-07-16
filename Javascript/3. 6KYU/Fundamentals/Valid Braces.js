Valid Braces

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

function validBraces(braces){
  // Establish matching pairs 
  const openingBrackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const bracketsSeen = []
  
  for(let i = 0; i < braces.length; i++){
    let currChar = braces[i]
    // If currChar is an opening bracket, push it to 'Brackets Seen'
    if (openingBrackets.hasOwnProperty(currChar)) {
      bracketsSeen.push(currChar)
    }
    else{
      // If currChar is not an opening bracket, Remove the last bracket seen
      const lastSeen = bracketsSeen.pop()
      
      // If lastSeen is undefined, there are no previous opening brackets, return false
      if(!lastSeen) return false

      // Compare lastSeen vs expected brace
      if(openingBrackets[lastSeen] !== currChar) return false 
    }
  }
  // If there are still brackets in bracketSeen, they have not been closed and string is invalid.
  return (bracketsSeen.length === 0) 
}


  
  

   
