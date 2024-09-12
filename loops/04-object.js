const myObject = {
  js: 'JavaScript',
  py: 'Python',
  cpp: 'C++',
  rb: 'ruby'
}

// for in : return index or key

// for (const key in myObject) {
//   console.log(`${key} full form is ${myObject[key]}`)
// }


const programming = ['js', 'py', 'c++', 'java', 'ruby'];

for (const key in programming) {
  console.log(programming[key])
}


