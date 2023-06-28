Cats and shelves

An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), Find the minimum number of jumps to go from start to finish

function solution(start, finish) {
  let [numJumps,currLevel] = [0,start]

  while(finish - currLevel >= 3){
    currLevel += 3
    numJumps++
  }
  while(currLevel < finish){
    currLevel++
    numJumps++
  }
  return numJumps
}