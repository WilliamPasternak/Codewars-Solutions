Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
  let words = string.split(' ')
  for(let i = 0; i < words.length; i++){
    if(words[i].length >= 5){
      words[i] = words[i].split('').reverse().join('')
    }
  }
  return words.join(' ')
}