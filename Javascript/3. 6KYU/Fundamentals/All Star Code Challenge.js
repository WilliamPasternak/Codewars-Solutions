All Star Code Challenge #15

Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

function rotate(str) {
  // Check if the string is empty, return an empty array
  if (!str) return [];

  // Create an array to store the rotated strings
  const rotated = [`${str.slice(1)}${str[0]}`];

  // Iterate through the characters of the input string
  for (let i = 1; i < str.length; i++) {
    // Get the previous rotated string
    let prevWord = rotated[i - 1];

    // Destructure the first letter and remaining letters from the previous rotated string
    const [firstLetter, ...remainingLetters] = rotated[i - 1];

    // Combine the remaining letters with the first letter to create the next rotated string
    rotated.push(`${remainingLetters.join('')}${firstLetter}`);
  }

  // Return the array of rotated strings
  return rotated;
}
