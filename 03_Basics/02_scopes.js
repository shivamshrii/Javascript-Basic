let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 40
    // console.log("INNER:", a);
    
}

// console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const usename = "shivam"
    function two(){
        const website = "youtube"
        // console.log(usename);
        
    }
    // console.log(website);
    two()
}
// one()


if(true){
    const username = "shivam"
    if (username ==="shivam"){
        const website = "shivam"
        // console.log(username + website);
        
    }
// console.log(website);
    
}
// console.log(username);



// ++++++++++++++++++++++++Interesting++++++++++++++++

function addone(num){
    return num + 1

}

console.log(addone(5));


const addtwo = function(num){
    return num+2
}

addtwo(5)