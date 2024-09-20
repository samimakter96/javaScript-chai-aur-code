// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "samim",
            lastName: "Akter"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

// concat two or more object
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}
const obj3 = {7: "a", 8: "b", 9: "c"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// array object
const users = [
    {
        id: 1234,
        email: "s@google.com",
    },
    {
        id: 1234,
        email: "s@google.com",
    },
    {
        id: 1234,
        email: "s@google.com",
    },
    {
        id: 1234,
        email: "s@google.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object destructor
const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Samim"

}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// JSON

// {
//     "name": "Samim",
//     "courseName": "JS in hindi",
//     "price": "free"
// }

