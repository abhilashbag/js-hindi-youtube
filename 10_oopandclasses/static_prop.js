class user {
    constructor(username , email){
        this.username = username;
        this.email = email;
    }
    logMe(){
        console.log(`username: ${this.username}`);
    
    }

    static createID(){
        return `1234`
    }
}

const abhi = new user("abhilash")
// console.log(abhi.createID())


class teacher extends user{
    constructor(username, email){
        super(username)
        this.email
    }
}

const iphone = new teacher("iphone", "iphone@user.com")
console.log(iphone.logMe())
console.log(iphone.createID())