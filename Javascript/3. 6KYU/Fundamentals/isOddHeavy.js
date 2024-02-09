/**
 * Challenge: Odd-heavy Array
 * Source: https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript
 * Description: Write a function that accepts an integer array and returns true if the array is odd-heavy else return false.
 * 
/**
 * Checks if an array is odd-heavy.
 * An array is odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
 * 
 * @param {number[]} arr - The input array to be checked.
 * @returns {boolean} - Returns true if the array is odd-heavy, otherwise false.
 */
function isOddHeavy(arr) {
    // Establish all odd numbers
    const odds = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b)
    // Check if odds exist
    if (odds.length === 0) return false 
    // Establish all even numbers
    const evens = arr.filter(num => num % 2 === 0).sort((a, b) => a - b)
   
    const greatestEven = Math.max(...evens)
    const leastOdd = Math.min(...odds)
    
    return leastOdd > greatestEven
}

function isOddHeavy(arr) {
    const { odds, evens } = arr.reduce((acc, num) => {
        if (num % 2 !== 0) {
            acc.odds.push(num)
        } else {
            acc.evens.push(num)
        }
        return acc
    }, { odds: [], evens: [] })

    // No odd numbers, so not odd-heavy
    if (odds.length === 0) return false 

    const greatestEven = Math.max(...evens)
    const leastOdd = Math.min(...odds)

    return leastOdd > greatestEven
}
// Tests:
console.log("Testing array with odd-heavy elements:");
console.log("Input: [11, 4, 9, 2, 8]");
console.log("Expected Output: true");
console.log("Actual Output:", isOddHeavy([11, 4, 9, 2, 8]))
console.log("Test Result:", isOddHeavy([11, 4, 9, 2, 8]) === true ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with even elements greater than odd elements:");
console.log("Input: [11, 4, 9, 2, 3, 10]");
console.log("Expected Output: false");
console.log("Actual Output:", isOddHeavy([11, 4, 9, 2, 3, 10]))
console.log("Test Result:", isOddHeavy([11, 4, 9, 2, 3, 10]) === false ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing empty array:");
console.log("Input: []");
console.log("Expected Output: false");
console.log("Actual Output:", isOddHeavy([]))
console.log("Test Result:", isOddHeavy([]) === false ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with only one odd element:");
console.log("Input: [3]");
console.log("Expected Output: true");
console.log("Actual Output:", isOddHeavy([3]))
console.log("Test Result:", isOddHeavy([3]) === true ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with only one even element:");
console.log("Input: [2]");
console.log("Expected Output: false");
console.log("Actual Output:", isOddHeavy([2]))
console.log("Test Result:", isOddHeavy([2]) === false ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with all even elements:");
console.log("Input: [2, 4, 6, 8]");
console.log("Expected Output: false");
console.log("Actual Output:", isOddHeavy([2, 4, 6, 8]))
console.log("Test Result:", isOddHeavy([2, 4, 6, 8]) === false ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with all odd elements:");
console.log("Input: [3, 5, 7]");
console.log("Expected Output: true");
console.log("Actual Output:", isOddHeavy([3, 5, 7]))
console.log("Test Result:", isOddHeavy([3, 5, 7]) === true ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with odd and even elements, where odd elements are greater:");
console.log("Input: [3, 5, 7, 2]");
console.log("Expected Output: true");
console.log("Actual Output:", isOddHeavy([3, 5, 7, 2]))
console.log("Test Result:", isOddHeavy([3, 5, 7, 2]) === true ? "Passed" : "Failed")
console.log("--------------------------------------")

console.log("Testing array with odd and even elements, where even elements are greater:");
console.log("Input: [3, 5, 7, 2, 4]");
console.log("Expected Output: false");
console.log("Actual Output:", isOddHeavy([3, 5, 7, 2, 4]))
console.log("Test Result:", isOddHeavy([3, 5, 7, 2, 4]) === false ? "Passed" : "Failed")
console.log("--------------------------------------")


