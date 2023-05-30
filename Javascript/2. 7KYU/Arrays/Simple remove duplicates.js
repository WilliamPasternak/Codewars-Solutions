Simple remove duplicates

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

function solve(arr) {
  // Store frequency count of each number
  const numCount = {}

  // Count occurrences of each number
  for (const num of arr) {
    numCount[num] = numCount[num] + 1 || 1; // Increment count or set to 1 if it doesn't exist
  }

  const noDuplicates = []

  // Check count of each original number, if 1 there are no more duplicates, push to array.
  for (const num of arr) {
    if (numCount[num] === 1) {
      noDuplicates.push(num); // Push the number to the array if it has no duplicates
    } else {
      numCount[num]--; // Decrement count to track the occurrence
    }
  }

  return noDuplicates;
}
