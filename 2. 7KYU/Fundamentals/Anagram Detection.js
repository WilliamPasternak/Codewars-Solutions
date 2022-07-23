function isAnagram(test,original){
	return sortWord(test) === sortWord(original)
}

function sortWord(word){
	return word.toLowerCase().split('').sort().join('')
}

// Shortened
let sortWord = word => word.toLowerCase().split('').sort().join('')
let isAnagram = (test,original) => sortWord(test) === sortWord(original)