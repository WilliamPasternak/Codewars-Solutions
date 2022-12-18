Character Frequency
Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.
function charFreq(message) {
  let dictionary = {}
  for(let char of message){
      dictionary[char] = (dictionary[char] || 0) + 1
    }
    return dictionary
  }