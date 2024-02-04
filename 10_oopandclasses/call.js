function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");

}

function creaeUser(username, email, password){
    setUserName.call(this,username)

    this.email = email
    this.password = password
}

const chai = new creaeUser("code", "chai@gmail.com" , "123")
console.log(chai);