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


// Tests:
console.log(absentVowel("John Doe hs seven red pples under his bsket"), '0')
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), '')
