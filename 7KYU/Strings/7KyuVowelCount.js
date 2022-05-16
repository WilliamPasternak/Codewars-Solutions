/*
7 kyu
Vowel Count
Return the number (count) of vowels in the given string.
*/


function getCount(str) {
  var vowelsCount = 0;
  
for (let i=0; i< str.length; i++){
  if(str[i]==="a"|| 
     str[i]==="e"|| 
     str[i]==="i"|| 
     str[i]==="o"|| 
     str[i]==="u" ) {
    vowelsCount++
  }
}
  
  return vowelsCount;
}