/*8 kyu Reversing Words in a String */
// Reverses word order, omits trailing spaces
let reverse = string => string.trim().split(' ').reverse().join(' ')