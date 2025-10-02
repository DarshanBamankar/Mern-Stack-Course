// String to Number conversion

    let stringOne = "10";
    console.log(typeof(stringOne))

    let numOne = Number(stringOne); // stringOne -> numOne i.e string to number conversion
    console.log(typeof(numOne));

    // other datatypes to number
    // true = 1, false = 0  
    // null = 0, underfined = NaN 


// Number to String Conversion

    let numTwo = 25;
    let stringTwo = String(numTwo);

    console.log(typeof(stringTwo)); // string


// Special cases 

    let alphaNumeric = "123abc";
    let convertingAlphaNumeric = Number(alphaNumeric);

    console.log(convertingAlphaNumeric); // returns NaN -> Not a Number
    // Because alphaNumeric cannot be converted into number as it contains characters.
    
    console.log(typeof(NaN)); // number
    // the type of NaN is number.

// Converting into Boolean 

    console.log(Boolean(100)); // true
    console.log(Boolean(0)); // false
    // converts 0 ->  false, otherwise -> true (for numbers)

    // for strings

    console.log(Boolean("hello")); // true ->  because the string exists
    console.log(Boolean("")); // false -> because the string is empty

// If two types are to be compared they must be come on a same ground before comparison.
// due to which they are converted into numbers and then compared.

// If the datatypes of both values is same -> Direct comparison

// NaN is not equal to NaN.

