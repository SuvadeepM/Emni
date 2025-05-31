// this -> Current context

const user = {
    username: "Suva",
    price: 99,
    welcome: function (){
        console.log(`hello ${this.username}, welcome to the course`);
        console.log(this);
    }
}

// console.log(user.welcome());
// user.username = "Sam"
// console.log(user.welcome());

// console.log(this); // output: {}

function one () {
    let username = "hello"
    console.log(this);
    console.log(this.username); // output: undefined, we can use "this" in objects and not in functions
}

// one();

const tea = (number1, number2) => {
    return number1+number2
}
// console.log(tea(2,3))

const teaImplicit = (number1, number2) => (number1+number2); // implicit return
const teaImplicitTwo = (number1, number2) => ({number1: number2}); // implicit return


// IIFE (Immediately Invoked Function Expressions): To eleminate the polution created by global scope

(function chai(){ // this is a named iife  
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // not giving this semicolon may cause error

( (name) => { // this is unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('suvadeep')