/**
 * Challenge: Simple Sentences
 * Source: https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript
 * Description: Implement a function, so it will produce a sentence out of the given parts.
 * Array of parts could contain: words, commas in the middle, multiple periods at the end.
 * Sentence making rules:
 *  there must always be a space between words;
 *  there must not be a space between a comma and word on the left;
 *  there must always be one and only one period at the end of a sentence.
 */

/**
 * Combines an array of words into a sentence, handling commas and spaces.
 *
 * @param {string[]} parts - An array of words and punctuation marks.
 * @returns {string} - A sentence formed by joining the words.
 */
function makeSentence(parts) {
  // Array to store words of the new sentence
  const newSentence = []

  // Iterate through each part of the input array
  for (let i = 0; i < parts.length; i++) {
    // Trim spaces from the current word
    let currentWord = parts[i].trim()

    // Push word to the newSentence array if it's not a comma or period
    if (currentWord !== ',' && currentWord !== '.') {
      newSentence.push(currentWord)
    }

    // If the current word is a comma, append it to the previous word in newSentence
    if (currentWord === ',') {
      // Check if newSentence is not empty before appending the comma
      if (newSentence.length > 0) {
        newSentence[newSentence.length - 1] += ','
      }
    }
  }

  // Join the words with spaces and append a period to form the final sentence
  return `${newSentence.join(' ')}.`
}


