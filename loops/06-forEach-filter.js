const coding = ['js', 'python', 'java', 'c++', 'ruby', 'swift'];

// forEach dosen't return value it always return undefined
const values = coding.forEach( (item) => {
  // console.log(item);
  // return item  // undefined
})

// console.log(values);  // undefined


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => {     // in filter() method when you open a scope you have return otherwise if you won't return you get empty array []
//   return num > 4
// })
// console.log(newNums);


// const myVal = []
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

// myNum.forEach( (num) => {
//   if (num > 4) {
//     myVal.push(num)
//   }

// })
// console.log(myVal);

const books = [{
  title: 'How to win friends and influence people',
  authors: ['Dale Carnegie'],
  publisher: 'Pocket Books',
  year: '1936'
}, {
  title: 'Management: tasks, responsibilities, practices',
  authors: ['Peter F. Drucker'],
  publisher: 'Harper Business',
  year: '1985'
}, {
  title: 'Strength finder 2.0',
  authors: ['Tom Rath'],
  publisher: 'Gallup Press',
  year: '2007'
}, {
  title: 'In search of excellence: Lessons from America\'s best-run companies',
  authors: ['Thomas Peters', ' Robert H. Waterman'],
  publisher: 'Harper Collins',
  year: '1982'
}, {
  title: 'Built to last: Successful habits of visionary companies',
  authors: ['James C. Collins', 'Jerry I. Porras'],
  publisher: 'Harper Collins',
  year: '1994'
}, {
  title: 'Reengineering the corporation: A manifesto for business revolution',
  authors: ['Michael Hammer', 'James A. Champy'],
  publisher: 'Harper Collins',
  year: '1993'
}, {
  title: 'Competitive advantage: Creating and sustaining superior performance',
  authors: ['Michael E. Porter'],
  publisher: 'Free Press',
  year: '1998'
}, {
  title: 'Crossing the chasm: Marketing and selling technology products to mainstream customers',
  authors: ['Geoffrey A. Moore', 'Regis McKenna'],
  publisher: 'Pocket Books',
  year: '1936'
}, {
  title: '7 habits of highly effective people: Powerful lessons in personal change',
  authors: ['Stephen R. Covey'],
  publisher: 'Simon and Shuster',
  year: '1990'
}, {
  title: 'The Six Sigma Way',
  authors: ['Peter S. Pande et al', 'Robert P. Neuman', 'Roland R. Cavanagh'],
  publisher: 'McGraw Hill',
  year: '2000'
}, {
  title: 'The innovator\'s dilemma: When new technologies cause great firms to fail',
  authors: ['Clayton M. Christensen'],
  publisher: 'Harvard Business School Press',
  year: '1997'
}, {
  title: 'The Essential Drucker',
  authors: ['Peter F. Drucker'],
  publisher: 'Harper Business',
  year: '2001'
}];


// const userBooks = books.filter( (book) => book.year === '2000');
// console.log(userBooks)

// const author = books.filter( (book) => book.authors >= 'Stephen R. Convey');
// console.log(author);

// const bookTitle = books.filter( (bk) => {
//   return bk.title === 'The Six Sigma Way'
// })
// console.log(bookTitle);


const bookYear = books.filter( (book) => {
  return book.year >= '2000'
})
console.log(bookYear)