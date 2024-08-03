// #Primitive Data Types

// 7 Types Of : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 234567990999999n


const heros = ["shivam", "Shiva", "hanuman"]
let myObj = {
    name: "raja",
    age:21,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof(bigNumber));
console.log(typeof(outsideTemp));
console.log(typeof(myFunction));
console.log(typeof(heros));



// #Refrence Type(Non Primitive)

// Array, Objects, Functions