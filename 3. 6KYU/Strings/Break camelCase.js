Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  string = string.split('').map(function (char) {
    if (char === char.toUpperCase()) {
      char = ' ' + char
    }
    return char
  })
  return string.join('')
}


// Tests
console.log(solution('camelCasing'),'camel Casing')
console.log(solution('identifier'),'identifier')
console.log(solution(''),'')
