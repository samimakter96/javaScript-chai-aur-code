// if

// const temperature = 41;

// if (temperature === 50) {
//   console.log('less than 50')
// } else {
//   console.log('temperature is greater than 50')
// }

// console.log('executed')

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//   const power = 'fly'
//   console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)  // Error because power is not defined it's outside of the scope

// const balance = 1000;

// if (balance > 500) console.log('test'), console.log('test2')

// if (balance < 500) {
//   console.log('balance is less than 500')
// } else if (balance < 750) {
//   console.log('balance is less than 750')
// } else if (balance < 900) {
//   console.log('balance is less than 900')
// } else {
//   console.log('less than 1200')
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if (userLoggedIn && debitCard) {
  console.log('Allow to buy course');
}

if (loggedInFromGoogle || loggedInFromGoogle) {
  console.log('User logged in')
}