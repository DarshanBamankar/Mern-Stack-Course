/* Objects store information in key-value pairs. */


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
        Mname : "Darshan",
        age : 20,
        id  : "4587"
     }

     const {Mname, age, id} = destObject;
     console.log(Mname);

// Accessing values and giving them different names

    const destObjectTwo = {
        name : "Rohit",
        age : 20,
        id : "5698"
    }

    const {name : userName, age : userAge, id : userID} = destObjectTwo;
    console.log(userName, userAge, userID);


// (Additional) -> Destructuring a array

     let arr = [1,2,3,4];
     const[one,two] = arr;

     console.log(one,two); // 1 2

// We can also write funtions inside a object

    let funcObject = {
        amount : "200000",
        accountHolderName : "Darshan",
        accountNumber : "147852369",
        transactionDetails : function transactionDetails(amount, accountHolderName,accountNumber){
            console.log(`Amount : ${amount} added into account no - ${accountNumber} with Holder Name - ${accountHolderName}`);
        }
    }

    const {amount, accountHolderName, accountNumber, transactionDetails} = funcObject;
    transactionDetails(amount, accountHolderName, accountNumber);

// "This" keyword

    const account = { 
        accountName : "my-account",
        createdAt : new Date().toLocaleDateString(),
        accountFunction : function accountFunction(){
            console.log(`${this.accountName} created on ${this.createdAt}`);
        }
    }
    
    account.accountFunction();

    // "this" points to the parent object -> it is used in the function which is under a account object -> therefore it points / references to the account object
    // allows code reusability

// Nested objects 

    const nestedObjects ={
        acName : "acc1010",
        acCreatedAt : new Date().toLocaleDateString(),
        address : {
            city : "Pune",
            Muncipality : false,
            pincode : "451268",
        }
    }

    console.log(nestedObjects.address.city , nestedObjects.address.pincode);

    const nestedObjectsTwo = {...nestedObjects}; // creates a individual copy of the objects
    // but only at one level -> not on the nested objects -> they reference same memory location

    // Spread Operator creates a shallow copy i.e only handles one level

// To create a deep copy

    const deepCopy = structuredClone(nestedObjects); // creates a complete independent copy 

// Keys can be string || symbol

    const sym = {
        [sym] : "SYMBOL"
    }




