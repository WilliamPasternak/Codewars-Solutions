Alphabet Slices

Given a string of lowercase letters, find substrings that consist of consecutive letters of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.

// Refactored Solution:
function isSequential(currentCharCode, nextCharCode) {
    return nextCharCode === currentCharCode + 1;
}

function solution(str) {
    let result = [];
    let sequential = [];

    for (let i = 0; i < str.length; i++) {
        const currentCharCode = str.charCodeAt(i);
        const nextCharCode = str.charCodeAt(i + 1);

        if (isSequential(currentCharCode, nextCharCode)) {
            sequential.push(str[i]);
        } else {
            if (sequential.length > 0) {
                sequential.push(str[i]);
                result.push(sequential.reverse().join(''));
                sequential = [];
            } else {
                result.push(str[i]);
            }
        }
    }

    return result.length === 0 ? str : result.join('');
}



// Original Solution:
function solution(str){    
  console.log(`Input: ${str}`)
  // create empty array to hold groups of chars
  const result = []
  
  // Convert str to char code array with map
  const charCodes = str.split('').map((char) => char.charCodeAt(0) )
 
  // Create array to hold sequential values
  let sequential = []

  // Iterate over charCodes array,
  for(let i = 0; i < charCodes.length; i++){
    // Establish current and next chars for comparison
    const [currChar,nextChar] = [charCodes[i], charCodes[i+1] ]    
  
    // If the nextChar and currChar are sequential
    if(nextChar === currChar + 1){
      // Push the character that charcode represents to the sequential array
      sequential.push(String.fromCharCode(currChar))
    }
    // If the nextChar and currChar are not sequential
   else if(charCodes[i] + 1 !== charCodes[i+1]){
     // if there have been no sequential chars, push the single current char
     if(sequential.length === 0){
       result.push(String.fromCharCode(currChar))
     }
     // If we have seen some sequential chars
     else if(sequential.length){
       sequential.push(String.fromCharCode(currChar))
       // push the reverse of that string into the results array
       result.push(sequential.reverse())
       // Clear sequential
       sequential = []
     }
    }
  }
  
  if(result.length === 0) return str
  return result.flat().join('')
  } 



// Tests:
console.log('Output:', solution("xabc") ,'Expected:', "xcba")
console.log('Output:', solution("pqrsxdef"),'Expected:', "srqpxfed")
console.log('Output:', solution("jklxyz"),'Expected:', "lkjzyx")
console.log('Output:', solution("vwxcdefg"),'Expected:', "xwvgfedc")
console.log('Output:', solution("vvmnozzstubb"),'Expected:',"vvonmzzutsbb")

