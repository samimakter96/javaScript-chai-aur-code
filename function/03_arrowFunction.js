// function mul1(a, b) {
//     return a * b;
// }

// let mul2 = (a, b) => {
//     return a * b
// }

// let mul3 = (a, b) => a * b;

// console.log(mul1(3, 2));
// console.log(mul2(3, 2));
// console.log(mul3(3, 2));


// let func1 = (a, b) => a / b + a * b;

// let func2 = (c, d) => c + 5 * d / c;

// let result = 7 - func1(50, 4) / func2(40, 30);
// console.log(result);


// let func = (a, b) => {return a * b};
// console.log(func(5, 10));


// let multiplication = (num1, num2) => {
//     return num1 * num2;
// }
// console.log(multiplication(2, 6));


// let captainAdder = (name) => {return "captain" + " " + name};
// let captainAdder = (name) => {return `captain ${name}`};
// console.log(captainAdder("Samim"));


const user = {
    userName: "Samim",
    price: 999,

    
    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`)
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "john"
// user.welcomeMessage()

// console.log(this);


// function one() {
//     let user = "samim"
//     console.log(this.user);

// }

// one();


// function one = function() {
//     let user = "samim"
//     console.log(this.user);

// }

// one();


// const syaHi = () => {
//     let greeting = "Hi"
//     console.log(this.greeting);
// }

// syaHi()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2;

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) =>  ({username: "Samim"});


// const addTwo = (num1, num2) =>  (num1 + num2);

// console.log(addTwo(3, 4))


const myArray = [2, 3, 6, 3, 4, 7]


