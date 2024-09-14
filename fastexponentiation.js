// idea:
// divide by 2 and -2 every time add recursively
// base case n === 0
// pre-recurse
// n-2
// recurse (a, half) * (a, half)
// post

function fastexponentiation(a, n) {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    let half = n / 2;
    let result = fastexponentiation(a, half);
    return result * result;
  } else {
    return a * fastexponentiation(a, n - 1);
  }
}

console.log(fastexponentiation(2, 11));

//iterative approach
function fastIterative(a, n) {
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      result *= a;
      --n;
    } else {
      a *= a;
      n /= 2;
    }
  }

  return result;
}

console.log(fastIterative(2, 11));
