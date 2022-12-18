Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.

class Cat extends Animal {
  constructor(name){
   super(name)
   this.name = name
 }
  speak(){
    return `${this.name} meows.`
  }
}