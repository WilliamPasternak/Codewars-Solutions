Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverse(str){
  let newStr = ""
  for(let char of str){
  newStr = char + newStr
  }
  return newStr
}
