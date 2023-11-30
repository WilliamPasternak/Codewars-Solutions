Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
  // create an empty array to hold letters of each word
  const letters = []
 // check each letter for case,
  for(let i = 0; i < str.length; i++){
    let [currChar, nextChar] = [str[i] , str[i + 1] ]
    // if current letter is lowercase:
    if (currChar >= 'a' && currChar <= 'z'){
      letters.push(currChar)
    }
    // if current letter is uppercase:
    else if (currChar >= 'A' && currChar <= 'Z') {
      currChar = currChar.toLowerCase()
      letters.push(currChar)
    }
    if(nextChar >= 'A' && nextChar <= 'Z'){
      letters.push('-')
    }
  }

  return letters.join('')
}