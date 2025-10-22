When writing on Twitter, Jaden smith is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below. Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function (str) {
  // split string to arr
  const quoteArr = this.split('')
  // capitalize arr[0]
  quoteArr[0] = quoteArr[0].toUpperCase()
  // iterate over array 
  for (let i = 0; i < quoteArr.length; i++){
    const currChar = quoteArr[i]
    // If current character is a 'space', capitalize the following character
    if (currChar === ' '){
      quoteArr[i + 1] = quoteArr[i + 1].toUpperCase()
    }
  }
  // once str end is reached, return string.
  return quoteArr.join('') 
}
