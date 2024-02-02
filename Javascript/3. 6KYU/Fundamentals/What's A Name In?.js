What's A Name In?
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

function nameInStr(s, n){
  let name = n.toLowerCase()
  let string = s.toLowerCase()
  
  let index = 0
  
  for (let char of str) {
    if (char === name[index])
      index++
  }
  
  return index === name.length
}