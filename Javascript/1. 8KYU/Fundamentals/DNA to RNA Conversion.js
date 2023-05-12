DNA to RNA Conversion

Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  let molecules = dna.split('')
  
  for(let i = 0; i < molecules.length; i++){
    if(molecules[i] === 'T') molecules[i] = 'U'
  }
  return molecules.join('')
}