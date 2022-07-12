function openOrSenior(data){
  let results = [];
  data.forEach(x => {
    if (x[0] >= 55 && x[1] > 7) results.push('Senior');
    else results.push('Open');
  });
  return results;
}


// Using Map and Data Destructuring
function openOrSenior(data){
  return data.map(([age,handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')
}


