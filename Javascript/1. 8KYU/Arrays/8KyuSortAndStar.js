/*
8 kyu
Sort and Star
*/

//return first value with *** between each letter


function twoSort(s) {
 // Sort array alphabetically
  s.sort()
  let firstTerm = s[0]
  //Is it already a string?
  let firstTermAsString =  firstTerm.toString()
  let eachLetter = firstTermAsString.split('')
  let newArr = []
  

  for(let i = 0; i < s[0].length ; i++){
    newArr.push(eachLetter[i])
    if(i < firstTerm.length -1 )
    newArr.push('***')
  }
  
  return newArr.join('')

  