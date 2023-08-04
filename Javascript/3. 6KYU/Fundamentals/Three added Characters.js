Three added Characters

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character. The characters could be anywhere in the string and string2 is actually shuffled.

function addedChar(s1, s2){  
  let [sortedString1, sortedString2]   = [ s1.split('').sort(), s2.split('').sort()]
  let idx = 0
  
  while(idx < s2.length){
    let s1Char = sortedString1[idx]
    let s2Char = sortedString2[idx]
     if (s1Char !== s2Char){
      return s2Char
    }
    idx++
  }
}