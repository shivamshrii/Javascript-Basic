const tinderUser = new Object() //singleton objects
const tinder ={} // Non singleton objects

tinderUser.id = "123asdf"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "shivam",
            lastname: "shri",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// combine two objects

const obj1 = {1: "s", 2: "h"}
const obj2 = {3: "R", 4: "A"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = {
    id: 1,
    email: "h@gmail.com",
    
}

