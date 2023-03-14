Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable){  
  const uniqueNums = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1]){
      uniqueNums.push(iterable[i])
    }
  }
  return uniqueNums
}