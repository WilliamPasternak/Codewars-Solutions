function solve(characters){
   let [uppercase, lowercase, numbers, specialCharacters] = [0, 0, 0, 0];
    
   for (let i = 0; i < characters.length; i++){
     let charCode = characters.charCodeAt(i);
     
     if (charCode >= 65 && charCode <= 90) {
       uppercase++
     }
     else if (charCode >= 97 && charCode <= 122) {
       lowercase++
     }
     else if (charCode >= 48 && charCode <= 57) {
       numbers++
     }
     else {
       specialCharacters++
     }
   }
   
   return [uppercase, lowercase, numbers, specialCharacters]
}
