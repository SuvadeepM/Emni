// if

// if (true){}
let user = "Suvadeep"
const isUserLoggedIn = true
// if (isUserLoggedIn){
//     console.log(`${user} is logged in`);
// } else {
//     console.log("Not logged in");
// }


// <, >, <=, >=, ==(doesn't check the data type, only the values), !=(not equals to), ===(strict queal), !== (strictly not equal)


const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 40");
// } else {
//     console.log("temperature is greater than 40");
// }

const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // not in scope




// if (balance > 500) console.log("test")/*,console.log("test2")*/; // not a good thing to do. 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

var balance = 1000 // hoinsting


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// switch statement:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}