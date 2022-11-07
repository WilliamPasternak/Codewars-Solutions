//Challenge: Lost Number In Number Sequence
//Description: An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

function findDeletedNumber(arr, mixArr) {
// Edge Cases: 
if(arr.length === 0 || arr.length === mixArr.length) return 0

const arrSum = ( arr.length * (arr.length + 1) ) / 2
const mixArrSum = mixArr.reduce((acc,cur) => acc + cur , 0)
return arrSum - mixArrSum
}

// Tests
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]),'2')
console.log(findDeletedNumber([1,2,3], [3,2]),'1')
