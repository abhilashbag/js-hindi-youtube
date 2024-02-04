//ES 6

// class user  {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abh`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new user("myUser","chai@gmail.com", "12345")
// console.log(chai.changeUsername());

//Behind the sceene

function user(username , email , password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword =function(){
    return `${this.password}abc`
}
user.prototype.changeUsername =function(){
    return `${this.username.toUpperCase()}1`
}

const tea = new user("Tea", "teac@gamil.com", "234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());