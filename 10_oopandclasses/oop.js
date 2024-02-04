//Object Literals
const user = {
    username : "abhilash",
    loginCount: 8,
    signedIn :true,

    getUserDetails: function(){
        // console.log("got iusrs details");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}


// console.log(
//     user.getUserDetails()
// );
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()


function User(username , loginCount , isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this

}

const userOne = new User("abhilash" , 10, true)
const userTwo = new User("chai aur code ", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);