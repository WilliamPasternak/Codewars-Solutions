/*8 kyu
Gravity Flip */

const flip=(d, a)=>{
  if(d === 'R'){
    //sort low to high
   return a.sort( (x,y) => x - y)
  }
  else if(d === 'L'){
    //sort high to low
   return  a.sort((x,y) => x - y).reverse()
  }
}