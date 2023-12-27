/*
* Challenge: Maze Runner
* Source: https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript
* Description: You will be given a 2D array of the maze and an array of directions. 
* Your task is to follow the directions given. If you reach the end point before 
* all your moves have gone, you should return Finish. 
* If you hit any walls or go outside the maze border, you should return Dead. 
* If you find yourself still in the maze after using all the moves, you should return Lost.
*/

/*
* Returns game end state after following all directions
@param {array} maze - Nested array representing a maze with numerical values 0 - 3
@param {array} directions - Array of directions consisting of 'N','S','E','W'.
*/

function mazeRunner(maze, directions) {
  // Find starting position:
  let [yPosition, xPosition] = findStartingPoint(maze);
  // Iterate over directions array
  for (let i = 0; i < directions.length; i++) {
    // Update x & y coordinates.
    [yPosition, xPosition] = moveCharacter(directions[i], yPosition, xPosition);
    // Verify result of move using the new function:
    const moveResult = verifyMove(yPosition, xPosition, maze);
    if (moveResult !== null) {
      return moveResult;
    }
  }
  // If no moves left, return 'Lost'
  return 'Lost';
}

function findStartingPoint(maze) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        return [i, j];
      }
    }
  }
}

function moveCharacter(direction, yPosition, xPosition) {
  if (direction === 'N') {
    yPosition--;
  } else if (direction === 'S') {
    yPosition++;
  } else if (direction === 'E') {
    xPosition++;
  } else if (direction === 'W') {
    xPosition--;
  }
  return [yPosition, xPosition];
}

function verifyMove(yPosition, xPosition, maze) {
  // Check if outside of Maze Border:
  if (
    yPosition < 0 ||
    yPosition >= maze.length ||
    xPosition < 0 ||
    xPosition >= maze[yPosition].length
  ) {
    return 'Dead';
  }

  // Check if Wall hit:
  if (maze[yPosition][xPosition] === 1) {
    return 'Dead';
  }

  // Check if Exit reached:
  if (maze[yPosition][xPosition] === 3) {
    return 'Finish';
  }

  // If no special conditions met, return null to indicate a valid move.
  return null;
}
