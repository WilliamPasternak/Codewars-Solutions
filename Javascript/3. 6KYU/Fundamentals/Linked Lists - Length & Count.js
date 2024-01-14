/*
Linked Lists - Length & Count
Implement Length() to count the number of nodes in a linked list.
Implement Count() to count the occurrences of an integer in a linked list.
*/
function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  let length = 0
  let current = head
  while (current) {
    length++
    current = current.next
  }
  return length
}

function count(head, data) {
  let count = 0
  let current = head
  while (current) {
    if(current.data === data){
      count++
    } 
    current = current.next
  }
  return count
}