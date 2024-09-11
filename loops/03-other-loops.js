// for of : return value


// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = 'Hello world!';
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }


// Maps
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map)
// console.log(map.get('IN'))

for (const [key, value] of map) {
  console.log(key, ':', value)
}


const myObject = {
  game1: "Cricket",
  game2: "Football",
  game3: 'Basketball'
}

// for (const [key, value] of myObject) {
//   console.log(key, ":", value)   // Error: myObject is not iterable
// }


