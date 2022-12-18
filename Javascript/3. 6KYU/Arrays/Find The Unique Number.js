There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  const cache = {}
  for(let num of arr){
  cache[num] = (cache[num] || 0) + 1
  }
  const unique = Object.keys(cache).find(number => cache[number] === 1 )
  return Number(unique)
}

// Tests 
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) , '2')
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), '0.55')