Calculate Price Excluding VAT
Write a function that calculates the original product price, without VAT. Vat is 15%

function excludingVatPrice(price){
  let subTotal =  price - ((price / (1 + .15)) * .15)
  return subTotal.toFixed(2)
}