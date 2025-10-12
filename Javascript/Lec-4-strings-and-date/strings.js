let stringOne = 'Hello, World';
let stringTwo = "Hello, World";
let stringThree = `Hello, World`; // Modern and Preferred way to create strings

// Preferred because ` ` support multiple lined string creation 
// for eg - 
    let stringFour = `hi,
    how are 
    you`; // this is perfectly fine (no errors)

// Also we can access variables in ` `
// for eg - 
    let userName = `Darshan`;
    let stringFive = `Hello ${userName}, how are you?`;
    console.log(stringFive); // o/p -> Hello Darshan, how are you?

// Length of String
    let stringSix = `Darshan Bamankar`;
    console.log(stringSix.length); // 16 -> includes characters + blank space

// Accessing characters in a string 
    console.log(stringSix[0]);
    console.log(stringSix[1]);
    console.log(stringSix[2]);
    console.log(stringSix[4]);
    console.log(stringSix[5]);

// Converting to Upper Case and Lower Case

    let inUpperCase = stringSix.toUpperCase();
    let inLowerCase = stringSix.toLowerCase();
    console.log(inUpperCase); // returns a new string with all characters in upper case (doesnt change the original string)
    console.log(inLowerCase); // returns a new string with all characters in lower case (doesnt change the original string)

// Finding the index of a substring in a string 

    console.log(stringSix.indexOf(`Bam`)); // returns starting index of the substring if found, else -1

// Finding last index of a substring

    console.log(stringSix.lastIndexOf(`an`)); // should return 11 not 5

// To just check if a substring exists inside a string 

    console.log(stringSix.includes(`Darshan`)); // True if exists, else False

// Slice Methods - string.slice(startIndex, endIndex)

    console.log(stringSix.slice(0,8)); // 8th index is not included 

// substring - negative index markdown is not supported unlike slice method
    
    console.log(stringSix.substring(0,8));

// concatenating string 
    let firstName = `Darshan`;
    let lastName = `Bamankar`;

    console.log(firstName + " " + lastName);

// Replacing Substring

    console.log(firstName.replace(`Dar`, `dar`));

    // to replace all occurences - we use replaceAll()

// Trimming string -> removing whitespaces

    let userPassword = ` pass@123 `; // notice there is whitespace at the start and the end of the string
    let trim = console.log(userPassword.trim()); // removes the starting and ending whitespace
    
    // to remove starting space only -> trimStart()
    // to remove ending space only -> trimEnd()
    
// Splitting a string on the basis of a separator

    let allUsers = `user1, user2, user3, user4, user5`;
    console.log(allUsers.split(",")); // returns in a array



