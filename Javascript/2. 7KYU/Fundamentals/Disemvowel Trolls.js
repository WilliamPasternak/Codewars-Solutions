Disemvowel Trolls
function disemvowel(str) {

  str = str.split('')
  let noVowels = []
  str.forEach(x => {
    if(x != 'a' && x != 'e' && x != 'i' && x != 'o' && x != 'u' && x != 'A' && x != 'E' && x != 'I' && x != 'O' && x != 'U'
      ){
      noVowels.push(x)
    }
  })
  
  return noVowels.join('')
  
  
 
}