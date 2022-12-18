Maximum Triplet Sum 
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers){
  const uniqueNums = new Set([...numbers]) 
  let largestNums = [0,0,0]

for(let i = 0; i < 3; i++){
	let currentLargest = Math.max(...uniqueNums)
  largestNums[i] = currentLargest
	uniqueNums.delete(currentLargest)
}
return largestNums.reduce((acc,cur) => acc+cur)
}