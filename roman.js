const assert = require("assert");

function ArabicToRoman(n, result) {
  if (n < 0 || n > 3999) {
    return "can not do this";
  }
  roman = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let value = 0;
  for (i = 0; i < roman.length; i++) {
    if (n / roman[i].value >= 1) {
      value = i;
      break;
    } else {
      continue;
    }
  }
  factor = roman[value].value;
  symbol = roman[value].symbol;
  if (n === 0) {
    if (result === "") {
      return "no 0 in roman numerals";
    } else {
      return result;
    }
  } else {
    let newN = n - factor;
    result += symbol;
    return ArabicToRoman(newN, result);
  }
}

function main(n) {
  let result = "";
  result = ArabicToRoman(n, result);
  return result;
}

assert.ok(main(39) === "XXXIX");
assert.ok(main(246) === "CCXLVI");
assert.ok(main(789) === "DCCLXXXIX");
assert.ok(main(2421) === "MMCDXXI");
assert.ok(main(160) === "CLX");
assert.ok(main(207) === "CCVII");
assert.ok(main(1009) === "MIX");
assert.ok(main(1066) === "MLXVI");
assert.ok(main(3999) === "MMMCMXCIX");
console.log("All tests passed!");
