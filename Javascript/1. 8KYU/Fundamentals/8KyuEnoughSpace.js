/* 
8 kyu
Will there be enough space?
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
*/
function enough(cap, on, wait) {
  if (on + wait < cap){
    return 0
  }
  return Math.abs(cap - on - wait)
}