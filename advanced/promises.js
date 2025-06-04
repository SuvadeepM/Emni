/* Promise: an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise can be in one of three states:
=>Pending: The initial state, indicating that the asynchronous operation is still in progress.
=>Fulfilled (Resolved): The operation completed successfully, and the Promise holds the resulting value.
=>Rejected: The operation failed, and the Promise holds an error object.

Promises provide methods for handling these outcomes:
.then(onFulfilled, onRejected): Attaches callbacks to be executed when the Promise is either fulfilled or rejected.
.catch(onRejected): A shorthand for .then(null, onRejected), specifically for handling rejections.
.finally(onFinally): Attaches a callback that will be executed regardless of whether the Promise is fulfilled or rejected.

Key concepts:
=>Chaining: Promises can be chained together using .then() to create a sequence of asynchronous operations.
=>Error Handling: Rejections are propagated down the chain, allowing for centralized error handling using .catch().
=>async/await: A more modern syntax built on top of Promises, making asynchronous code appear more synchronous and easier to read.

Promises provide a structured way to manage asynchronous code, improving code readability and maintainability.

fetch(): 

*/

// new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000);
//     }),
//   );
// });

const promiseOne = new Promise((resolve, reject)=>{
    // Do an async task
    // DB calls, cryptography, network related calls etc.
    setTimeout(()=>{
        console.log("async task is complete");
        resolve() //  need to use this to say to the function that the promise has been resolved.
    }, 1000)
})


promiseOne.then(()=>{
    console.log('promise consumed');
})


new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("promise has been done");
        resolve()
    }, 1000)
}).then(()=>{
    console.log("async 2 resolved");
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Suvadeep", email: "suvadeep@example.com"})
    }, 1000)
}).then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if (!error){
            resolve({username: "Suvadeep", password: "12345"})
        } else {
            reject('ERROR')
        }
    }, 1000);
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Finally the promise is either resolve or rejected");
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive () {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/suvadeepM')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// Promise.all => The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]