const numToRoman = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};

const romanToNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

let convertedR = "";
let convertedN = "";

const romansToNumbers = rNum => {
  for (let key in romanToNum) {
    console.log(key);
    while (rNum >= romanToNum[key]) {
      convertedR += key;
      rNum -= romanToNum[key];
      console.log("num decreased by", rNum);
    }
  }
  return convertedR;
};

const numbersToRomans = num => {
  for (let key in numToRoman) {
    console.log(key);
    while (num >= numToRoman[key]) {
      convertedN += key;
      num -= numToRoman[key];
      console.log("nRRRRum decreased by", num);
    }
  }
  return convertedN;
};

const numberToRomans = num => {};

console.log(romansToNumbers(7));

console.log(romansToNumbers(10));
console.log(numbersToRomans(400));
