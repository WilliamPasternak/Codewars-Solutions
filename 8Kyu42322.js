function take(arr, n) {
  const newArr = []
  if(arr.length === 0){
    return arr
  }
  if(n < arr.length){
    for(let i = 0; i < n; i++){
    newArr.push(arr[i])
  }
  return newArr
  }
    if(n >arr.length){
      for(let i = 0; i< arr.length; i++){
        newArr.push(arr[i])
      }
      return newArr
    }
  
}