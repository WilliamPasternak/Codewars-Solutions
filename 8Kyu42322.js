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

/*8 kyu
Find Multiples of a Number */

function findMultiples(integer, limit) {
  const arr = []
  for (let i = 1; i * integer <= limit; i++){
    arr.push(integer*i)
  }
  return arr
 
}

/* 8 kyu
Find the Remainder*/
function remainder(n, m){
  return n > m ? n % m : m % n  
}

