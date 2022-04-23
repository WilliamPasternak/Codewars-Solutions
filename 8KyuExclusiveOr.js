/* 8 kyu
Exclusive "or" (xor) Logical Operator */

function xor(a, b) {
  if(a === true & b === false || b === true & a === false){
    return true
  }
  return false
}