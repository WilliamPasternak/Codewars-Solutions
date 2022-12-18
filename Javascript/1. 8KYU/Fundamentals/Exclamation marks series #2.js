/* Exclamation marks series #2: Remove all exclamation marks from the end of sentence */

function remove (string) {  
 let stringArray = string.split('')
 while (stringArray[stringArray.length -1] === '!'){
   stringArray.pop()
 }
  return stringArray.join('')
}