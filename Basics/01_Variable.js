const accountId = 143533;
let accountEmail = "samim@google.com";
var accountPassword = "123345";
accountCity = "Bangalore";
let accountState;

// accountId = 2; not allowed


accountEmail = "sa@google.com";
accountPassword = "2352";
accountCity = "Delhi";

console.log(accountId);


/*
Prefer not to use var 
because of issue in block scope and  function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])