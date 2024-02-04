// let myName = "abhilash      "

// console.log(myName.trueLength);

let myHeros = ["spiderman","thor"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.abhi = function(){
 console.log(`abhi present in all object heropower`);
}

Array.prototype.abhilash = function (){
    console.log(`abhi says hello,=.`);
}
// heroPower.abhi()




// Object.abhilash()
// myHeros.abhi()
// heroPower.abhilash()


// INHERITANCE


const user = {
    name: "abhi",
    email:"wtf@gmail.com"
}

const teacher = {
    makeVideo : true
}
const teacherSupport = {
    isAvailable :true 
}

const taSupport ={
    makeAssignment: 'Js assignmrent',
    fullTime :true,
    __proto__:teacherSupport

}
teacher.__proto__ = user

//MODERN SYNTAX

Object.setPrototypeOf(teacherSupport, teacher)

let anotherUserName = "abh and codr    "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length of the string is :${this.trim().length}`);
}
anotherUserName.trueLength();
"Bhaibhav".trueLength()
"Shahruk  ".trueLength()