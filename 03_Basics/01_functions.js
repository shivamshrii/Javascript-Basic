function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
     
// }
// addTwoNumbers(2, 2)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
     
    return number1 + number2
}
const result = addTwoNumbers(2, 2)
// console.log("Result", result)

function userLoginMessage(username){
    return '${username} just logged in'
}
// console.log(userLoginMessage("shivam"))

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Shivay",
    price: 5000

}

function handleObject(anyObject){
    console.log('usename is ${anyObject.usename} and price is ${anyObject.price}');
    
}
handleObject(user)


const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 200, 300, 400]));

