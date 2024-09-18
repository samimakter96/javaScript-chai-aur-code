const myNums = [1, 2, 3];

// const initialValue = 0;

// const myTotal = myNums.reduce( function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`)
//   return acc + currVal
// }, initialValue);

// console.log(myTotal)


const mySum = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(mySum)



const shoppingCart = [
  {
    courseName: 'JS-course',
    price: 2999
  },
  {
    courseName: 'py-course',
    price: 2025
  },
  {
    courseName: 'data science-course',
    price: 12999
  },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(priceToPay);
