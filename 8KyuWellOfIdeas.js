/* 
8 kyu
Well of Ideas -
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
let goodIdeas = x.filter(item => item.includes('good'))
if(goodIdeas.length <= 0){
  return "Fail!"
}
  else if (goodIdeas.length > 2){
    return "I smell a series!"
  }
  else {
    return "Publish!"
  }
}