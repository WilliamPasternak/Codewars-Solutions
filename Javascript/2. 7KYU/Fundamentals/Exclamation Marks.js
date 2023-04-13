Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

function remove (string) {
  const words = string.split(' ')
  for(let i = 0; i < words.length; i++){
    let counter = 0
    for(let j = 0; j < words[i].length; j++){
      if(words[i][j] === '!') counter++
    }
    if (counter === 1) words[i] = ''
  } 
  return words.join('')
  }
     