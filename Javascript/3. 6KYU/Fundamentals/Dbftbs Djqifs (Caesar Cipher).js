function encryptor(key, message) {
    // Handle keys greater than 26 or less than -26
    key = key % 26;

    // split message into individual chars
    let charsToEncrypt = message.split('')
    const encryptedMessage = []

    // iterate over chars
    for (let i = 0; i < charsToEncrypt.length; i++) {
        // Find current char code
        const currentChar = charsToEncrypt[i]

        // Check if it's a letter
        if ((currentChar >= 'a' && currentChar <= 'z') || (currentChar >= 'A' && currentChar <= 'Z')) {
            const isUpperCase = currentChar === currentChar.toUpperCase()
            const currCharCode = currentChar.charCodeAt(0)

            // add key to current character
            let newCharCode = currCharCode + key

            // Check for overflow (going beyond 'z' in lowercase)
            if (currentChar >= 'a' && currentChar <= 'z') {
                if (newCharCode > 'z'.charCodeAt(0)) {
                    newCharCode -= 26 // Wrap around to 'a'
                } else if (newCharCode < 'a'.charCodeAt(0)) {
                    newCharCode += 26 // Wrap around to 'z'
                }
            }
            // Check for overflow (going beyond 'Z' in uppercase)
            else if (currentChar >= 'A' && currentChar <= 'Z') {
                if (newCharCode > 'Z'.charCodeAt(0)) {
                    newCharCode -= 26 // Wrap around to 'A'
                } else if (newCharCode < 'A'.charCodeAt(0)) {
                    newCharCode += 26 // Wrap around to 'Z'
                }
            }

            // Push new char from char code (current + key) to encrypted Message
            encryptedMessage.push(isUpperCase ? String.fromCharCode(newCharCode) : String.fromCharCode(newCharCode).toLowerCase())
        } else {
            // Keep non-letter characters unchanged
            encryptedMessage.push(currentChar)
        }
    }
    return encryptedMessage.join('')
}
