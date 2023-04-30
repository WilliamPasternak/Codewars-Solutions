Holiday III - Fire on the boat

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

function fireFight(s){
  const words = s.split(' ')
  for(let i = 0; i < words.length; i++){
    const word = words[i]
    if(word === 'Fire') words[i] = '~~'
  }
  return words.join(' ')
}