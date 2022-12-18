Return the Missing Element
Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
function getMissingElement(arr){
  let targetSum = (arr.length**2 + arr.length ) / 2
  let actualSum = arr.reduce((a,b) => a + b )
	return targetSum - actualSum  
}
