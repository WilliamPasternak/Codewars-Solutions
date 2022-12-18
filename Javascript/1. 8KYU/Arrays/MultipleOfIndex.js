/* 
Multiple of index
Return a new array consisting of elements which are multiple of their own index 
*/

let multipleOfIndex = array => array.filter((x,i) => x % i === 0)
