The Book of Mormon - https://www.codewars.com/kata/58373ba351e3b615de0001c3/train/javascript

function mormons(startingNumber, reach, target) {
    // check if startingNumber is greater than target
  if(startingNumber > target) return 0
  let numMissions = 0
  let currentMormons = startingNumber
  while (currentMormons < target) {
    const convertedThisMission = currentMormons * reach
    currentMormons += convertedThisMission
    numMissions++
  }
  return numMissions
}