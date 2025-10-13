// JS allows us to store hetrogeneous type of data into an array, unlike arrays in other language which allow only homogeneous type of data to be stored in an array.

// Arrays are mutable in JS

// Syntax - 

// let arrayName = [valOne, valTwo, ..........];

    let studentMarks = [50,68,65,95,78,86,93];
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