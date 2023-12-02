You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

function recycle(array) {
  const [paper,glass,organic,plastic] = [[],[],[],[]]
    
  // iterate over array, 
  for (let i = 0 ; i < array.length; i++){
    let currItem = array[i]
    let type = currItem.type
    let material = currItem.material
    let secondMaterial = currItem.secondMaterial
    
     // check item's material, push to respective array
    if (material === 'paper') paper.push(type)
    else if (material === 'glass') glass.push(type)
    else  if (material === 'organic') organic.push(type)
    else if (material === 'plastic') plastic.push(type)
    
// check item's second material, push to respective array
    if (secondMaterial){
      if (secondMaterial === 'paper') paper.push(type)
      else if (secondMaterial === 'glass') glass.push(type)
      else  if (secondMaterial === 'organic') organic.push(type)
      else if (secondMaterial === 'plastic') plastic.push(type)
    }

    }
  return [paper,glass,organic,plastic]
  }