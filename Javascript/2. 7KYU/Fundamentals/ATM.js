ATM

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

function solve(n) {
 if(n % 10 !== 0) return -1
 let [numBills, changeRemaining] = [0, n]
 
 while(changeRemaining > 0){
   // If possible give 500, then 200, ..., 10
   if(changeRemaining >= 500){
     changeRemaining -= 500
     numBills++
   }
   else if(changeRemaining >= 200){
     changeRemaining -= 200
     numBills++
   }
    else if(changeRemaining >= 100){
     changeRemaining -= 100
     numBills++
   }
    else if(changeRemaining >= 50){
     changeRemaining -= 50
     numBills++
   }
    else if(changeRemaining >= 20){
     changeRemaining -= 20
     numBills++
   }
    else if(changeRemaining >= 10){
     changeRemaining -= 10
     numBills++
   }
 }
return numBills
}