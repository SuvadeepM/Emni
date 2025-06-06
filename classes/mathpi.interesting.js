// we all know that PI in math is 3.14 and we also know that in node/javascript Math.PI will always return 3.14. But, can we change it? and if we can't, then what's the reason? 

// to get the answer we have to go into .gerOwnPropertyDescriptor() method

const book = {
    name: "Man-Eater of Kumaoon",
    writer: 'Jim Corbett',
    price: 1399.99,
    publisher: "Fox"
}

// console.log(Object.getOwnPropertyDescriptor(book, "price")); // { value: 399.99, writable: true, enumerable: true, configurable: true }

// Here we can see that 'writable' is true

console.log(Object.getOwnPropertyDescriptor(Math, "PI")); 
/* 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// Here we can see that it is hardcoded in the v8 engine itself that PI is not writable. So, we cannot change it

// we can also define properties with defineProperties()

Object.defineProperty(book, 'publisher', {
    writable: false
})


// So moral of the story, we need to know all the behind the scene mechanisms. if we are defining properties than we have to remember that all the methods that are associated with it will also not work. 

// object by default is not iteratable, but we can manualy go inside the prototype and define the properties so that it works. It may get some errors in response, but the main part is, we can do it. and it will not give any errors.