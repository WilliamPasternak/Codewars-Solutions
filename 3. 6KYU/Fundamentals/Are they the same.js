Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. Valid arrays a = [121, 144, 19, 161, 19, 144, 19, 11]  b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(a, b){
   if(!a || !b) return false
  if(a.length !== b.length) return false
   const cache = {}
  for(let num of a){
    cache[num*num] = ( cache[num * num] || 0) + 1
  }

for(let num of b){
if(!cache[num]) return false
  cache[num] -= 1
}
return true
}

// Tests
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361] ), 'true')
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361] ), 'false')


