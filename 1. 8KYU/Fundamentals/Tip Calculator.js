Tip Calculator
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
rating = rating.toLowerCase()
  
  let tips = {
    terrible: 0,
    poor: 0.05,
    good: 0.10,
    great: 0.15,
    excellent: 0.20
  }
  
  return rating in tips ?  Math.ceil(amount * tips[rating]) : 'Rating not recognised'
}