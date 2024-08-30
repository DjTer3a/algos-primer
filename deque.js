/*
node = {
    value,
    next,
    prev
};

deque = {
this.head,
this.tail,
length
}

functions:

add to this.head
add to this.tail
remove from this.head
remove from this.tail
traverse through (goToNext, goToPrev)
printList
find

this.size

*/

const assert = require("assert");
class Deque {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  addToHead(value) {
    if (this.size === 0) {
      this.head = this.tail = { value, next: null, prev: null };
    } else if (this.size === 1) {
      let newNode = { value, next: this.tail, prev: null };
      this.head = newNode;
      this.tail.prev = this.head;
    } else {
      let newNode = { value, next: this.head, prev: null };
      this.head = newNode;
    }
    return ++this.size;
  }

  addToTail(value) {
    if (this.size === 0) {
      this.head = this.tail = { value, next: null, prev: null };
    } else if (this.size === 1) {
      let newNode = { value, next: null, prev: this.head };
      this.tail = newNode;
      this.head.next = this.tail;
    } else {
      let newNode = { value, next: null, prev: this.tail };
      this.tail = newNode;
    }
    return ++this.size;
  }

  removeFromHead() {
    if (this.size === 0) {
      console.error("can't do that");
      return null;
    } else if (this.size === 1) {
      --this.size;
      let value = this.head.value;
      this.head = this.tail = null;
      return value;
    } else {
      --this.size;
      let newNode = this.head.next;
      let value = this.head.value;
      this.head = { value: newNode.value, prev: null, next: newNode.next };
      return value;
    }
  }

  removeFromTail() {
    if (this.size === 0) {
      console.error("can't do that");
      return null;
    } else if (this.size === 1) {
      --this.size;
      let value = this.head.value;
      this.head = this.tail = null;
      return value;
    } else {
      --this.size;
      let newNode = this.tail.prev;
      let value = this.tail.value;
      this.tail = { value: newNode.value, prev: newNode.prev, next: null };
      return value;
    }
  }

  goToNext(node) {
    return node.next;
  }

  goToPrev(node) {
    return node.prev;
  }

  print() {
    let node = this.head;
    let string = "[";
    do {
      string += node.value + " , ";
      node = this.goToNext(node);
    } while (node);
    string += "]";
    console.log(string);
  }

  find(value) {
    let node = this.head;
    do {
      if (node.value === value) {
        return node;
      } else {
        node = this.goToNext(this.head);
      }
    } while (node !== null);
  }
}

function createDeque() {
  return new Deque();
}

// Create a new deque
const deque = createDeque();

// Test addToHead and size
assert.strictEqual(
  deque.addToHead(1),
  1,
  "Size should be 1 after adding to head",
);
assert.strictEqual(
  deque.addToHead(2),
  2,
  "Size should be 2 after adding to head again",
);

// Test addToTail
assert.strictEqual(
  deque.addToTail(3),
  3,
  "Size should be 3 after adding to tail",
);

// Test removeFromHead
assert.strictEqual(deque.removeFromHead(), 2, "Should remove 2 from head");
assert.strictEqual(deque.size, 2, "Size should be 2 after removing from head");

// Test removeFromTail
assert.strictEqual(deque.removeFromTail(), 3, "Should remove 3 from tail");
assert.strictEqual(deque.size, 1, "Size should be 1 after removing from tail");

// Test goToNext and goToPrev
deque.addToTail(4);
assert.strictEqual(
  deque.goToNext(deque.head).value,
  4,
  "Next node should have value 4",
);
assert.strictEqual(
  deque.goToPrev(deque.tail).value,
  1,
  "Previous node should have value 1",
);

// Test find
const foundNode = deque.find(4);
assert.ok(foundNode, "Should find node with value 4");
assert.strictEqual(foundNode.value, 4, "Found node should have value 4");

// Test edge cases
const emptyDeque = createDeque();
assert.strictEqual(
  emptyDeque.removeFromHead(),
  null,
  "Removing from empty deque should return null",
);
assert.strictEqual(
  emptyDeque.removeFromTail(),
  null,
  "Removing from empty deque should return null",
);

assert.strictEqual(
  emptyDeque.addToHead(1),
  1,
  "Size should be 1 after adding to head",
);
assert.strictEqual(
  emptyDeque.addToHead(2),
  2,
  "Size should be 2 after adding to head again",
);

deque.print();
emptyDeque.print();
console.log("All tests passed!");
