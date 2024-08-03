/*
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


// #Refrence Type(Non Primitive)

// Array, Objects, Functions
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
*/


//++++++++++++++++++++++++++++++++++++++

//Types Of Memory
// Stack(Used in Primitive ), Heap(Non-Primitive)

let myYoutubename = "shiva"

let anothername = myYoutubename
anothername = "shivay"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"shivam@gmail.com",
    upi :"user@sbi"
}

let userTwo = userOne

userTwo.email = "meshivamshri@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

