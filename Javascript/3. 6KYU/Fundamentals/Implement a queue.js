class Queue{
  constructor(){
    this.storage = {}
    this.head = 0
    this.tail = 0
    this.length = 0
  }
   size(){
    if(this.length <0) return 0
     return this.length
  }
  enqueue(element){
    this.storage[this.tail] = element
    this.tail++
    this.length++
  }
  dequeue(){
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    this.length--
    return removed
  }
 
}