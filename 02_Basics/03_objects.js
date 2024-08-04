
// object literals
const jsUser = {
    name: "Shivam",
    age: 21,
    location: "Bihar",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// Access Object
console.log(jsUser["email"]);


// jsUser.email = "shivam@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "shivam@microsoft@gmai.com"
// console.log(jsUser["email"]);



// FUNCTIONS
jsUser.greeting = function() {
    console.log("Hello Js User");
    
}
console.log(jsUser.greeting());
