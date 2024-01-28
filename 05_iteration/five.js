const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( function (item){
//     console.log(`this item: ${item}`);
// })
// coding.forEach( (val) =>{
//     console.log(`hti valueis : ${val}`);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index,arr)=>{
//     console.log(item, index ,arr);
// })

const myCoding = [
    {
        language :"javascript",
        file:"index.js"
    },
    {
        language :"python",
        file:"index.py"
    },
    {
        language :"laraval",
        file:"index.php"
    }
]
myCoding.forEach((item)=>{
    console.log(item);
    console.log(item.language);
    console.log(item.file);
})