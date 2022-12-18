Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


function longest(s1,s2){
	// Create a set passing in all letters from S1 & S2
	let uniqueLetters = new Set((s1 + s2).split(''))
  // Convert Set to Array, sort alphabetically, join and return as string
	return Array.from(uniqueLetters).sort().join('')
}