/*8 kyu
Find the Difference in Age between Oldest and Youngest Family Members
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

// P: Unsorted Array of Ages (whole numbers).
// R: Array, with youngest age, oldest age, and difference
// E: [10,31,99,24] => [ 10 , 99 , 89 ] 
// P: find min, find max, return difference

function differenceInAges(ages){
  const max = Math.max(...ages);
  const min = Math.min(...ages);
  return [min, max, max-min];
}