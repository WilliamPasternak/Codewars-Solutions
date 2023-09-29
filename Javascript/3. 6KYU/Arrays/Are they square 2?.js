Are they square 2?
Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions
Your function should return true if all elements are square numbers and false if not. An entirely empty array should return undefined. You can assume that all array elements will be positive integers.

function isSquare(arr) {
  // Empty array should return undefined
  if (!arr.length) return undefined;

  // Remove nested arrays and flatten the input array
  const flattened = flattenArray(arr);

  // Check if every number in the flattened array is a perfect square
  return flattened.every(number => {
    // Find the square root of each number
    const sqrt = Math.sqrt(number);
    // Check if the square root is a whole number 
    const isSquare = Number.isInteger(sqrt);
    // Return true if the number is a perfect square, otherwise return false
    return isSquare === true;
  });
}

// Flatten a nested array
function flattenArray(arr) {
  let flatArray = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      // If the element is an array, recursively flatten it
      flatArray = flatArray.concat(flattenArray(element));
    } else {
      // If the element is not an array, add it to the flatArray
      flatArray.push(element);
    }
  }
  return flatArray;
}

// Tests
console.log(isSquare([]));                    // Output: undefined (Empty array)
console.log(isSquare([1, 4, 9, 16]));         // Output: true (All perfect squares)
console.log(isSquare([2, 5, 8, 12]));         // Output: false (None are perfect squares)
console.log(isSquare([1, [4, 9], [16]]));     // Output: true (Nested perfect squares)
console.log(isSquare([1, [2, [3, 4], 5], 6])); // Output: false (Nested, but not all perfect squares)
console.log(isSquare([25, 36, [49, 64, [81]]]));// Output: true (Deeply nested perfect squares)
