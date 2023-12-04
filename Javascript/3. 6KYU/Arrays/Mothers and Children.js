Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {
  let lowercase = dancingBrigade.toLowerCase().split('').sort()
  let [mothers,mothersAndChildren] = [{},[]]
  
  for(let i = 0 ; i < lowercase.length; i++){
    const currentChar = lowercase[i]
  
    if(!(currentChar in mothers)){
      mothers[currentChar] = true
      mothersAndChildren.push(currentChar.toUpperCase())
    }
    else if(currentChar in mothers){
      mothersAndChildren.push(currentChar)
    }
    
  }
  return mothersAndChildren.join('')
}