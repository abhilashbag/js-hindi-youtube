class user {
    constructor(username){
        this.username = username;
    }

    logME(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username , email, password){
        super(username);                      //refer to extend class
        this.email =email;
        this.password = password;
    }

    addCourse(){
        console.log(`a new course is added${this.username}`);
    }
}

const student = new teacher("myprofile", "profile@gmail.com", "123")

console.log(student.addCourse());


const dosa =  new user("masale")

dosa.logME()

console.log(student instanceof teacher);