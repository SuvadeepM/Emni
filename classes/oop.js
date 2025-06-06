const user = {
    username: 'suvadeep',
    logInCount: 8,
    signedIn: true,

    getUserDetails: ()=>{
        console.log(`Got user details from database, user is ${username}`);
        console.log(this);
    }
}

// constructor function: 'new'

function User (username, logInCount, isloggedin){
    this.username = username
    this.logInCount = logInCount
    this.isloggedin = isloggedin
    //return this
    return {username, logInCount, isloggedin}
}

const userOne = new User('suvadeep', 12, true) // 'new' : calls the constructor function / method

const userTwo = new User('whomsoever', 10, false)
console.log(userOne.constructor);
console.log(userTwo);

// go to mdn instanceof
