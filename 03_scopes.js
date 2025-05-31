// let, var, const

// Local Scope & Global Scope

function one(){
    const username = "Suvadeep"

    function two(){
        const website = "suvadeep.com"
        console.log(username); // can acess username as it's global
    }
    // console.log(website); // can't access this, gives ReferenceError

    two()

}

// one()


if (true) {
    const username = "Suvadeep"
    if (username === "Suvadeep") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
    console.log(username);
}

// console.log(username);


function addOne(num){  // here hoisting works
    return num + 1
}

const addTwo = function(num){ // expressions // here hoisting doesn't work
    return num + 2
}

