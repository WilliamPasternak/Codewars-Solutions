function removeSmallest(numbers) {
   // Return an empty array if numbers is empty
 if (numbers.length === 0){
   return []
 }
  
  // Start the smallest value at largest number possible
  let smallest = Infinity
  
   // Update smallest number if lesser number is found
for(let i = 0 ; i < numbers.length; i++){
    if(numbers[i] < smallest){
      smallest = numbers[i]
    }
}
  // Copy the original array
  let numbersMinusOne = numbers.slice()
  
  // Find location of smallest number
  let indexOfSmallest = numbersMinusOne.indexOf(smallest)
  
  // Remove the smallest number, and return the list with it missing
  numbersMinusOne.splice(indexOfSmallest,1)
  return numbersMinusOne

}
