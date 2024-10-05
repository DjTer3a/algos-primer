/* 
base case:
if sawps === 0 
    return

pre recurse:
    go through and move values around then partition

recursion
    qs(left half) qs(right half)
post recurse
    return arr
*/

function swap(arr, i, m) {
  let temp = arr[i];
  arr[i] = arr[m];
  arr[m] = temp;
}

function qs(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  let m = lo;
  for (let i = lo + 1; i <= hi; i++) {
    if (arr[i] < arr[lo]) {
      swap(arr, i, ++m);
    }
  }
  swap(arr, m, lo);
  qs(arr, lo, m - 1);
  qs(arr, m + 1, hi);
}

let test = [4, 3, 6, 2, 5, -1, 99, 1029, -93232];
qs(test, 0, test.length);
console.log(test);
