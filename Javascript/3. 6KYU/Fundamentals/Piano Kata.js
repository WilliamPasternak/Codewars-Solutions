**
 * Challenge: Piano Kata, Part 1
 * Source: https://www.codewars.com/kata/589273272fab865136000108/train/javascript
 * Description: Given a number, determine if you will land on a white or black key on a standard 88-key, keyboard.

function blackOrWhiteKey(keyPressCount) {
    let keys = [ "white", "black", "white", "white", "black", "white", "black", "white", "white", "black", "white", "black" ];
    return keys[((keyPressCount - 1) % 88) % 12];
}