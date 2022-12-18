/*Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression*/
function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}