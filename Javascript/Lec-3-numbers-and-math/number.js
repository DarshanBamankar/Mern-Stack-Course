let numOne = 10.44879625;
let numTwo = 20;

// Here numOne and numTwo are plain numbers (not an object), so how do we get the methods and properties associated to it?

// Because when we access the methods such as tofixed(), toPrecision(), etc -> Javascript wraps the primitive into a number object automatically -> which is called autoboxing.

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

// Another method for creating a number

let newNum = new Number(50); // creates a new number (50) as a object
let newNumTwo = new Number(50); // creates a new number (50) as a object

console.log(newNum == newNumTwo); // returns false

// Because both the numbers are created as a object.
// Objects are compared by checking if they are pointing to the same memory location.
// In this case newNum and newNumTwo are pointing to different memory locations.
// If we do newNum = newNumTwo -> now it will return true, as both are pointing to same memory location.

// Object is always true in boolean evem if empty, because the memory location (refernce) is present even if there is no value. 