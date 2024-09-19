// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const userDetails = {
    name: "Samim",
    "full name": "Samim Akter",
    [mySym]: "key1",
    age: 20,
    city: "Kolkata",
    email: "samim@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// Access obj value

// console.log(userDetails.email);
// console.log(userDetails["email"]);
// console.log(userDetails["full name"]);
// console.log(userDetails[mySym]);

// update obj value

// userDetails.email = "samim@chatgpt.com";
// Object.freeze(userDetails);
// userDetails.email = "samim@microsoft.com";
// console.log(userDetails);


userDetails.greeting = function() {
    console.log("Hello JS user");
}
userDetails.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(userDetails.greeting());
console.log(userDetails.greetingTwo());


