/*
 * Challenge: Loose Change
 * Source: https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript
 * Description: Create a function that takes an amount of US currency in cents, 
 * and returns a dictionary which shows the least amount of coins used to make up that amount. 
 * The only coin denominations considered in this exercise are: Pennies, Nickels, Dimes and Quarters. 
 * Therefor the dictionary returned should contain exactly 4 key/value pairs.
*/

/**
 * Calculates the loose change in terms of quarters, dimes, nickels, and pennies
 * for a given amount in cents.
 *
 * @param {number} cents - The amount in cents for which to calculate loose change.
 * @returns {Object} coinsGiven - An object containing the count of each coin type.
 */
function looseChange(cents) {
  // Create a dictionary containing valid coins, with initial values of 0.
  const coinsGiven = {'Quarters': 0, 'Dimes': 0, 'Nickels': 0, 'Pennies': 0}
  // Input validation
  if (cents <= 0) return coinsGiven

  // Create a dictionary of coin values.
  const coins = {'Quarters': 25, 'Dimes': 10, 'Nickels': 5, 'Pennies': 1}
  // Establishes proper format for cents.
  let remainingCents = Math.floor(cents)

  // Iterate through each type of coin, 
  for (const coinType in coins) {
    const coinValue = coins[coinType];
  // deduct coinValue from remaining Cents, increment coin's count.
    while (remainingCents >= coinValue) {
      remainingCents -= coinValue
      coinsGiven[coinType]++
    }
  }
  return coinsGiven
}

// Tests:
console.log('56 Cents:', 'Result:', looseChange(56), '\n', 'Expected:', {'Quarters': 2, 'Dimes': 0, 'Nickels': 1, 'Pennies': 1})
console.log('0 Cents:', 'Result:', looseChange(0), '\n', 'Expected:', {'Quarters': 0, 'Dimes': 0, 'Nickels': 0, 'Pennies': 0})
console.log('-3 Cents:', 'Result:', looseChange(-3), '\n', 'Expected:', {'Quarters': 0, 'Dimes': 0, 'Nickels': 0, 'Pennies': 0})
console.log('7.9 Cents:', 'Result:', looseChange(7.9), '\n', 'Expected:', {'Quarters': 0, 'Dimes': 0, 'Nickels': 1, 'Pennies': 2})
