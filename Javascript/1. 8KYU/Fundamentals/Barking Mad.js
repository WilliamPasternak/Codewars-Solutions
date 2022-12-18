Barking Mad
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
function Dog (breed) {
  this.breed = breed;
  this.bark = function() { return 'Woof'};
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

