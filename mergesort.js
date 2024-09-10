function merge(left, right) {
  let mergedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  return [...mergedArr, ...left, ...right];
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
}

let test = [1, 2, 9213321, 31220, 89, 90, 1232];
console.log(mergesort(test));
