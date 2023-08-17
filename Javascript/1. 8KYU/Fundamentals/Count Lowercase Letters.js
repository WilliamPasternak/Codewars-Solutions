Count Lowercase Letters

Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    let lowerCaseCount = 0
    for(let i = 0; i < str.length; i++){
      const charCode = str.charCodeAt(i)
      if(charCode >= 97 && charCode <= 122) lowerCaseCount++
    }
  return lowerCaseCount
}


const lowercaseCount = (str) => str.split('').filter(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ).length
