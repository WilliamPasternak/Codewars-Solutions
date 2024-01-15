/**
 * Challenge: Help the Bookseller!
 * Source: https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
 * Description: A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3+ characters. 
 *   The first character of a code is a capital letter which defines the book category.
 *    In the booksellers stocklist each code c is followed by a space and by a positive integer n (int n >= 0) 
 *    which indicates the quantity of books of this code in stock. 
 *    Your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

  
 /**
 * A function to generate stock information based on the list of art pieces and categories.
 *
 * @param {Array} listOfArt - The list of art pieces, each represented as a string.
 * @param {Array} listOfCat - The list of categories to track.
 * @returns {string} - A formatted string containing the stock information for each category.
 */

function stockList(listOfArt, listOfCat){
  // Check for invalid input
  if(listOfArt.length === 0 || listOfCat.length === 0) return ""
  // Create an object to hold categories, and set count to 0.
  const categories = {}
  for(let category of listOfCat){
    categories[category] = 0
  }
 
   // Iterate over list of art:
  for(let i = 0; i < listOfArt.length; i++){
    const currentPiece = listOfArt[i]
    const [category, count] = [currentPiece[0], Number(currentPiece.split(' ')[1])]
    // Update count of category occurances
      categories[category]+= count
  }
   // create array to hold final results.
  let results = []

  // Iterate over categories.
  for(let i = 0; i < listOfCat.length; i++){
    const currentCategory = listOfCat[i]
    // Lookup count of current category in cateogries object
    const categoryCount = categories[currentCategory]
    // Push category and count to the results array in the requested format.
    results.push(`(${currentCategory} : ${categoryCount})`)
  }
  // Return results in the requested format.
  return results.join(' - ')
}

