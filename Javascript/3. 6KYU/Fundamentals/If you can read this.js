If you can read this...
https://www.codewars.com/kata/586538146b56991861000293/train/javascript


function to_nato(words) {

  // Convert string to lowercase
  let lowerCaseStr = words.toLowerCase()
  // Isolate individual characters
  
  // Replace Alphabetical Char with Nato Translation
  let result = [];
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currChar = lowerCaseStr[i]
    if (currChar in NATO) {
      result.push(NATO[currChar]);
    }
     else if (currChar !== ' ') {
      // Handle non-alphabetic characters (excluding spaces)
      result.push(currChar);
    }
  }
   // return new string from joined array
  return result.join(' ').trim()
 
}