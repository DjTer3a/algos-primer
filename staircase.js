/* 
n + n-1 + n-2
fibonacci sequence
n = 2, n-1 = 1, n-2 = 1
f(0) = 1, f(1) = 1, f(2) = 2, f(3) = 4, f(4) = 7, f(5) = 13
*/
const assert = require("assert");

function calculateSum(n) {
  let a = 1;
  let b = 1;
  let c = 2;
  if (n <= 1) {
    return a;
  }
  if (n == 2) {
    return c;
  }
  for (let i = 3; i <= n; i++) {
    let temp;
    temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }
  return c;
}

assert.ok(parseInt(calculateSum(4)) === 7);
assert.ok(parseInt(calculateSum(2)) === 2);
assert.ok(parseInt(calculateSum(0)) === 1);
assert.ok(parseInt(calculateSum(1)) === 1);
assert.ok(parseInt(calculateSum(5)) === 13);
assert.ok(parseInt(calculateSum(3)) === 4);
