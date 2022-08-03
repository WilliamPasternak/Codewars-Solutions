Simple Fun #176: Reverse Letter

function reverseLetter(str) {
let strReversed = []
for(let i = 0; i < str.length; i++){
  let letter = str.charCodeAt(i)
  if(letter >= 97 && letter <=122 ){
    strReversed.push(str[i])
  }
  
}
  return strReversed.reverse().join('')
}