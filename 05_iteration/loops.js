//For of loop

//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5]
 for (const num of arr){
    //console.log(num);
 }

 const greeting = "Hello world"
 for(const greet of greeting){
    if (greet == "o") {
        let count = 1;
        // console.log(`count val ${count}`);
    }
 //   console.log(greet);
 }

 //Map
 const map = new Map()
 map.set('IN',"india")
 map.set('USA',"America")
 map.set('HYD',"india")
//  map.set('IN',"india")//wont repeat entries

//  console.log(map)
for (const [key, value] of map) {
    console.log(key ,':-',value);
}

const myObject ={
    "game" : "NFS",
    "game2": "PUBG"
}
for (const [key, value] of myObject) {
    console.log(key ,':-',value);
}
