Training JS #11: loop statement --break,continue
https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls){
  var bag=[];
 
  for(let i = 0; i < dolls.length; i++){
    if(bag.length === 3) break
    let currItem = dolls[i]
    if (currItem === 'Hello Kitty' || currItem === 'Barbie doll') bag.push(currItem)
    continue
  }
  
  return bag;
}