What century is it?

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

function whatCentury(year){
 let base = Number(year.slice(0,2))
 let years = Number(year.slice(2))
 let century = years > 0 ? `${base + 1}` : `${base}`

 // Checks the last digit of the century and handles special cases for '11', '12', & '13'.
 if(century.endsWith('1') && century !== '11') return century + 'st'
 else if(century.endsWith('2') && century !== '12') return century + 'nd'
 else if(century.endsWith('3') && century !== '13') return century + 'rd'
 else return century + 'th'
}