/* JS allows us to store hetrogeneous type of data into an array, unlike arrays in other language which allow only homogeneous type of data to be stored in an array. */

// Arrays are mutable in JS

// Syntax - 

// let arrayName = [valOne, valTwo, ..........];

    let studentMarks = [50,68,65,50,95,78,86,93];
    let anyData = [1,2,3,`hello`,true]; // this is also supported

// To get the length of the array

    console.log(studentMarks.length);

// Changing a value in a array

    studentMarks[0] = 69; // Will get changed as typeof Array is Object.
    console.log(studentMarks); 

// Adding an element into the array (at end)

    anyData.push(90); // 90 gets added at the end of the array
    // [1,2,3,`hello`,true, 90]

// Deleting an element from the array (from end)

    anyData.pop(); //[1,2,3,`hello`,true] 

// Adding an element into the array (at start)

    anyData.unshift(1); // at 0th index

// Deleting an element from the array (from start)

    anyData.shift();

// Iterating over the array

// Method 1

    for(let i = 0; i < anyData.length; i++){
        console.log(anyData[i]);
    }

// Method 2 (for of loop)

    for(let num in anyData){
        console.log(num);
    }

// Using const with array

    const arrayOne  = [0,2,3,4,6];
    // arrayOne = [2,2,3,5,6,4]; // This is invalid

    console.log(arrayOne); // Error 

// Slicing array
// Original array doesn't change

    console.log(arrayOne.slice(2,5)); //  returns [3,4,6]
    console.log(arrayOne);

// Splicing array 
// Changes the original array itself

    console.log(arrayOne.splice(1,3)); //  original array becomes [0,6]
    console.log(arrayOne); // [0,6]

    let arrayTwo = [1,2,3,1,5,6,4,8,9];
    console.log(arrayTwo.splice(1,3,"Darshan", "Btech", "CSE AI"));
    console.log(arrayTwo);

// Spread Operator - used to spread a array
// [1,2,3,4] -> 1,2,3,4 (individually)

    let spreadOperator = [...anyData,...arrayOne,...arrayTwo,...studentMarks];

    console.log(spreadOperator); // concates the 4 arrays specified

// Converting an array into string 

    let studentNames = ["studentOne", "studentTwo","studentThree"];
    console.log(studentNames.toString());

    // Using Join

    console.log(studentNames.join("*"));

// Searching 

    console.log(studentNames.indexOf("studentThree")); // 2 (-1 if not found)

    console.log(studentMarks.lastIndexOf(50)); // 3

// to check if element exists in a array or not

    console.log(studentNames.includes("studentOne")); // true


// Sorting - Based on ASCII values for every value (considers everything as string)

    studentMarks.sort()
    console.log(studentMarks);

// To reverse the order

    studentMarks.reverse();

// Flating an array

    let multiArray = [1,2,3,4,5,6,[4,5,6,7,8,9,[4,5,5,5,5]],2,2,3,2,[1,5,4,8]];

    let marray = multiArray.flat(Infinity); // flats on all levles

    console.log(marray);