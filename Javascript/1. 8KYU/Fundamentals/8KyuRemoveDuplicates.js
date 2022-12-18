/* 8 kyu
Remove duplicates from list */

function distinct(a) {
  let uniqueArray = []
  for(let i = 0; i < a.length; i++){
     if(!uniqueArray.includes(a[i]))
  uniqueArray.push(a[i])
  }      
  return uniqueArray
}