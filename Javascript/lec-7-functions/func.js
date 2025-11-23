/* 
Author - Prime
*/

// Function Syntax

/*
function function_name(args){

}
*/

/* Why?
-> To write reusable block of code
*/

    function greetUser(name) {
        console.log(`Hello ${name}, Welcome to the site !!`);
        return 0;
    } // Function Declaration and Function Definition

    greetUser("Darshan"); // Function Calling

    function addNumbers(num1, num2, num3 = 0, num4 = 0) {
        return num1 + num2 + num3 + num4;
    } // adding default values

// Rest Operator - used when we don't know how many parameters are there to come to a function

    function sumOfNum(...num){
        let sum = 0;

        for (let n of num){
            sum += n;
        }
        console.log(sum);
        
    }

sumOfNum(1,2,4,5,7);

// Function Expression
// The function must be called after the initialization & declaration 

    const functionVar = function(num){
        return num;
    }

    functionVar(6);

// Arrow Function 

    const arrowFunc = (s)=>{
        console.log(`${s} This is an Arrow Function`);
    }
    arrowFunc("hello");

    const onlyReturn = (num1 , num2) => num1 + num2;
    console.log(onlyReturn(4,5));

// If there is only single parameter

    const singleParam = num => num*num; // returns square of a number
    console.log(singleParam(65));

// Returning a object from a function

    // Method One - 

    const objReturn = () => {
        return {
            name : "Darshan",
            age : 19
        };
    }

    console.log(objReturn());

    // Method Two 
    
    const objReturn2 = () => ({name : "Darshan", age : 19})
    console.log(objReturn2());

// IIFE - The function gets called immediately and automatically

    (function callMeImmediately(){
        console.log("DONE");   
    })();

    (()=> {
        console.log("Welcome to the Site!!")
    })();


// Callback Function - Passing another function as an argument to one function

// Makes the functions reusable 

    function generateReciept1(){
        console.log("Here is your order reciept");
    };

    function placeOrder1(c){
    console.log("Your order has been placed, Thanks!!");
    c();
    };

    placeOrder1(generateReciept1);


// Example (More realistic)

    function generateReciept(amt){
        console.log(`Your order reciept for ${amt} has been generated`);
    };

    function placeOrder(amt,orderSummary,c){
        console.log(`Your order for ${orderSummary} has been placed, Thank you!`);
        c(amt);
    };

    placeOrder(600, "Paneer Masala",generateReciept);