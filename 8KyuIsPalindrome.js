/*8 kyu
Is it a palindrome?*/

function isPalindrome(x) {
return x.toUpperCase() === x.toUpperCase().split('').reverse().join('')
}