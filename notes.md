# javascript and classes

Yes, javascript does have classes. This feature was introduced in ECMAScript2015 or ES6 specifications. However, it's important to note that . Javascript is primarily a prototype-based language. and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words, it provides more familier syntax for the developers coming from class-based language such as Java or C++, but under the hood, it works somewhat differently.

## OOP
It's a programing paradigm. 

## Object
- collection of properties and methods
- toLowerCase

## why use OOP
Spaghetti code=> "Spaghetti code is a pejorative phrase for difficult-to-maintain and unstructured computer source code"


## parts of OOP
Object literal 

- Constructor function => Constructor function is a special method for creating and initializing an object created within a class. 'new' is the keyword. 

- Prototypes 
- Classes
- Instances (new, this)


## 4 pillars
Abstraction => Hiding complex implementation details and shows only the necessary features 

```javascript
// Example in JavaScript
class Animal {
  makeSound() {
    throw "Method must be implemented";
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}
```

Encapsulation => Wrapping data (or variables) and code into single unit (or class) amd restricting direct access to some of the object component

```javascript
// Example in JavaScript
class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

Inheritance => One class (or child) inherits properties and behaviour from another class (or parent)

```javascript
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}
```

Polymorphism => One method (or instance) behaves differently based on the object

```javascript
class Animal {
  makeSound() {
    console.log("Animal makes sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Moo");
  }
}
```