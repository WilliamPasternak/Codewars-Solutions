The Average Length
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3



// Refactored
function averageLength(arr) { 
	const avgLength = Math.round(arr.join('').length / arr.length)
	return arr.map(el => el[0].repeat(avgLength ) )
}

// Original
function averageLength(arr) { 
	let avgLength = Math.round((arr.map(el => el.length).reduce((acc,cur) => acc + cur , 0) ) / arr.length)
	return arr.map(el => el[0].repeat(avgLength ) )
}
