Opposite Casing

function isOpposite(s1,s2){
  if(!s1 || !s2 || s1.length !== s2.length) return false
  
  let strLength = s1.length
  for(let i = 0; i < strLength; i++){
    if(s1[i] === s2[i]) return false
    
    let s1CharCase = s1[i] === s1[i].toUpperCase() ? 'Uppercase' : 'Lowercase'
     
    if(s1CharCase === 'Uppercase'){
      if(s2[i] !== s2[i].toLowerCase()) return false
    }
    else if(s1CharCase === 'Lowercase'){
      if(s2[i] !== s2[i].toUpperCase()) return false
    }
    
  }
  return true
  }
