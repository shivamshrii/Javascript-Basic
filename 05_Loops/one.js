// for 
// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
    
// }
// Table
// for(let i = 1; i <= 20; i++){
//     console.log('Outer loop value: ${i}');
//     for (let j = 0; j<= 10; j++){
//         // console.log(`inner loop value ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
        
        // break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}