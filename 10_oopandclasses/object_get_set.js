const User = {
    _email: 'abc@gmail.com',
    _password: "abh",

    get email(){
    return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const Abhi = Object.create(User);
console.log(Abhi.email);