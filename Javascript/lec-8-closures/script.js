// Scope

// 1)
let a = 10; // global scoped
let b = "Name" // global scoped

// 2)
function funcScope (){
    let c = 15; // functional scope
}

// 3)
{
    let d = 19; // block level scope
}

// var -> respects global and functional scopes only ; not block level scopes
// i.e it can be accesed outside its declared block

{
    var s = "S";
}
console.log(s); // Valid 

// *** While let & const respect all scopes ***


// Closure 
function createCounter() {
    let count = 0;
    function increment(){
        count++;
    return count;
    }
    return increment;
}

// console.log(count);
const counter = createCounter(); // reference of increment
console.log(counter());
console.log(counter());
console.log(counter());

// Closure - 
// Closure is a function which remembers the variables (which are going to be used in it) from its outer scope.
// these variables get pushed to heap from stack


// Banking example


let user1 = {
    balance : 500,
    deposit : function(amt){
        if(typeof amount !== Number){
            throw new Error("Amount invalid");
        }
        this.balance+=amt;
        console.log(this.balance)
    }
}

user.deposit("600");

// Balance is accesible 


// ***** Better way *****

function createAccount(){
    let bal = 0;

    const user = {
        depMoney : function(amt){
            if(typeof amt === "number" && amt >= 0){
                bal += amt;
            }
            return bal;
        },

        withMoney : function(amt){
            if(typeof amt === "number" && bal >= amt && amt >=0){
                bal -= amt;
            }
            return bal;
        },

        getbal : function(){
            return bal;
        }
    }
    return user;
}

const C1 = createAccount();
console.log(C1.depMoney(100));
