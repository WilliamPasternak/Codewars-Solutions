Simple Fun #30: Strings Construction

How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

function stringsConstruction(A, B) {  
  const letterCountA = {};
  const letterCountB = {};

  for (let letter of A) {
    letterCountA[letter] = (letterCountA[letter] || 0) + 1;  
  }

  for (let letter of B) {
    letterCountB[letter] = (letterCountB[letter] || 0) + 1;  
  }

  let minPotentialTime = Infinity;

  for (let char of A) {
    const charCountA = letterCountA[char] || 0;
    const charCountB = letterCountB[char] || 0;

    if (charCountA === 0 || charCountB === 0) {
      return 0; // Early exit if any required letter is missing in B
    }

    let potential = Math.floor(charCountB / charCountA);
    minPotentialTime = Math.min(minPotentialTime, potential);
  }

  return minPotentialTime;
}
