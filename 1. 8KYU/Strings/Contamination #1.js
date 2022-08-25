Contamination #1 
An AI has infected a text with a character!!
This text is now fully mutated to this character.
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

function contamination(text, char){
  if(!text) return ''
  if(!char) return ''
  
  let textArray = text.split('')
  for(let i = 0; i < textArray.length; i++){
    textArray[i] = char
  }
  
  return textArray.join('')
}