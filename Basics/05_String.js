const name = "samim";
let age = 20;

console.log(`My name is ${name} and my age is ${age}`)

const gameName = new String("FreeFire-Battle-Game");

console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);



const anotherName = "samim akter";
console.log(anotherName.slice(-8, 4));

const newStringOne = "   samim   "
console.log(newStringOne.trim());


const url = "https://google.com/google%20com"
console.log(url.replace('%20', '-'))

console.log(url.includes("google"));

console.log(gameName.split("-"));