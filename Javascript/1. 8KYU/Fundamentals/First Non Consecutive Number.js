Find the first non-consecutive number
Your task is to find the first element of an array that is not consecutive.

function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length - 1; i++){
    let [currentNum, nextNum] = [arr[i], arr[i+1]]    
    if(nextNum !== currentNum + 1){
      return arr[i+1]
    }
  }
   return null
}