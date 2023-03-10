Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let countOfZeros = 0
  let newArr = []
  for(let el of arr){
    if(el === 0){
      countOfZeros++
    }
    else{
      newArr.push(el)
    }
  }
  for(let i = 1; i <= countOfZeros;i++){
    newArr.push(0)
  }
  return newArr
}