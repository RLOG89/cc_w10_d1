//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; //array
{}; //object
1.1; //number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

var num = 20;//3.1 Assign a variable that is a number 
var str = "hello"; //3.2 Assign a variable that is a string
var bool = true; //3.3 Assign a variable that is a boolean
var obj = new Object;//3.4 Assign a variable that is an object

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

var animalOne = animals[0] //5.1. Assign the first element to a variable
var lastAnimal = animals[(animals.length -1)]//5.2. Assign the last element to a variable
var length = animals.length //5.3. Assign the length of an array to a variable
animals.push("horse")//5.4. Add an item to the end of the array
animals.unshift("dog")//5.5. Add an item to the start of the array
var index = animals.indexOf["hedgehog"]//5.6. Assign the index of hedgehog to a variable

//Section 6

var veg = ["asparagus", "green bean", "carrot", "sugar snap peas", "brocoli"]//6.1 Create an array of 5 vegetables
//6.2 Loop over the array and write to the console using a "while"
counter = 0;
while (counter < veg.length) {
  console.log(veg[counter])
  counter ++
}
//6.3 Loop again using a "for" with a counter
for (var i = 0; i < veg.length; i++) {
  console.log(veg[i])
}
//6.4 Loop again using a "for in"
for (item in veg) {
  console.log(veg[item]);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

//7.1 Calculate the total cash in accounts
var total = function() {
var sum = 0
for (var key in accounts) {
  sum += accounts[key].amount;
  } 
return sum
}
console.log(total());

//DRYer solution

var sum = 0
for (account of accounts) {
  sum += account["amount"]
}
console.log(sum);

//7.2 Find the amount of money in the account with the largest balance

var largestValue = 0
for (account of accounts) {
  if (largestValue < account["amount"]) {
    largestValue = account["amount"]
  }
}
console.log(largestValue);

//7.3 Find the name of the account with the smallest balance

var smallestValue = 99999
var accountName = ""

for (account of accounts) {
  if (smallestValue > account["amount"]) {
    smallestValue = account["amount"];
    accountName = account["name"];
  }
}
console.log(accountName);

//7.4 Calculate the average bank account value

var average = function() {
var sum = 0
for (var key in accounts) {
  sum += accounts[key].amount;
  } 
return (sum / accounts.length)
}
console.log(average());

//7.5 Find the value of marcs bank account
var total = 0
for (account of accounts) {
  if (account.name === "marc") {
    total += account["amount"]
  }
}
console.log(total);

//7.6 Find the holder of the largest bank account

var largestValue = 0
var accountName = ""

for (account of accounts) {
  if (largestValue < account["amount"]) {
    largestValue = account["amount"];
    accountName = account["name"];
  }
}
console.log(accountName);

//7.7 Calculate the total cash in business accounts

var sum = 0
for (account of accounts) {
  if (account.type === "business") {
    sum += account["amount"]
  }
}
console.log(sum);

//7.8 Find the largest personal account owner

var largestValue = 0
var accountName = ""

for (account of accounts) {
  if (account.type === "personal")
    if (largestValue < account["amount"]) {
      largestValue = account["amount"];
      accountName = account["name"];
    }
  }
  console.log(accountName);

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var eat = function(food) {
  stomach = new Array;
  stomatch.push(food);
}

var myPerson = {
  name: "Ross",
  height: "5ft 12",
  favouriteFood: "Fillet Steak",
  eat: eat("Vindaloo")
}
