// There is a "Math" object in JS which helps in performing mathematical opertions easily.

console.log(Math.PI) // returns the value of PI (3.1415)

console.log(Math.abs(-48)) // returns 48

console.log(Math.ceil(5.3)) // returns 6 -> rounding it off to the greater integer

console.log(Math.floor(5.3)) // returns 5 -> rounding it off to the smaller integer

console.log(Math.max(1,2,3,4)) // returns the maximum value (4)

console.log(Math.min(1,2,3,4)) // returns the minimum value (1)

// AND MUCH MORE 

// Math.random 
// Generates psuedorandom values in the range -> [0 >= value < 1]

console.log(Math.random());

// -------------------------------//

let randomNum = Math.random() * 10;
console.log(Math.floor(randomNum)); 

// to generate random number between any range
// formula -
// Math.floor(Math.random() * noOfTotalOutcomes) + shiftValue

// Orthodox formula -
// Math.floor(Math.random() * (max-min+1)) + min