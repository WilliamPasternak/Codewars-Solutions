//Enumerable Magic #25 - Take the First N Elements

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


function apple(x){
  return x * x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}
