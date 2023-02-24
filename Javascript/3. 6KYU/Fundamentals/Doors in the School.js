Doors in the school

In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming.There are exactly N children studying in this school, and they come one by one.

When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

You need to count how many doors are left opened after all the students have come.
Example:
(0 = Closed, 1 = Open)
00000
11111
10101
10001
10011
10010


function doors(n){
  const openDoors = new Array(n).fill(false)
  for(let i = 0; i < n; i++){
    let student = i
    while(student < openDoors.length){
      openDoors[student] = !openDoors[student]
      student += (i + 1)
    }
  }

  let numOpenDoors = 0
  for(let i = 0; i < openDoors.length; i++){
    if(openDoors[i] === true) numOpenDoors++
  }
 
  return numOpenDoors
}



// Alternate Solution
const doors = n => Math.sqrt(n) | 0

