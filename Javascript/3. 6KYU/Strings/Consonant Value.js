Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

function solve(str) {
   let values ={'a':0,'b':2,'c':3,'d':4,'e':0,'f':6,'g':7,'h':8,'i':0,'j':10,'k':11,'l':12, 'm':13,'n':14,'o':0,'p':16,'q':17,'r':18,'s':19,'t':20,'u':0,'v':22,'w':23, 'x':24,'y': 25, 'z': 26}
  
   let [currentTotal,highestValue] = [0,0]
   const strVals = str.split('').map(char => values[char])
  
for(let char of strVals){
   char === 0 ? currentTotal = 0 : currentTotal+= char  
   if(currentTotal > highestValue) highestValue = currentTotal
}
return highestValue
}

console.log(solve("zodiac"),'26');
console.log(solve("chruschtschov"),'80');
console.log(solve("khrushchev"),'38');
console.log(solve("strength"),'57');
console.log(solve("catchphrase"),'73');
console.log(solve("twelfthstreet"),'103');
console.log(solve("mischtschenkoana"),'80');