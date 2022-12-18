Tribonacci Sequence

It works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 

Tribonacci sequence
[1, 1, 1]  => [1, 1 ,1, 3, 5, 9, 17, 31, ...]
[0, 0, 1]  => [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Create a fibonacci function that given an array, returns the first n elements.

// Original
function tribonacci(signature,n){
  if(n == 0) return []
  if(n == 1) return [signature[0]]
  if(n == 2) return [signature[0],signature[1]]

  const tribSequence = [...signature]
  let i = 0
  let j = 1
  let k = 2
  while(tribSequence.length < n){
    tribSequence.push(tribSequence[i] + tribSequence[j] + tribSequence[k] )
    i++
    j++
    k++
  }
  return tribSequence
}

// Refactored
function tribonacci(s,n){
  const arr = [];
  // 
  for(let i = 0; i < n; i++) {
    arr.push(i < 3 ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
  }
  return arr;
}

// Tests:
console.log(tribonacci([1, 1, 1], 3),'[1,1,1]')
console.log(tribonacci([0, 0, 1], 3),'[0,0,1]')
console.log(tribonacci([1, 1, 1], 8),'[1, 1 ,1, 3, 5, 9, 17, 31]')
console.log(tribonacci([0, 0, 1], 9),'[0, 0, 1, 1, 2, 4, 7, 13, 24]')
console.log(tribonacci([1, 1, 1], 0),'[]')
console.log(tribonacci([1, 1, 1], 1),'[1]')
console.log(tribonacci([1, 1, 1], 2),'[1,1]')
