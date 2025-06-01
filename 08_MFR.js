// Map  : returns the values with the new results

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map( (num) => { return num + 10})
// console.log(newNums);

// Chaining
// const newNums = myNums
//                 .map((num) => num * 10 ) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//                 .map( (num) => num + 1) // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
//                 .filter( (num) => num >= 40) // [41, 51, 61, 71, 81, 91, 101] 

// console.log(newNums);






// filer: filter and returns the values


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);

// we cannot use forEach to return the values, but if we want to return the values than the below is the code

// const newNums = []

// myNums.filter((num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((book) => {
//     return book.genre === 'Non-Fiction'
// })



const userBooks = books.filter((bk) => (bk.publish >= 1995 && bk.genre === "History"))

// console.log(userBooks);


// Reduce: 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const totalValue = myNums.reduce((acc, currval)=> {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// console.log(totalValue);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);