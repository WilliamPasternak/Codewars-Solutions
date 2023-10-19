Flick Switch

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr){
  let returning = true
    return arr.map( (word) => {
      return (word === 'flick') ? returning = !returning : returning;
    })
}