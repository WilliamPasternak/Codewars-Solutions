/* 
8 kyu
Grasshopper - Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
*/

function getGrade (s1, s2, s3) {
 let average = (s1 + s2 + s3 ) / 3
 if (average < 60){
   return 'F'
 }
   else if (average < 70){
   return 'D'
 }
  else if (average < 80){
   return 'C'
 }
  else if (average < 90){
   return 'B'
 }
  return 'A'
}