Adjacent repeated words in a string
Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

/**
 * Counts the number of sections repeating the same word (case insensitive).
 * The occurrence of two or more equal words next after each other counts as one.
 *
 * @param {string} searchString - The input string containing words.
 * @returns {number} The number of sections repeating the same word.
 */

function countAdjacentPairs(searchString) {
  // convert searchString to lowercase
  let string = searchString.toLowerCase()
  // split searchString into individual words
  let words = string.split(' ')
  // create a variable to keep track of max repeat.
  let maxRepeats = 0
  // create a variable to keep track of current word being checked.
  let currentWord = null

  // iterate over array
  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    // Check if current word is equal to the previous word
    if (word === currentWord) {
      continue // Skip if it's the same word as the previous one
    }

    // Check if the current word is equal to the next word
    const nextWord = words[i + 1]
    if (word === nextWord) {
      maxRepeats++
    }

    // Update currentWord for the next iteration
    currentWord = word 
  }

  return maxRepeats
}

// Tests:
console.log(countAdjacentPairs("dog cat"));  // Output: 0
console.log(countAdjacentPairs("dog DOG cat"));  // Output: 1
console.log(countAdjacentPairs("apple dog cat"));  // Output: 0
console.log(countAdjacentPairs("pineapple apple dog cat"));  // Output: 0
console.log(countAdjacentPairs("apple apple dog cat"));  // Output: 1
console.log(countAdjacentPairs("apple dog apple dog cat"));  // Output: 0
console.log(countAdjacentPairs("dog dog DOG dog dog dog"));  // Output: 1
console.log(countAdjacentPairs("dog dog dog dog cat cat"));  // Output: 2
console.log(countAdjacentPairs("cat cat dog dog cat cat"));  // Output: 3
