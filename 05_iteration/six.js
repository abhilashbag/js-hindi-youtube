//const coding = ["js", "ruby", "java", "cpp"]


// const value = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(value);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num)=>{
//      return num > 5} )

const newNum = []
myNum.forEach((num) =>{
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum);

const book = [
    {title: "Book one" , genre: "Fiction" , publish: 1981, edition:1989},
    {title: "Book Two" , genre: "Non Fiction" , publish: 1984, edition:1989},
    {title: "Book Three" , genre: "Action" , publish: 1986, edition:1999},
    {title: "Book Four" , genre: "Non Fiction" , publish: 1989, edition:2000},
    {title: "Book Six" , genre: "Thriller" , publish: 1999, edition:2001},

];

let userBook = book.filter((bk)=> bk.genre==='Fiction')
// console.log(userBook);

 userBook = book.filter((bk)=> 
 {
    return bk.publish >= 1984 && bk.genre ==='Non Fiction'})
console.log(userBook);
