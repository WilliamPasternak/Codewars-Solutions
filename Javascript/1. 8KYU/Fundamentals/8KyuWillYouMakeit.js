/* 
8 kyu
Will you make it?
Write a function that tells you if it is possible to get to the pump or not. 
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 return distanceToPump <= mpg * fuelLeft ? true :false
};