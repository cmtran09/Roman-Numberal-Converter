// assign button to variable
let romToNumBtn = document.querySelector(".roman-number-btn");
// convert number in form to roman numerals on click event
romToNumBtn.addEventListener(
  "click",
  (romansToNumbers = () => {
    // assign content in form (content to be converted) to variable
    let rNum = document.getElementById("number-to-convert").value;
    console.log("rnum is" + rNum);
    // convterted form assigned a varible
    let displayedNum = document.getElementById("converted-rom");
    // variable to contain the answer
    let convertedR = "";
    // convert table
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

    // CHECKING IF INPUT IS A NUMBER
    // isNAN(value) function determines whether a value is NaN or not, returns true or false
    if (isNaN(rNum)) {
      // if not a number NaN, output for will display meesage
      return (displayedNum.value = "Please enter a Number");
    } // if it is not NaN (is a number) function continues
    // loops through the convert table
    for (let key in romanToNum) {
      console.log(key);
      //while looping through the convert table, if the number to be converted is more...
      //...than or equal to the Key's Value.. =>
      while (rNum >= romanToNum[key]) {
        // ..add (concatinate) the key to the convertedR variable.. =>
        convertedR += key;
        // .. and reduce rNum by the Key's Value
        // ULTIMATELY rNum will reduce to ZERO and convertedR will contain the answer
        rNum -= romanToNum[key];
        console.log("num decreased by", rNum);
      }
    }
    // .value  the value displayed in the form id'd of "converted-rom" will be assigned...
    //... to the answer convertedR
    return (displayedNum.value = convertedR);
  })
);

// const romansToNumbers = rNum => {
//   let displayedNum = document.getElementById("converted-rom");
//   let convertedR = "";
//   const romanToNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };

//   for (let key in romanToNum) {
//     console.log(key);
//     while (rNum >= romanToNum[key]) {
//       convertedR += key;
//       rNum -= romanToNum[key];
//       console.log("num decreased by", rNum);
//     }
//   }
//   return (displayedNum.value = convertedR);
// };

// let convertedN = "";

// const numbersToRomans = num => {

//   const numToRoman = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I"
//   };

//   for (let key in numToRoman) {
//     console.log(key);
//     while (num >= numToRoman[key]) {
//       convertedN += key;
//       console.log(convertedN + "in while loop");
//       num -= numToRoman[key];
//       console.log("nRum decreased by", num);
//     }
//   }
//   console.log(convertedN);
//   return convertedN;
// };

// console.log("RESEULT" + numbersToRomans(450));
