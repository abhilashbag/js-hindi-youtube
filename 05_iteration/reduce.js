const myNum = [1 , 2, 3]

// const mytotal = myNum.reduce(function(acc , currval) {
//     console.log(`accumulator : ${acc} and current val :${currval}`);
//     return acc + currval

// },0)

// const myTotal = myNum.reduce( (acc , currval) => acc+currval, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: " js course",
        price: 2999
    },
    {
        itemName: " java course",
        price: 1499
    },
    {
        itemName: " Php course",
        price: 2450
    },
    {
        itemName: " Ruby course",
        price: 4999
    },
    
]

const price = shoppingCart.reduce((acc,item)=> acc+ item.price,0)

console.log(price);