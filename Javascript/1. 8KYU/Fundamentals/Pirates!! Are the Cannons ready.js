Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) => {
  for(gunner in gunners){
    const reply = gunners[gunner]
    if(reply !== 'aye') return  'Shiver me timbers!'
  }
  return 'Fire!'
}