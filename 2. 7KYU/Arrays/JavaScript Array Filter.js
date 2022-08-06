JavaScript Array Filter
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
function getEvenNumbers(numbersArray){
  // Edge Cases:
  if(!numbersArray) return []
  if(numbersArray.length < 1) return []
  
  return numbersArray.filter(x => x % 2 === 0)

}
