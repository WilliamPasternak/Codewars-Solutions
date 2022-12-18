In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

Strings will be lowercase only, no spaces. See test cases for more examples.


function dup(s) {
return s.map(string => string.split('')
         .filter((char,index,arr) => char !== arr[index +1] )
         .join(''))
};

// Tests
console.log(dup(["abracadabra","allottee","assessee"]), '["abracadabra","alote","asese"]')
console.log(dup(["kelless","keenness"]), '["keles","kenes"]')
