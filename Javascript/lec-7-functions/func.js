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
        console.log(num);
    }

    functionVar(6);

// Arrow Function 

    const arrowFunc = (s)=>{
        console.log(`${s} This is an Arrow Function`);
    }
    arrowFunc("hello");

    const onlyReturn = (num1 , num2) => num1 + num2;
    console.log(onlyReturn(4,5));

