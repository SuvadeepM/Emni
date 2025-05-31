
// Constructor Method
//Object.create() //  this is constructor method


const symbol = Symbol('Key1');

// Object Literals:

const JsUser = {
    name: "Suvadeep", // key: value
    "full name": "Suvadeep Mandal",
    [symbol]: "myKey1", //  if we want to use symbol in object keys then we have to access it through [], if we access it without an array, typeOf symbol would be "string"
    age: 30,
    location: "Hyderabad",
    email: "suvadeep@test.com",
    isLoggedIn: false,
} // this is an object

// there are these two ways we can access the values.
// console.log(JsUser.email); // output: suvadeep@test.com 
// console.log(JsUser['email']); // output: suvadeep@test.com

// we can access this because key in the object is not explicitly mentioned as strings. If the key is in the string format then we can only access the values using the second method
// console.log(JsUser["full name"]);

// we can freeze the object created by the below method:
// Object.freeze(JsUser);
// if we change the value after freezing the object then, the changing will not be propogated. Although it won't give any error.

JsUser.age = 18;
// console.log(JsUser.age); // output: 30, no error in code

// console.log(JsUser)

JsUser.greeting = function (){
    console.log(`hello user, ${this.name}`);
}

// console.log(JsUser.greeting) // output: [Function (anonymous )] 
// console.log(JsUser.greeting())  // output: hello user




// Singleton: When construct using constructors. In other cases, singleton will not happen

const user = new Object() // this is a singleton object

user.id = '123abc'
user.name = "Sammy"
user.isLoggedIn = false
// console.log(user);

const regularUser = {
    email: "sum@test.com",
    fullname: {
        userFullname: {
            firstName: "Suvadeep",
            lastName: "Mandal"
        } // object inside an object inside an object
    }
}

// console.log(regularUser.fullname.userFullname); // output: { firstName: 'Suvadeep', lastName: 'Mandal' }

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1, obj2} // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2) // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // {} works as a target where all the elements will go. 

const obj3 = {...obj1, ...obj2} // spread 

// console.log(obj3);

Object.keys(user) // returns all the keys in an array
Object.values(user) // returns all the values in an array
Object.entries(user) // output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

user.hasOwnProperty('isLoggdIn') // output: true
user.hasOwnProperty('isLoggd') // output: false


// Destructuring
// const {name: instructor, email} from user;