/**
 * Challenge: Fruit Machine
 * Source: https://www.codewars.com/kata/590adadea658017d90000039/solutions/javascript
 * Description: 
 * You will be given three reels of different images and told at which index the reels stop. 
 * From this information your job is to return the score of the resulted reels.
 */


/**
 * Calculates the score based on the given reels and spins in a fruit slot machine.
 *
 * @param {string[]} reels - An array of three arrays, each representing a reel with symbols.
 * @param {number[]} spins - An array of three numbers, each representing the index of the symbol to land on in the corresponding reel.
 * @returns {number} - The calculated score based on the rules of the fruit slot machine.
 */

function fruit(reels, spins) {
  // Mapping of symbols to their respective values
  let symbols = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild']

  // Mapping spins to their corresponding values (from symbols index + 1), sorting them, and assigning to variables
  let [symbolA, symbolB, symbolC] = reels.map((reel, i) => symbols.indexOf(reel[spins[i]]) + 1) 
    .sort((symbolA, symbolB) => symbolA - symbolB); 

  // Check if all three values are the same
  if (symbolA === symbolB && symbolB === symbolC)
    return symbolA * 10 

  // Check if the first two values are the same
  if (symbolA === symbolB)
    // If the third value is 10 (aka 'Wild'), double the value of symbolA and return it, otherwise return the value of symbolA.
    return symbolC === 10 ? symbolA * 2 : symbolA; 

  // Check if the last two values are the same and return the second value if the last two values are the same, otherwise return 0
  return symbolB === symbolC ? symbolB : 0; 
}