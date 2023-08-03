Random Substitution Cipher

There is no input to the function. The output from your code should be an object in which the keys are simply all the letters of the English alphabet, in lower case and in alphabetical order. The value of each key will also be a lower-case letter, which you should select at random. Because it is random, it is also possible that the original letter and the substituted letter will be the same, as you can see in the following example of possible output:

function randomSub() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
   
    // establish an object holding all letters
    const shiftedLetters = {"a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0, "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "o":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0}
  
    // 'Shuffle' alphabet
    shuffle(alphabet)
    
    // 'Pop' off last letter of shuffled alphabet and assign to each letter in 'shiftedLetters'
    for(let letter in shiftedLetters){
      let randomChar = alphabet.pop()
      shiftedLetters[letter] = randomChar
    }
  
    // Return shiftedLetters
    return shiftedLetters
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
