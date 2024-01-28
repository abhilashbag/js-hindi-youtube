//  const userEmail = "ABhi@gmail.com" //truth
//  const userEmail = ""   // false
 const userEmail = []   // false

//  if (userEmail) {
//     console.log("got the user Email");
//  }else{
//     console.log("didint get email");
//  }

//  Falsy value
// false, 0 , - 0, BigInt 0n, "" , null, undefined, NaN
//truthy values
// 1, true, "Abhi" , "0", 'false', "", [], {}, function{}

// if (userEmail.length === 0) {
//     console.log("array is empty..");
// }

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 10
val1 = null ?? 10 ?? 20
// console.log(val1);

//Ternary Operator
// condition ? true : false

const iceTea = 100;
iceTea >= 80 ? console.log("yes it is") : console.log("No");;

