Neutralisation
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.


function neutralise(s1, s2) {
   const results = []
   const stringLengths = s1.length
   for(let i = 0; i < stringLengths; i++ ){
     const s1CurrentChar = s1[i]
     const s2CurrentChar = s2[i]
     if(s1CurrentChar === '+' && s2CurrentChar === '+'){
       results.push('+')
     }
      else if(s1CurrentChar === '-' && s2CurrentChar === '-'){
       results.push('-')
     }
     else{
       results.push('0')
     }
   }
  return results.join('')
}