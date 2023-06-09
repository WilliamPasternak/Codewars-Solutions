Duck Duck Goose!

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

const duckDuckGoose = (players, goose) => players[(goose -1) % players.length ].name    
