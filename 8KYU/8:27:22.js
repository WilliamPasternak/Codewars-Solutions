/* 8Kyu.js Exclamation marks series #1: Remove an exclamation mark from the end of string */

function remove (string) {
  // ONLY REMOVE ! if it is the last element
  if(string[string.length-1] === '!'){
    let arr = string.split('')
    arr.pop()
    return arr.join('')
  }
  return string
}