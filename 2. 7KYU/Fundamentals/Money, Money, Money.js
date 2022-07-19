Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while( principal < desired ){
  years++
  principal += ((principal * interest) - ((principal * interest) * tax))
}
  return years
}