// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) { // initialization; condition; change
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and outer loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman", "ironman", "hulk"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        // console.log(`Detected 5`);
        break // breaks the code after element is 5 and goes out of the loop
    }
//    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        // console.log(`Detected 5`);
        continue // skip rest of the code and contunue with next iteration
    }
    // console.log(`Value of i is ${index}`);
}


// while
// while (condition) { }

let index = 0
// while(index <=10){
//     console.log(`Value is ${index}`);
//     index = index+2;
// }

let arr = 0
while (arr < myArray.length) {
    // console.log(`Hero is ${myArray[arr]}`);
    arr = arr + 1
}

// do while loop

let score = 15

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);






// for of


// for (const element of object) { // can be iterative with arrays, strings
    
// }

let myObj = {
  name: "Alice",
  age: 25,
  city: "New York"
};
// for (const element of myObj) { // objects can't be iterable with for..of loop
//     console.log(`${key}: ${myObj[key]}`);
// }

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

// Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map.get('IN'));
// console.log(map);
map.set('CHI', 'China')
console.log(map);

