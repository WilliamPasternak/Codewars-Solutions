Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj){
  const fiveLetterWords = []
  // Check Key & Value Lengths
  for(element in obj){
    const [keyLength,valueLength] = [element.length, obj[element].length]
    if(keyLength === 5) fiveLetterWords.push(element)
    if(valueLength === 5) fiveLetterWords.push(obj[element])
  }
  return fiveLetterWords
}