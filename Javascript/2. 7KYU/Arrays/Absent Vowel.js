Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.

function absentVowel(x){
  let vowels = {a:0,e:1,i:2,o:3,u:4}
  for(let vowel in vowels){
    let missingLetter = vowels[vowel]
    if(x.indexOf(vowel) === -1){
      return missingLetter
    }
  }
}

function absentVowel(x){
  let letters = x.split('')
  let lettersUsed = {a: 0, e: 0, i:0, o: 0, u: 0}
  let vowels ={a: 0, e: 1, i: 2, o: 3, u:4}

  for(let char of letters){
     if(char in lettersUsed){
         lettersUsed[char]++
       }
  }
  
  let unusedVowel = Object.keys(lettersUsed).find(letter => lettersUsed[letter] === 0)

  return vowels[unusedVowel]

}



// Tests:
console.log(absentVowel("John Doe hs seven red pples under his bsket"), '0')
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), '')
