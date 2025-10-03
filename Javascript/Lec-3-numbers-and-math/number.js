let numOne = 10.44879625;
let numTwo = 20;

// Methods 

// 1) tofixed(number) - to take numbers until desired decimal places
// tofixed() returns string

let roundedNum = numOne.toFixed(2);
console.log(roundedNum); // will return 10.45 as a string

// 2) toPrecision(number) - to take desired count of no.s (before and after decimal)
// toPrecision() returns string

let preciseNum = numOne.toPrecision(6);
console.log(preciseNum); // will return 10.4488 as a string

// 3) toString() - to convert number into string

let stringNum = numOne.toString();
console.log(stringNum);

