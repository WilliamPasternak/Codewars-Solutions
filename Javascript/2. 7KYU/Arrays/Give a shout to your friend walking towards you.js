Give a shout to your friend walking towards you
Write the function madShout that takes a string input sidewalk to calculate the shout string and return it.

The shout phrase is "Oi F!" but depending on the distance between your friend, the word expands.

Difference is 4 => 'Oii F!'
2 => 'Oi F!'
9 => 'Oiiiii F!'
0 => 'Oi F!'
1 => 'Oi F!'
20 => 'Oiiiiiiiiii F!'

function madShout(sidewalk){
  const difference = sidewalk.indexOf('F') - sidewalk.indexOf('Y')
  if(difference <= 1) return 'Oi F!'
  const is = new Array(Math.ceil(difference / 2)).fill('i').join('')
  return `O${is} F!`
}