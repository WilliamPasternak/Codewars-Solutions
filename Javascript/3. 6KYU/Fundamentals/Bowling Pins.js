Challenge: Bowling Pins

You will get an array of integers between 1 and 10, e.g. [3, 5, 9], and have to remove them from the field like this:
I I   I
 I   I
  I   
   I   

function bowlingPins(arr){
  const fields = [
    [7, ' ', 8, ' ', 9, ' ', 10],
    [' ', 4, ' ', 5, ' ', 6, ' '],
    [' ', ' ', 2, ' ', 3, ' ', ' '],
    [' ', ' ', ' ', 1, ' ', ' ', ' ']
  ]
  
  return fields.map(field => 
     field.map(pin => {
      if (typeof pin === 'number') {
        return arr.includes(pin) ? ' ' : 'I'
      }
      return pin
    }).join('')
  ).join('\n')
}