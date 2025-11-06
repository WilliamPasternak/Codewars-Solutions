Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


var uniqueInOrder=function(iterable){
  // Edge Case 1: No length -
  if (!iterable.length) return []
   
  // Edge Case 2: Single element in iterable -
  if (iterable.length === 1) return [iterable[0]]
 

 const unique = []
 let left = 0
 let right = 1

 while (left < iterable.length){
  // Characters are Equal
   if (iterable[left] === iterable[right]) {
     right++
   }
  // Characters are Not Equal
   if (iterable[left] !== iterable[right]){
     unique.push(iterable[left])
     left = right
     right = left + 1
   }
 }
  return unique
}


// Tests:
console.log(uniqueInOrder('AAAABBBCCDAABBB'), "=> ['A','B','C','D','A','B']");
console.log(uniqueInOrder('ABBCcAD'), "=> ['A','B','C','c','A','D']");
console.log(uniqueInOrder([1,2,2,3,3]), "=> [1,2,3]");

