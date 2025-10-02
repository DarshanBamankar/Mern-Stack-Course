// Operators

// 1. Arithmetic Operators - 

    console.log(5+2); // Addition
    console.log(5-2); // Substraction
    console.log(5*2); // Multiplication
    console.log(5/2); // Division
    console.log(5%2); // Modulus ->  returns the reaminder of a division
    console.log(5**2); // Power (5^2) -> a**b = b times a 

// 2. Assignment Operators - 

    let numOne = 10;
    let numTwo = 20;

    numOne = numOne + numTwo; // numOne = 10 + 20 = 30
    numOne = numOne - numTwo; // numOne = 10 - 20 = -10
    numOne = numOne * numTwo; // numOne = 10 * 20 = 200
    numOne = numOne / numTwo; // numOne = 10 * 20 = 0.5
    
// 2.2 Feasible Format - 

    numOne += numTwo
    numOne -= numTwo
    numOne *= numTwo
    numOne /= numTwo

// 3. Comaprision Operators - 

    let sonAge = 21;
    let fatherAge = 35;

// 3.1 -> operators are - <, >, <=, >=, ==, ===  

    console.log(sonAge > fatherAge); // greater than (false)
    console.log(sonAge < fatherAge); // less than (true)
    console.log(sonAge >= fatherAge); // greater than or equal to 
    console.log(sonAge <= fatherAge); // less than or eqaul to
    console.log(sonAge == fatherAge); // equals to
    console.log(sonAge === fatherAge); // strictly equal to


// cases for == and === operators

    let myAge = 21;
    let yourAge = "21";

    console.log(myAge == yourAge); // true
    // When a number and string is compared -> the string gets converted into number for comparision.

    console.log(myAge === yourAge); // false
    // === operator requires the type of both operands to be same before even comparing 
    // typecheck -> comparison -> result

// Logical Operators

// -> &&, ||

// 1) && (And) -> True if both conditions are true.
    
    let numThree = 6;
    let numFour = 13;

    if(numThree % 2 == 0 && numFour % 2 == 0){
        console.log("Valid")
    }
    else{
        console.log("Invalid");
    }

// && Logic (Under the hood) ->

// lets say a && b;
// Now if "a" is true -> output will be "b" (it doesnt check "b" if "a" is true)
// And if "a" is false -> output will be "a" itself. 

// 2) || (Or) ->  True if one of the condition is true, otherwise false.

    let numfive = 5;
    let numSix = 6;

    if(numfive || numSix % 2 == 0){
        console.log("Valid")
    }

// || Logic (Under the hood) ->

// lets say a || b;
// Now if "a" is true -> output will be "a".
// And if "a" is false -> output will be "b". 


// And the Bitwise & and | operators operate on bits. 





