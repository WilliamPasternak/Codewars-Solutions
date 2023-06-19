Tolkien's Book Cart

Tolkein's publisher wishes to implement an online store for the "Lord of the Rings" and "The Hobbit" books. Each book costs $10. However, if 2 titles are purchased, a 5% discount will be received, i.e. purchasing "Fellowship of the Ring" and "Two Towers" will cost $19. If 3 different titles are purchased, a 10% discount will be received. The purchase of all 4 different titles will receive a 20% discount. An additional single title will be full-price.

function calculateCartTotal(cart_contents){
  const booksSeen = {}
  for (let book of cart_contents){
    if(!(book in booksSeen)){
      booksSeen[book] = 1
    }
    else booksSeen[book] += 1
  }
    
  let discount 
  let uniqueBooks = Object.keys(booksSeen).length
  let numBooksPurchased = cart_contents.length
  
  
// Determine Discount:
    if(uniqueBooks === 2) discount = .05
    else if (uniqueBooks === 3) discount = .10
    else if (uniqueBooks === 4) discount = .20
    else {
      discount = 0
    }
  
  return ( uniqueBooks * 10 ) * (1 - discount) + ((numBooksPurchased - uniqueBooks) * 10)
}