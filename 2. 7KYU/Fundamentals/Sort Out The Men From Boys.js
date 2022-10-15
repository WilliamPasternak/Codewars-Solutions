Sort Out The Men From Boys
Given an array/list [] of n integers , Separate The even numbers from the odds
Return an array/list where Even numbers come first then odds
The Even numbers should be in ascending order While the odds should be descending
Repetition of numbers in the array/list could occur. Only include one occurance.

function menFromBoys(arr){
  const uniqueNums = [...new Set(arr)];
  let men = [] 
  let boys = [] 
  // Fill the above 2 arrays.
  uniqueNums.forEach(number => {
    number % 2 === 0 ? men.push(number) : boys.push(number)
  })
  // Sort in requested order
  men.sort((a,b) => a - b)
  boys.sort((a,b) => b - a)
  
  return [...men,...boys]
}