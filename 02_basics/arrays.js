const marvel_heros = ["thor","ironman","loki"]
const dc_heros = ["batman","flash","aquaman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const crazy_array = [1,4,2,6,8,[5,0,7],8,[9,1,4,5]];
const  real_array = crazy_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("abhi"));
console.log(Array.from("abhi"));
console.log(Array.from({name:"abhi"})); // Give blank array


let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2)); // Creating array from variable
