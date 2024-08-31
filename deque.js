/*
node = {
    value,
    next,
    prev
};

deque = {
head,
tail,
length
}

functions:

add to head
add to tail
remove from head
remove from tail
traverse through (goToNext, goToPrev)
printList
find

size

*/

const assert = require("assert");
let size = 0
let head = tail = null


function addToHead(value){
  let newNode = {value, next: null, prev: null}
  if(size === 0){
    head = tail = newNode
  }
  else{
    newNode.next = head
    head.prev = newNode
    head = newNode
  }
  return ++size
}

function addToTail(value){
  let newNode = {value, next: null, prev: null}
  if(size === 0){
    head = tail = newNode
  }
  else{
    newNode.prev = tail
    tail.next = newNode
    tail = newNode
  }
  return ++size
}

function removeFromHead(){
  if(size === 0){
    console.error("can't do that")
    return null
  }
  else if(size === 1){
    head = tail = null
  }
  else{
    head = head.next
    head.prev = null
  }
  return --size
}

function removeFromTail(){
  if(size === 0){
    console.error("can't do that")
    return null
  }
  else if(size === 1){
    head = tail = null
  }
  else{
      tail = tail.prev
      tail.next = null
  }
  return --size
}

function goToNext(node){
  return node?.next
}

function goToPrev(node){
  return node?.prev
}

function find(value){
  let node = head
  while(node){
    if(node.value === value){
      return node
    }
    else{
      node = goToNext(node)
    }
  }
  return null
}

function removeValue(value){
  let node = head
  while(node){
    if(node.value === value){
      node.next = node.next?.next
      node.prev = node.prev?.prev
      return value
    }
    else{
      node = goToNext(node)
    }
  }
  return null
}

function print(){
  let node = head
  let string = "["
  while(node){
    string += node.value + " , "
    node = goToNext(node)
  }
  string +="]"
  console.log(string)
}

print()
console.log("addToHead(1)" , addToHead(1) )
console.log("addToTail(2)" , addToTail(2) )
console.log("addToHead(3)" , addToHead(3) )
console.log("addToTail(4)" , addToTail(4) )
console.log("addToHead(5)" , addToHead(5) )
console.log("addToTail(6)" , addToTail(6) )
console.log("addToHead(7)" , addToHead(7) )
print()
console.log("addToTail(8)" , addToTail(8) )
console.log("addToHead(9)" , addToHead(9) )
console.log("addToTail(10)" , addToTail(10) )
print()

console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )

console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromHead()" , removeFromHead() )
console.log("removeFromHead()" , removeFromHead() )
console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )
console.log("removeFromTail()" , removeFromTail() )

print()
