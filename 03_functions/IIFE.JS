//Immedietly Invoked Function Expression

(function chai() {
    //NAmed iife  chai()
    console.log(`DB CONNECTED`);
})();

// ()()  IIFE execution to removed global scope polution
// ; for stop iife 
( (name)=> {
    //Unnammed iife with parameter
    console.log(`DB CONNECTED to ${name}`); 
})('abhilash');