// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "1234"
tinderUser.name = "Sabana"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "sonam@gamil.com",
    fullname: {
        userfullname:{
            firstname: "sahhrukh",
            lastname:"KHan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"w",6:"e"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
//USing Spead Operator
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users = [
    {
        id:1,
        email: "hot@gmail.com"
    },
    {
        id:1,
        email: "hot@gmail.com"
    
    }, {
        id:1,
        email: "hot@gmail.com"
    },
    {
        id:1,
        email: "hot@gmail.com"
    
    }
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js in hindi",
    price:"free",
    courseinstructor:"abhilash"
}
const {courseinstructor: instructor} = course
//console.log(courseinstructor);
//console.log(instructor);
 
   