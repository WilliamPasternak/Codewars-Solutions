/* 8 kyu
DNA to RNA Conversion
Create a function which translates a given DNA string into RNA.
*/

function DNAtoRNA(dna) {
 let DNAarray = dna.split('');
  for (let i = 0; i < DNAarray.length; i++){
    if (DNAarray[i] === "T"){
      DNAarray[i] = 'U';
    }
  }

  return DNAarray.join('');
  
  }
  