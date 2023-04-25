Between Extremes

Given an array of numbers, return the difference between the largest and smallest values.

function betweenExtremes(numbers) {
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    return max - min
}