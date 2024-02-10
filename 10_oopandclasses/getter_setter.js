class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}abhilash`
    }
    set password(value){
        this._password = value
    }
}

const abhi = new User("Abhi@gmail.com","1234")
console.log(abhi.password);
console.log(abhi.email);