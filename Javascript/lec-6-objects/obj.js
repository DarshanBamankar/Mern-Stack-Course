/* Objects store information in key-value pairs. */

const { name } = require("ejs");

/* The keys are stored as strings */

const accountHolder = {
    name : "Darshan",
    age : 19,
    email : "darshan@gmail.com",
    accountNo : "123456789",
    bankId : "1254"
}

console.log(accountHolder);

// Accessing object values using dot operator

    let username = accountHolder.name;
    // OR
    let alsoUsername = accountHolder["name"];
    
    console.log(username);

// Inserting values in objects 

    accountHolder.addharNo = "125487956";
    console.log(accountHolder);

    
// Updating values in objects 

    accountHolder.addharNo = "XXXXXXXX5897";
    console.log(accountHolder);

// Deleting values from a object

// Using 'delete' keyword

    delete accountHolder.bankId;
    console.log(accountHolder);

// Accessing the keys of a object 

    console.log(Object.keys(accountHolder));
    // returns the keys of 'accountHolder' object in a array    

// Accessing the values of a object
    
    console.log(Object.values(accountHolder));
    // returns the values of 'accountHolder' object in a array    

// To get both (keys and values)

    console.log(Object.entries(accountHolder));
    // returns the key-value pairs in the 'accountHolder' object in a array

// Looping over a Object

    for (let p in accountHolder){
        console.log(Object.entries(accountHolder));
    }

// 
    for(let keys in accountHolder){
        console.log(keys, accountHolder[keys]);
    }

// Destructuring 

    const destObject = {
        userName : "Darshan",
        userAge : 20,
        userId  : "4587"
     }

     const {userName, userAge, userId} = destObject;
     console.log(userName);