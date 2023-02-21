Mexican Wave

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

1. The input string will always be lower case but maybe empty.

2. If the character in the string is whitespace then pass over it as if it was an empty seat


function wave(str){
  // Make a new empty array
  const waveArr = []
  // Iterate over each char in str
  for(let i = 0; i < str.length; i++){
    const letters = str.split('')
    // If that letter is not ' ' capitalize and push to new array
    if(letters[i] !== ' '){
       letters[i] = letters[i].toUpperCase()
       waveArr.push(letters.join(''))
    }
    }
  return waveArr
  }

//Test: 
console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"])
