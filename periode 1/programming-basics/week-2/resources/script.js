const myName = "zefanja"; // object type: string;
let date = 2020; // object type: date;
let driversLicense = false; // object type: boolean;
let today = new Date();
console.log(myName.toUpperCase()); // method
console.log(today.getFullYear());
console.log(date - 20);
/* multiline
comment */

// declaring and using a variable the long way
let oof;
oof = "big oof"
console.log(oof)

let javaScriptIsCaseSentitive;
javaScriptIsCaseSentitive = true;
// const needs declaration in order to function at all.

//alert("big data")

// let confirm = confim("is this ok?") will display a ok prompt and returns true when ok is pressed

// % remainder after a division
// ** multiplies the first number, secondnumberamount of items

// var can be used outside the function but its old
// let is only in the function or it needs to be defined outside
// const is constand

// add a string to a string (can also be used for counting): +=


let firstName = "Zefanja";
let lastName = "Jobse";
let age = 22;


// string concatenation with ${name} and ` at the beginning and end.
console.log(`Hello, I am ${firstName} ${lastName} and I am ${age} years old`);

priceOfAnApple = '0.59';
numberOfApples = 200;

console.log(priceOfAnApple*parseFloat(numberOfApples))

const a=5,b=6

// use Math for all other math functions that cant be done with the default * / ** etc
const c = Math.sqrt(a**2 + b**2)

// only show 2 decimals behind the dot
console.log(c.toFixed(2))

const newC = a**2 + b**2;

console.log(newC + "²")

string = 'Please visit the HZ University of Applied Sciences'

newString = string.substr(0,34) + 'Mad' + string.substr(41,50);

betterMethod = string.replace('Applied','Mad')

console.log(newString)
console.log(betterMethod)
