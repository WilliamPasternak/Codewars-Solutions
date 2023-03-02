Backspaces in string
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

function cleanString(s) {
  const finalWord = []
  for(let char of s){
    if(char === '#'){
      finalWord.pop()
    }
    else{
      finalWord.push(char)
    }
  }
  return finalWord.join('')
}