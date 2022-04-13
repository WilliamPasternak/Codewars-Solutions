/* 8 kyu
The Feast of Many Beasts
There is just one rule: the dish must start and end with the same letters as the animal's name. 
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
*/

function feast(beast, dish) {
return (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1])
}