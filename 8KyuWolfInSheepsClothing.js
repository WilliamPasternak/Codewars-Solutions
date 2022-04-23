/*8 kyu
A wolf in sheep's clothing */

function warnTheSheep(queue) {
    // search for index of wolf
  const wolfLocation = queue.indexOf('wolf')
  if (wolfLocation === queue.length -1){
    return 'Pls go away and stop eating my sheep'
  }
  else {
    const sheepToBeEaten = queue.length - ( wolfLocation + 1)
    return `Oi! Sheep number ${sheepToBeEaten}! You are about to be eaten by a wolf!`
  }
 

}