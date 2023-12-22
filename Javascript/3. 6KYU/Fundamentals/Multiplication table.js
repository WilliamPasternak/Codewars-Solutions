Multiplication table
Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3: [[1,2,3],[2,4,6],[3,6,9]]

/*
* Creates a nested array representing a multiplication table given a starting size.  
* param {number} size - Length of first row of multiplication table.
* return {array} - An array representing each row of a mutiplication table.
*/

multiplicationTable = function(size) {
  // Early returns
  if(!size) return []
  if(size === 1) return [[1]]
  
  // create first array/row and fill it with #s from 1 - size. 
  const firstRow = Array.from({length:size},(_,index) => index + 1)
  
  // create an array to hold sub arrays
  const multiplicationTable = [firstRow]
  
  // while size of first array is not size
  for(let i = 1; i < size; i++){
     // map first array, and multiply by current size of array.
    const nextRow = firstRow.map(value => value * (i + 1))
    multiplicationTable.push(nextRow)
  }
  return multiplicationTable
}
