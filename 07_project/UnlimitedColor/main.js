//generate random color

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        
    }
    return color
}
const body = document.querySelector("body");
let interval;
document.querySelector("#start").addEventListener('click',function(){
    if (!interval) {
        interval = setInterval(() => {
            body.style.backgroundColor = randomColor();
            console.log(randomColor());
        }, 1000);
    }
})
document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(interval)
    interval = null 
})
document.querySelector("#stop")
console.log(randomColor())