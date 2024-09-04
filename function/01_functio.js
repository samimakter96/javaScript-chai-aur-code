function sayMyName() {
    
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("M");
}


// sayMyName()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// } 

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    
} 

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result)


function loginUserMessage(username ="Sam") {
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Samim"))
// console.log(loginUserMessage("Samim"))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    userName: "Samim",
    price: 199
}

function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    userName: "John",
    price: 200
});


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getMyArray) {
    return getMyArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 5000, 2000]));