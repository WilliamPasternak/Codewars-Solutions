Fuel Calculator: Total Cost

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

function fuelPrice(litres, pricePerLitre) {
  let savingsPerLiter = 0
    if(litres >= 10) savingsPerLiter = 0.25
      else if(litres >= 8) savingsPerLiter = 0.20
      else if(litres >= 6) savingsPerLiter = 0.15
      else if(litres >= 4) savingsPerLiter = 0.10
      else if(litres >= 2) savingsPerLiter = 0.05
    const total = (litres * pricePerLitre) - (litres * savingsPerLiter)
    return +total.toFixed(2)
}
