/* 
8 kyu
Difference of Volumes of Cuboids
*/

function findDifference(a, b) {
 return Math.abs(a.reduce((a,b) => a * b , 1) - b.reduce((a,b) => a * b , 1)  )
}