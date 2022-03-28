
/* 8 kyu  
Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
4
​
5
As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
6
​
7
*/
8
​
9
function monkeyCount(n) {
10
  let numMonkeys = []
11
  for (let i = 1; i <= n; i++){
12
    numMonkeys.push(i)
13
  }
14
  return numMonkeys
15
  }
16
  
