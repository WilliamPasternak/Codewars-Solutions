Alternating between three values

Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies the following:
  f(a) = b, f(b) = c , f(c) = a

function f(x, original) { 
  // Establish lookup with swapped values
  const swapped = {'a': original['b'] , 'b': original['c'] , 'c': original['a'] }
  let key = ''
 
  // Find which letter cooresponds to 'x'
  for(let letter in original){
    if(original[letter] === x){
      key = letter
    }  
  }
  // Look up the swapped value of 'x'
  return swapped[key]
}