"use strict";   // treat all js code as newer version

// let name = "samim";
// let age = 18;
// let isLoggedIn = false
// let state;

// Primitive:
// number => 2 to power 53
// bigint
// string => ""
// boolean => true / false
// null => standalone value
// undefined => 
// symbol => unique



//  object

// console.log(typeof null);

// Primitive:
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const firstName = "samim";  // String

let score = 100;
let scoreValue = 100.3;   // Number

let isMarried = false   // Boolean

const outsideTemp = null;   // null

let userEmail;   // undefined

const id = Symbol('123');    // Symbol
const anotherId = Symbol('123');

const bigNumber = 23583366347394n   // BigInt



// Non-Primitive:
// Array, Objects, Function

const companies = ["Google", "Microsoft", "Facebook", "Amazon", "Netflix"];     // Array

let myObj = {
    name: "Samim",   // Objects
    myAge: 20,
}


const myFunction = function() {

    console.log("Hello World");
}



//  Stack (Primitive),  Heap (Non-Primitive)

let myYoutubeName = "SamimAkter";

let anotherName = myYoutubeName;

anotherName = "samim akter96"

console.log(myYoutubeName);
console.log(anotherName);


// Heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "samim@google.com"
console.log(userOne.email);
console.log(userTwo.email);