Reverse Vowels In A String

/* In this kata, your goal is to write a function which will reverse the vowels in a string. 
Any characters which are not vowels should remain in their original position. 

Examples:
"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.
*/

function reverseVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const letters = str.split('');
  let [left, right] = [0, letters.length - 1];

  while (left < right) {
    const leftChar = letters[left].toLowerCase();
    if (!vowels.has(leftChar)) {
      left++;
    }
    const rightChar = letters[right].toLowerCase();
    if (!vowels.has(rightChar)) {
      right--;
    }
    if (vowels.has(leftChar) && vowels.has(rightChar)) {
      swap(left, right, letters);
      left++;
      right--;
    }
  }

  return letters.join('');
}

function swap(left,right,letters){
  [letters[left],letters[right]] = [letters[right],letters[left]]
}