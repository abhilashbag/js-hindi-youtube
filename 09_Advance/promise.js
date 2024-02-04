const promiseOne = new Promise(function (resolve ,reject) {
    // Do Async Task
    // DB calls ,cryptography,network
    setTimeout(function(){
        console.log('async task completed.');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("promise two consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"abhi@gmail.com"})
    })
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "abhilash", password:"1234"})
        }else{
            reject('ERROR: something not found')
        }
    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log('the promise is either resolve or rejected');
})


promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JAvascript", password:"12354"})
        }else{
            reject('ERROR: Js WEnt not found')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
   
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
    
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error);
//     } 
// }

//getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})






// console.log(username);