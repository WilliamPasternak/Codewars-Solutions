Product of Largest Pair

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.

function maxProduct(a) {
  if (a.length < 2) {
    throw new Error("Input array must have at least two elements");
  }
  let [largestNum, secondLargestNum] = [0,0]
  for(let i = 0; i < a.length; i++){
    const currentNum = a[i]
    if(currentNum > secondLargestNum && currentNum < largestNum){
      secondLargestNum = currentNum
    }
    else if (currentNum > secondLargestNum && currentNum > largestNum){
      secondLargestNum = largestNum
      largestNum = currentNum
    }
  }
  return largestNum * secondLargestNum
  }


