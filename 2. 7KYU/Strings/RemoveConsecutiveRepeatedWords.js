Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

/* Original
function removeConsecutiveDuplicates(s){
	const results = []
	const words = s.split(' ')
	for(let i = 0; i < words.length; i++){
	if(words[i] !== words[i +1]){
		results.push(words[i])
	}
}
return results.join(' ')
} 
*/

// Refactored
function removeConsecutiveDuplicates(str) {
  return str
    .split(" ")
    .filter((word, index, arr) => word !== arr[index + 1])
    .join(" ");
}