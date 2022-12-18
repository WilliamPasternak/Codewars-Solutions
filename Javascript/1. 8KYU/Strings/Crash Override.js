Crash Override
Your task is to create a function that, given a proper first and last name, will return the correct alias.

function aliasGen(first,last){
  first = first.toUpperCase()
  last = last.toUpperCase()
  
    let codeName = ""
    
    // If first letter of both names appear in provided arrays lookup value 
    if (first[0] in firstName && last[0] in surname){
      codeName += firstName[first[0]] + ' ' + surname[last[0]]
    }
      
    else {
      codeName = "Your name must start with a letter from A - Z."
    }
  return codeName
  }