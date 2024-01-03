/**
 * Challenge: Round by 0.5 Steps - 6KYU
 * Source: https://www.codewars.com/kata/51f1342c76b586046800002a/javascript
 * Description: Round any given number to the closest 0.5 step
 */

/**
 * Rounds the input number to the nearest half-step.
 * @param {number} n - The number that must be rounded.
 * @returns {number} closest - The closest half-step from the starting number.
 */
function solution(n) {
  const roundingOptions = findRoundingOptions(n)
  return findClosestOption(n, roundingOptions)
}
/**
 * Finds the rounding options for the given number.
 * @param {number} n - The number for which rounding options are calculated.
 * @returns {number[]} roundingOptions - An array containing possible rounding options.
 */
function findRoundingOptions(n) {
  const floorValue = Math.floor(n)
  const halfStep = floorValue + 0.5
  const ceilValue = floorValue + 1
  return [floorValue, halfStep, ceilValue]
}
/**
 * Calculates the difference between n and each rounding option, updating the closest option.
 * @param {number} n - The number for which the closest option is found.
 * @param {number[]} roundingOptions - An array containing possible rounding options.
 * @returns {number} closest - The closest rounding option based on the minimum absolute difference.
 */
function findClosestOption(n, roundingOptions) {
  let minDifference = Math.abs(roundingOptions[2] - n)
  let closest = roundingOptions[2]

  roundingOptions.forEach(option => {
    const currentDifference = Math.abs(n - option)
    if (currentDifference < minDifference) {
      minDifference = currentDifference
      closest = option
    }
  })
  return closest
}
// Tests:
console.log(solution(4.2), 4)
console.log(solution(4.3), 4.5)
console.log(solution(4.75),5)