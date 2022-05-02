/*8 kyu
Is this my tail? */
function correctTail(bod, tail){
   let sub = bod.substr(bod.length-(tail.length))
  
  if (sub === tail) 
    return true
  
  else 
    return false
}
  
 /* 8Kyu replace vowels w/ ! */
function replace(s){
  let letters = s.split('')
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  
//   for(letter of letters)
    
    for(let i = 0; i < letters.length ; i++){
      if(vowels.includes(letters[i])) {
      letters[i] = '!' 
    } 
  }
  return letters.join('')
  }
  