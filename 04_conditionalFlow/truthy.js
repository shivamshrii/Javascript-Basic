const userEmail = "shivam@gmail.com"

if(userEmail){
    console.log("Got user Email");
    
}else{
    console.log(("Don't have user email"));
    
}

// falsy values

// false, 0, -0, BigInt, "", null, undefined, Nan, 0n


// Truthy Values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log(("array is empty"));
    
// }

// Nullish coaescing operator(??): null undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1);

// let val1;
// val1 = null ?? 10
// console.log(val1);

// let val1;
// val1 = undefined ?? 10
// console.log(val1);


// let val1;
// val1 = null ?? 10 ?? undefined ?? 15
// console.log(val1);


