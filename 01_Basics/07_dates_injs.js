let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(typeof(myDate))

//let myCreateDate = new Date(2023, 0, 23)
//let myCreateDate = new Date(2023, 0, 23)
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

newDate.toLocaleString('default',{
    weekday:"long",
})