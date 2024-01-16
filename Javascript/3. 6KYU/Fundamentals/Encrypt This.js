/** Challenge: Encrypt This!
 *  Source: https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
 *  Description: You want to create secret messages. Here are the conditions:
      * Your message is a string containing space separated words.
      * You need to encrypt each word in the message using the following rules:
        * The first letter must be converted to its ASCII code.
        * The second letter must be switched with the last letter
        * Keepin' it simple: There are no special characters in the input.
/**
 * Encrypts a message based on specified rules.
 *
 * @param {string} message - The input message containing space-separated words.
 * @returns {string} The encrypted message where each word is encrypted based on rules.
 *
 * @example
 * // Encrypts the word "Hello" as "72olle"
 * encryptThis("Hello")
 */

function encryptThis(message) {
  // Split the message into words
  const words = message.split(" ")

  // Encrypt each word
  const encryptedWords = words.map(word => {
    // Get the ASCII code of the first letter
    const firstCharCode = word.charCodeAt(0)

    // If the word has more than two letters, swap the second and last letters
    if (word.length > 2) {
      const secondChar = word[1]
      const lastChar = word[word.length - 1]
      word = `${firstCharCode}${lastChar}${word.substring(2, word.length - 1)}${secondChar}`
    } else if (word.length === 2) {
      // If the word has only two letters, swap them
      word = `${firstCharCode}${word[1]}`
    } else {
      // If the word has only one letter, use its ASCII code
      word = `${firstCharCode}`
    }
    return word
  })

  // Join the encrypted words and return the result
  return encryptedWords.join(" ")
}

// Tests:
console.log(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
console.log(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")
console.log(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")
console.log(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
console.log(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")


