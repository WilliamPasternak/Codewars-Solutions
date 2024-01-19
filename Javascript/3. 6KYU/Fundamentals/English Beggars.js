/**
 * Challenge: English recipients
 * Source: https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript
 * Description: Given an array of values and an amount of recipients, you are supposed to return an array with the sum of what each recipient 
 * brings home, assuming they all take regular turns, from the first to the last.

/**
 * Distributes values among a given number of recipients, returning an array with the sum of what each recipient brings home.
 *
 * @param {number[]} values - The array of values to be distributed among recipients.
 * @param {number} n - The number of recipients.
 * @returns {number[]} - An array representing the sum of values each recipient takes.
 */

function recipients(values, n) {
    if (!n) return []

    // Initialize an array to store the sum each recipient takes
    const recipientResults = Array(n).fill(0)
    // Distribute values among recipients
    for (let i = 0; i < values.length; i++) {
        recipientResults[i % n] += values[i]
    }
    // Return the array of recipient results
    return recipientResults
}
