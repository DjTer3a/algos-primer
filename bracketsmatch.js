const assert = require("assert");

function isBalanced(brackets) {
  const stack = [];
  const chars = { "{": "}", "[": "]", "(": ")" };
  const keys = Object.keys(chars);
  const values = Object.values(chars);
  for (let i = 0; i < brackets.length; i++) {
    let char = brackets[i];
    if (keys.includes(char)) {
      stack.push(char);
    } else if (values.includes(char)) {
      let popped = stack.pop();
      if (popped === undefined) {
        console.log("No more parantheses to close issue at pos", i);
        return false;
      } else if (keys.includes(popped)) {
        if (char === chars[popped]) {
          continue;
        } else {
          console.log(
            "invalid char:",
            char,
            "at pos",
            i,
            "expected",
            chars[popped],
          );
          return false;
        }
      } else {
        console.log("invalid char: ", popped, "at pos:", i);
        return false;
      }
    } else {
      continue;
    }
  }
  return true;
}
assert.ok(isBalanced("{]") === false);
assert.ok(isBalanced("[{()(())}]") === true);
assert.ok(isBalanced("[{()( 99 , ! # @ (0))}]") === true);
assert.ok(isBalanced("[{(())(())})))]") === false);
assert.ok(isBalanced("[{()]}") === false);
console.log("All tests passed!");
