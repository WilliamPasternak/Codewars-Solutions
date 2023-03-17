New Cashier Does Not Know About Space or Shift

Some new cashiers started to work at your restaurant.
They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:
"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:
"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.
The menu items are fairly simple, there is no overlap in the names of the items:


function getOrder(input) {
  let [burgers,fries,chicken,pizza,sandwich,onionrings,milkshake,coke] = [[],[],[],[],[],[],[],[],]
  const newOrder = [burgers, fries, chicken, pizza, sandwich, onionrings, milkshake, coke]
  
   let currentWord = ''
   for(let char of input){
     currentWord+= char
     if(currentWord === 'burger'){
       burgers.push('Burger')
       currentWord = ''
     }
    else if(currentWord === 'fries'){
      fries.push('Fries')
      currentWord = ''
     }
    else if(currentWord === 'chicken'){
      chicken.push('Chicken')  
      currentWord = ''
     }
    else if(currentWord === 'pizza'){
      pizza.push('Pizza')
      currentWord = ''
     }
    else if(currentWord === 'sandwich'){
      sandwich.push('Sandwich')
      currentWord = ''
     }
    else if(currentWord === 'onionrings'){
      onionrings.push('Onionrings')
      currentWord = ''
     }
     else if(currentWord === 'milkshake'){
       milkshake.push('Milkshake')
       currentWord = ''
     }
     else if(currentWord === 'coke'){
      coke.push('Coke')
       currentWord = ''
     }
     
     
   }
  
  return newOrder.flat().join(' ')
}