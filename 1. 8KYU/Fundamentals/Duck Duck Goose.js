Duck Duck Goose
Task: Given an array of Player objects and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

function duckDuckGoose(players, goose) {
return players[(goose -1) % players.length].name
  }

  // Refactored: 
  let duckDuckGoose = (players, goose) => players[(goose -1) % players.length].name
