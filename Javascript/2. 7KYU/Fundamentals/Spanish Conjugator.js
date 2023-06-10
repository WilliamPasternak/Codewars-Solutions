Spanish Conjugator

You need to write a function called conjugate which will return an object with a spanish verb conjugated.

function conjugate(verb){
   const base = verb.slice(0,-2)
   const endingVowel = verb[verb.length - 2]
   const accentedVowels = {'a': 'á' , 'e': 'é' , 'i': 'í'}
   
  return {[verb]: [
    `${base}o`, 
    `${base}${endingVowel === 'a' ? 'as' :'es'}`,
    `${base}${endingVowel === 'a' ? 'a' :'e'}`, 
    `${base}${endingVowel}mos`, 
   `${base}${accentedVowels[endingVowel]}${endingVowel === 'i' ? 's' : 'is' }`,
   `${base}${endingVowel === 'a' ? 'an' :'en'}`,
 ]} 
}
