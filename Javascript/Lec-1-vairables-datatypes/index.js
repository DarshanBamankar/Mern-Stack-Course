// Variables 
// 1) Using let - Allows reassignment but not redeclaration and it is block scoped.

let name = "Darshan";
let age = 20;
    age = 21;
console.log(name, age);

// 2) Using Const - Doesn't allow redeclaration or reassignment -> the value is constant.
// Value must be assigned to the const at the time of its declaration -> it cannot be undefined.

const PIE = 3.14;
console.log(PIE);


// 3) Using var - allows both redeclaration and reassignment and it respects either global scope or functional scope (inside a function)

var firstName = "Darshan";
var firstName = "Rahul";

console.log(firstName);


// Datatypes - 

// 1) Primitive datatypes (7 types) -

// Primitive datatypes are immutable -> cannot be changed -> new memory is allocated if redeclared/reassigned with the variable pointing to the new value.

    // a) Number - integers + floating point values

        let a = 10; // 8 byte 
        console.log(a);

    // b) String 

        let c = "Darshan Bamanakar";

    // c) boolean 

        let isLogin = true;
        
    // d) undefined 

        let user; // clg(user) -> will result in undefined because there is no value is assigned to it.
    // e) null 

        let weather = null; // the variable contains "nothing" intentionally. 
        // type of a variable = null is shown as object -> which is a legacy bug in JS.

    // f) bigint 

        let n = 218461788454978n; // n in the end defines that it is a bigint value

    // g) symbol

        const id1 = symbol("id1"); // creates a unique value

// 2) Non-Primitive datatypes - 

// type of any non-primitive datatype is object

// Non-primitive datatypes are mutable.

    // Array

        let arr = [10,20,30,"Darshan", true];
        // type of arr -> object
        
    // object - Key-value pairs

        let customer = {
            name : "Darshan",
            accountNo : 123456789,
            age : 20,
            gender : "male"
        }

    // function

        let hello = function displayHello(){
            return "Hello";
        }
        
        console.log(hello); 


// To know the datatype -> we use typeof().


// Pass by value -> creates a copy of the value (primitive datatype)
// Pass by reference -> passing the actual value (non-primitive datatype)