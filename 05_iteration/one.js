// //for loop
// for(let i = 0; i <= 10; i++) {
//     const element = i; 
//     if (element == 5 ) {
//    // console.log(" is 5 hai");
//     }
//     //console.log(element);
    
// }
// // console.log(element);

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop : ${i}`);

//     for (let j = 0; j <= 10; j++) {
        
//         //console.log(`inner loop : ${j} and outer loop ${i}`);
//         console.log(i + '*'+j + '= ' + i*j);
//     }
  
    
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

//break and continue

for (let index = 1; index < 20; index++) {
    // const element = array[index];
    if (5 == index) {
        console.log(`detected 5 `);
        continue  //skip flow//
        //break   //break flow
    }
    console.log(`value of i is ${index}`);
}