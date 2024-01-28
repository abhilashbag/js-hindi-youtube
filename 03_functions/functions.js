//  FUNCTIONS

function myName() {
    console.log("A");
    console.log("B");
    console.log("h");
    console.log("I");
}
//console.log("A");
//myName();  //Executing function

function addNum(number1,number2) {  //number1 number2  PARAMETERS
    let sum = number1+number2;
    // return sum;
    return number1+number2;
    console.log(sum);
}

const result = addNum(10,12);         //ARGUMENTS
// console.log("result is:",result); // undefied becaused we dont return anything

// let username = new String();
function loginUserMessage(username = "Abhi") {
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }

    if(!username){
            console.log("please enter a username");
            return
        }
    return `${username} just logged in `
}
// console.log(loginUserMessage());//undefined 
//console.log(loginUserMessage(""));//empty string  
// console.log(loginUserMessage("abhilash"));


//&&&&&&&&&&&&&&&&& OBJECT IN FUNCTION &&&&&&&&&&&&&&&&&&&&&

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(300,400,500,100,150));


const user = {
    username1 : "abhi",
    prices:"infinity"
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username1} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "annie",
    price:300
})

const array =[100,20,30,40]
function returningArray(getArray) {
    return getArray[1]
}
console.log(returningArray(array));