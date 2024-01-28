//arrays

const myArray = [0,1,2,3,4,5];

const myHeros = ["shaktiman" , "kilvis" , "Dr.jakal"]

const newArray = new Array(1,2,4,5,6,7,8);
// console.log(myArray[1]);

//ARRAYS METHOD

// myArray.push(9)
// myArray.push(8)
// myArray.pop()

// myArray.unshift(0)
// myArray.shift()

// console.log(myArray.includes(3));
// console.log(myArray.indexOf(1));

// const newArr = myArray.join()

// console.log(myArray);
// console.log(newArr);


//SLICE , SPLICE
console.log("A",myArray);

const myN1 = myArray.slice(1,3)
console.log(myN1);
console.log("B",myArray);

//SPLICE its manupulate array actual element

const myN2 = myArray.splice(1,3)
console.log("C",myArray);

console.log(myN2);
