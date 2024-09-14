const coding = ['js', 'python', 'java', 'c++', 'ruby', 'swift'];

// coding.forEach( function (item) {
//   console.log(item);
// })

// forEach using arrow function
// coding.forEach( (val) => {
//   console.log(val)
// })


// function printMe(item) {
//   console.log(item);
// }


// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
// })


// access object value inside array
const myFavLanguage = [
  {
    lagName: 'JavaScript',
    lagFileName: 'js'
  },
  {
    lagName: 'Python',
    lagFileName: 'py'
  },
  {
    lagName: 'Java',
    lagFileName: 'java'
  }
];

myFavLanguage.forEach( (item) => {
  console.log(item.lagName);
})