/*
8 kyu
Welcome!
*/


// Store the langagues as a database
let languages = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}


function greet(language) {
	for(let key in languages){
    if (key === language ){
      return languages[key]
    }
  }
  return languages.english

  
// Return a greeting based on their language
  
  //Default English if language is not availible.
  
  
  
  
}