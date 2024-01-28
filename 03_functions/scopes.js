// var c = 30
let a= 100    //global scope
if (true) {
    let a = 10;      //inner scope 
    const b  = 20;
    var c = 30;
    console.log("inner:",a);  
    
}

// for (let i=0; i<array.length ; i++){
//     const element = array[i]; 
// }
// console.log(a);
// console.log(b);
// console.log(c);

//*********NESTED SCOPE********** */

 function global(){
    const username = "Annie";
    function local() {           //Inner scope can access
        const series = "marvel"; //outer variable
        console.log(username);
    }
    //console.log(series);
    local();
 }
 global();

// **********   ARRAY **************/

if (true) {
    const username1 = "AbhiNash"
    if (username1 === "AbhiNash") {
        const site = "whatever.com"
        // console.log(username1+site);
    }
    // console.log(site);
}
// console.log(username1);
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7&

console.log(addone(6));//function call possible before declare

function addone(num){
    return num+1;
}
//Not going to work access befor declare
addTwo(4)
const addTwo = function(num){
    return num +2;
}