const user = {
  username: 'Samim',
  loginCount: 8,
  signedIn: true,

  getUserDetails: function() {
    // console.log('get user details from database');
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
}

// user.getUserDetails()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function() {
    console.log(`Welcome ${this.username}`);
  }

  return this
}


const userOne = new User('Samim', 23, true)
const userTwo = new User('Chai', 10, false)
console.log(userOne);
console.log(userTwo);
