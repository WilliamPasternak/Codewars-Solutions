/*
8 kyu
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
*/

function smash (words) {
  let str = "";
  for (let i = 0; i < words.length; i++){
    str += words[i] + " "
  } 
  
  return str.trim()
  
};