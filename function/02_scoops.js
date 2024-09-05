// var c = 300
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("Inner let a value:", a)
}


// console.log("Outside/Global let a value:", a);
// console.log(b);
// console.log(c);


// Nested Scoop
function one() {
    const userName = "Samim"

    function two() {
        const website = "youTube"
        console.log(userName);
    }
    // console.log(website);    // won't execute because it's outside of the function

    two()
}

// one()

if (true) {
    const userName = "Samim"
    if (userName === "Samim") {
        const website = " youTube"
        console.log(userName + website)
    }
    // console.log(website)   // won't executes because it's outside of the if block
}
// console.log(userName)    // same it's also outside of the if block


// **************** interesting ********************

console.log(addOne(5));     // we can access it above the function

function addOne(num) {
    return num + 1
}



// console.log(addTwo(5))     // we can't because we initialize and hold in a variable
const addTwo = function(num) {
    return num + 2
}

