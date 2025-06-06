// Prototypal inheritance: Prototypal Inheritance is JavaScript’s way of allowing objects to inherit properties and methods from other objects.JavaScript uses objects inheriting from other objects. 
// "An object can inherit properties and methods from another object using the prototype chain."

const human = {
  sayHi() {
    console.log("Hi!");
  }
};

const student = Object.create(human);
student.name = "Suvadeep";

// console.log(student.__proto__); // { sayHi: [Function: sayHi] }
// console.log(student.__proto__.__proto__); // [Object: null prototype] {} // null prototype language
// console.log(student.__proto__.__proto__.__proto__); // null




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


let name = 'Suvavdeep'

// console.log(name.trim().length);

String.prototype.trueLength = function (len) {
    return this.trim().length
}

console.log(name.trueLength());



