function pleaseDoNotShoutMyName(myName) {
    console.log("...Whispering..", myName)
}

pleaseDoNotShoutMyName("Jasper");

for (let i = 0; i < 9; i++) {
    pleaseDoNotShoutMyName('Rimmert');
}

function calculateSum(num1, num2 = 3) {// use 3 if no second number is given
    return num1 + num2;
}

// dont forget comments

/**
 * Function to calulate sum
 * @param {Number1} num1
 * @param {Number2} num2
 * @returns {oof} oof
 */

console.log(calculateSum(2, 3));


// let and const are blockscoped so locked to between brackets and also global to brackets wont work if you use let, but will work if you just reuse it
// var is functionscoped, so for a for loop var can be used outside of the for loop, for a let in a for loop can be reused outside the for loop
{let a = 0}
// wont work:
// console.log(a)
// var and let's are also hoisted to the top of everything before javascript runs


function sum(a) {
    return function(b) {
        return a+b; // takes "a" frp, the outer lexical environment
    }; 
}

alert(sum(1)(2)); // 3

/**
 * or do
 * if (text === undefined) {
 *  text = 'empty message'; 
 * }
 * if "test" is empty in function parameters, alts:
 * text = text || 'empty';
 * (count ?? "unknown")
 */

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };

welcome(); // ok now

/**
 * gives a name back
 * @param {*} animal 
 */
function giveMeSomeNiceName(animal) {
    console.log(animal, ", you crazy animal")
}

/**
 * print pigs + grunt!
 * @param {print that amount of pigs} numberOfPigs 
 */
function pig(numberOfPigs) {
    result = "";
    for (let i = 0; i < numberOfPigs; i++) {
        result += "🐷"
    }
    return result+="grunt!"
}

console.log(pig(3))

let colour = "red";
let radius = 5;
let xVelocity = 5; // the speed of a ball on the x-axis
let yVelocity = 6; // the speed of a ball on the y-axis

/**
 * print the amount of balls
 * @param {give a amount} amountOfBalls 
 */
function Balls(amountOfBalls) {
    for (let i = 0; i < amountOfBalls; i++) {
            createNewBall(radius, colour, xVelocity, yVelocity);
    }
}

Balls(10);