const assert = require("assert");

function binarySearch(start, end, arr, n) {
  if (start > end) {
    return -1;
  }
  center = Math.floor((end + start) / 2);
  if (n === arr[center]) {
    return center;
  } else if (n > arr[center]) {
    return binarySearch(center + 1, end, arr, n);
  } else if (n < arr[center]) {
    return binarySearch(start, center - 1, arr, n);
  }
}

let arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr2 = [1, 2, 3, 4];
assert.ok(binarySearch(0, arr.length - 1, arr, 3) === 6);
assert.ok(binarySearch(0, arr.length - 1, arr, 12) === -1);
assert.ok(binarySearch(0, arr.length - 1, arr, -3) === 0);
assert.ok(binarySearch(0, arr.length - 1, arr, 11) === 14);
assert.ok(binarySearch(0, arr2.length - 1, arr2, 1) === 0);
assert.ok(binarySearch(0, arr2.length - 1, arr2, 5) === -1);
assert.ok(binarySearch(0, arr.length - 1, arr, 0) === 3);
assert.ok(binarySearch(0, arr.length - 1, arr, -2) === 1);
assert.ok(binarySearch(0, arr.length - 1, arr, -4) === -1);
assert.ok(binarySearch(5, 4, arr, 3) === -1);
assert.ok(binarySearch(0, arr.length - 1, arr, -3) === 0);
assert.ok(binarySearch(0, arr.length - 1, arr, 11) === 14);
let emptyArray = [];
assert.ok(binarySearch(0, emptyArray.length - 1, emptyArray, 1) === -1);
console.log("All tests passed!");