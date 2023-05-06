Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
   let letters = str.length % 2 === 0 ? str : str + '_'

   let groups = []
   
   for(let i = 0; i < str.length; i+=2){
     if(str[i+1] === undefined) groups.push(str[i] + '_')
     else groups.push(str[i]+str[i+1])
   }
   
 return groups
}