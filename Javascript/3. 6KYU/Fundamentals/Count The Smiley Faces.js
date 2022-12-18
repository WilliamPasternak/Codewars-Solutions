Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D


function countSmileys(arr) {
  const validEmojis = [":)",":D",":-)",":~)",":-D",":~D",";)",";D",";-)",";~)",";-D",";~D"]
  return arr.filter((emoji) => validEmojis.includes(emoji)).length;
}

// Tests
// Result of function , 'Expected Result'
console.log(countSmileys([':)', ';(', ';}', ':-D']), '2')      
console.log(countSmileys([';D', ':-(', ':-)', ';~)']),'3')     
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']),'1')  
