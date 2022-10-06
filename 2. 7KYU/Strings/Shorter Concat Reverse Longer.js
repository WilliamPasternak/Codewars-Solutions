Challenge:
Shorter Concat [reverse longer]
Description:
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

function shorter_reverse_longer(a,b){
  let shortest = a.length < b.length? a : b
  let longest = a.length >= b.length ? a : b
return `${shortest}${longest.split('').reverse('').join('')}${shortest}`
}
