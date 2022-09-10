Number Of Occurrences
Write a function that returns the number of occurrences of an element in an array.

Array.prototype.numberOfOccurrences = function(num) {
const frequencies = {}
for(let num of this){
	frequencies[num] = (frequencies[num] || 0 ) + 1
}
return frequencies[num]

}
