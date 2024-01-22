/**
 * Challenge: Who won the election?
 * Source: https://www.codewars.com/kata/554910d77a3582bbe300009c/train/javascript
 * Description: 
 * Checks if all elements in the given array are integers.
 *

/**
 * Determine the winner of an election based on a majority of votes.
 *
 * @param {Array} listOfBallots - The list of ballots containing candidate names.
 * @returns {string|null} - The name of the winning candidate or null if there is no majority.
 */
function getWinner(listOfBallots) {
  // Create an object to hold the vote counts for each candidate.
  const candidatesVotes = {};
  
  // Iterate over the list of ballots and count the votes for each candidate.
  for (let candidate of listOfBallots) {
    candidatesVotes[candidate] = (candidatesVotes[candidate] || 0) + 1;
  }

  // Calculate the required majority of votes.
  const majority = listOfBallots.length / 2;

  // Iterate over the candidates and check if any has a vote count greater than the majority.
  for (let candidate in candidatesVotes) {
    if (candidatesVotes[candidate] > majority) {
      return candidate;
    }
  }

  // Return null if no candidate has a majority of votes.
  return null;
}

/**
 * Count the votes for each candidate in the list of ballots.
 *
 * @param {Array} listOfBallots - The list of ballots containing candidate names.
 * @returns {Object} - An object with candidate names as keys and their vote counts as values.
 */
function countVotes(listOfBallots) {
  const candidatesVotes = {};
  for (let candidate of listOfBallots) {
    candidatesVotes[candidate] = (candidatesVotes[candidate] || 0) + 1;
  }
  return candidatesVotes;
}

/**
 * Find the winner based on the votes and a required majority.
 *
 * @param {Object} candidatesVotes - An object with candidate names as keys and their vote counts as values.
 * @param {number} majority - The required majority of votes for a candidate to win.
 * @returns {string|null} - The name of the winning candidate or null if there is no majority.
 */
function findWinner(candidatesVotes, majority) {
  for (let candidate in candidatesVotes) {
    if (candidatesVotes[candidate] > majority) {
      return candidate;
    }
  }
  return null;
}
// Tests:
// 3 votes for "A", 2 votes for "B"  -->  "A" wins.
console.log(getWinner(["A", "A", "A", "B", "B"]),"A")
// 2 votes for "A", 2 votes for "B"  -->  No winner.
console.log(getWinner(["A", "A", "B", "B"]),"null")
// 1 vote for each name --> No winner.
console.log(getWinner(["A", "B", "C", "D"]),"null")
// # 3 votes for "A", 2 votes for "B", 1 vote for "C"  -->  no winner, as "A" does not have more than n / 2 = 3 votes
console.log(getWinner(["A", "A", "A", "B", "B", "C"]),"null")