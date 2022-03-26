/* 
8 kyu
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/


function abbrevName(name){
    let firstInitial = name[0].toUpperCase()
    let lastInitial = name[name.indexOf(' ')+1].toUpperCase()
    return `${firstInitial}.${lastInitial}`
    
}

// function abbrevName(name){
//     return name[0].toUpperCase() + "." + name[name.indexOf(' ')+1].toUpperCase()
// }




