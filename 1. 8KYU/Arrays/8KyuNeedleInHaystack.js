/* 
8 kyu
A Needle in the Haystack
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:
*/


function findNeedle(haystack) {
  let needleLocation = haystack.indexOf('needle')
  return `found the needle at position ${needleLocation}`
}