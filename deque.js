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
  if(size === 0){
    console.log("can't do that")
  }
  else{
    let node = head
    while(node){
      if(node.value === value){
        if(node === head){
          removeFromHead()
          return value
        }
        else if(node === tail){
          removeFromTail()
          return value
        }
        else{
          --size
          node.prev.next = node.next
          node.next.prev = node.prev
          node = null
          return value
        }
      }
      else{
        node = goToNext(node)
      }
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


// Test suite
function runTests() {
  // Test addToHead and addToTail
  assert.strictEqual(addToHead(1), 1, "addToHead should return 1");
  assert.strictEqual(addToTail(2), 2, "addToTail should return 2");
  assert.strictEqual(addToHead(3), 3, "addToHead should return 3");
  print()

  // Test removeFromHead and removeFromTail
  assert.strictEqual(removeFromHead(), 2, "removeFromHead should return 2");
  assert.strictEqual(removeFromTail(), 1, "removeFromTail should return 1");
  print()

  // Test edge cases
  assert.strictEqual(removeFromHead(), 0, "removeFromHead should return 0");
  assert.strictEqual(removeFromHead(), null, "removeFromHead should return null for empty list");
  assert.strictEqual(removeFromTail(), null, "removeFromTail should return null for empty list");
  print()

  // Test find
  addToHead(5);
  addToTail(10);
  addToHead(15);
  assert.strictEqual(find(10).value, 10, "find(10) should return node with value 10");
  assert.strictEqual(find(20), null, "find(20) should return null");
  print()

  // Test removeValue
  assert.strictEqual(removeValue(5), 5, "removeValue(5) should return 5");
  assert.strictEqual(removeValue(15), 15, "removeValue(15) should return 15");
  assert.strictEqual(removeValue(10), 10, "removeValue(10) should return 10");
  print()

  // Test traversal
  addToHead(1);
  addToTail(2);
  addToTail(3);
  let node = head;
  assert.strictEqual(goToNext(node).value, 2, "goToNext should return node with value 2");
  assert.strictEqual(goToPrev(tail).value, 2, "goToPrev should return node with value 2");
  print()

  console.log("cool circular refrence log: ", head)
  console.log("All tests passed!");
}

runTests();