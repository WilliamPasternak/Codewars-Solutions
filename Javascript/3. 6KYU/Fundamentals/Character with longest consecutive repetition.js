Character with longest consecutive repetition

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

function longestRepetition(s) {
  let mostReps = 0;
  let char = '';
  let streakLength = 1;
  
  for (let i = 0; i < s.length; i++){
    let currentChar = s[i];
    let nextChar = s[i + 1]
    // If chars match, increase streak count
    if (currentChar === nextChar) streakLength++;
    else {
    // Once chars don't match, update mostReps if needed, establish new char
      if (streakLength > mostReps) {
        mostReps = streakLength;
        char = currentChar;
      }
      // Reset streak length each time a new letter is found
      streakLength = 1;
    }
  }
  return [char, mostReps]
}