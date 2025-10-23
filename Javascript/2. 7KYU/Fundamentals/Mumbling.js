7 kyu - Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.


// Version 1.
function accum(s) {
  // Validates input
  if (typeof s !== 'string') return ''

// lowercase string (s) as most of the letters will be lowercased
  const lowerCaseS = s.toLowerCase()
  // create an empty array to hold new chars
  const charArr = []
  // iterate over str
  for (let i = 0; i < lowerCaseS.length; i++ ){
    const timesToRepeat = i + 1
    let count = 0
    let char = lowerCaseS[i]
    // If first time seeing char, capitalize it.
    if (count === 0) {
      charArr.push(char.toUpperCase())
      count++
    }
    // Push char to array and increment count
    while(count < timesToRepeat){
      charArr.push(char)
      count++
    }
     // once count equals times to repeat, push a '-' move original index over
    charArr.push('-')
    
  }
    const result = charArr.join('').slice(0, -1)
    return result  
}

// Version 2.

function accum(s) {
  if (typeof s !== 'string') return '';
  
  return s
    .toLowerCase()
    .split('')
    .map((ch, i) => ch.toUpperCase() + ch.repeat(i))
    .join('-');
}
