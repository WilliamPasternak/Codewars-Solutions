Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

function freqSeq(str, sep) {
  // Count occurances of char
  const charCount = {}
  for(let char of str){
    charCount[char] = (charCount[char] || 0) + 1
  }
  // Map str to count, and return as string.
  return str.split('').map(char => charCount[char]).join(sep)
}