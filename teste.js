// // function scope
// function showScope() {
//   var scope = "oi local"; //local variable, accessible only inside the funcion
//   scope = "oi global"; //global variable, accessible outside the function

//   return scope;
// }

// var scope = "blabla"; //global variable, accessible outside the function

// console.log(showScope()); // returns 'oi global'
// console.log(scope); // return 'blabla'


// recursion

// function factorial(number) {
//   if (number == 1) {
//     return number;
//   }
//   else {
//     return number * factorial(number-1);
//   }
// }

// console.log(factorial(5)); // prints 120
// console.log(factorial(1)); // prints 120

function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log("Insufficinet funds");
  }
}

function toString() {
  return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());