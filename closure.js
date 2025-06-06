// from MDN

function init() {
        let name = "Mozilla"; 
        function displayName() {
            console.log(name); 
        }
        displayName();
    }
init();

// now understand this
function outer(){
    let username = "suvadeep"
    console.log("OUTER", secret); // parents can't access childs properties
    function inner(){
        let secret = "my_secret"
        console.log("inner", username); // but childs can acess, as it happens in real world. too much irony.
    }
    function innerTwo(){
        console.log("innerTwo", username);
        console.log(secret); // this 'secret' doesn't get the value // siblings doesn't share
    }
    inner()
    innerTwo()

}
outer()
console.log("TOO OUTER", username);

// Code analysis mdn : closure

function makeFunc() {
    const name = "Mozilla";
    function displayName() { // now comes the saviour: aaaaa.......... MEMORY..... Pura memory share hota hai, not only the function
        console.log(name);
    }
    return displayName;
}

// when we return a fuction, not only it returns the value but also the lexical scope returns with it as well.
// now GOTO closure.html

const myFunc = makeFunc();
myFunc();
