// SINGLETON

//object Literals

const mySym = Symbol("Annie")

const JsUser = {
    name: "Abhilash",
    [mySym]: "Annie23",  //Symbol
    age: 25,
    email:"abhi@gmail.com",
    "location in":"Hyderabad",
    isLoggedIn:false,
    lastLoggedIn:["monday","saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.location in); // cannot get for blank space
// console.log(JsUser["location in"]);
// console.log(JsUser[mySym]);   // accesessing Symbol


//Object.freeze(JsUser)
JsUser.email = "Hidarling@love.com"
// console.log(JsUser);

JsUser.greeting = function () {
//     console.log("Hello Js User");
}

JsUser.greetingOne = function () {
    // console.log(`Hello Js User ${this.age}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingOne());

//+++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename: " js learn online",
    price: "999",
    courseinstructor: "Abhilash"
}

const {courseinstructor : instructor} = course;
console.log(instructor);





//       ReactJs
// const navbar = ({company}) =>{


// }
// navbar(company = "abhilash")