//IF
const isUserLoggedIn = true;
const tempreture = 41
if (tempreture === 40) {
    //if true execute
   // console.log("Executed");

}else{

    //console.log("tempreture greater than 50")
}
// <, > , <= , >=,== , === ,!= , !==

const score = 200;

if (score > 100) {
    let power = "fly"
    //console.log(`user power : ${power}`); 
}

const balance = 1000
// if(balance >500 )console.log("test"),
// console.log("test2");
//NESTED IF
// if (balance < 500 ) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
   // console.log("allow to buy courese");
}

if (loggedInFromGoogle || loggedInFromEmail && 2==2) {
    console.log("allow to buy courese - for");
}