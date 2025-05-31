function sayMyName () {
    let name = 'Suvadeep Mandal'
    console.log(name);
}

// console.log(sayMyName());

function addTwoNumbers(num1, num2) { // num1 and num2 are parameters
    return num1+num2;
}
// console.log(addTwoNumbers(5,"8")); // 5 and 8 are arguments

function loginUserMessage(username = 'Sam') {
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Suvadeep"));
// console.log(loginUserMessage()); // output: undefined just logged in


function calculateCartPrice(...num1){ // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "suvadeep",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    prices: 300
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

