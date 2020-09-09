/**
 * resultaat checker
 */
// create variable
let number = 10;
let result = "";
// if var is less then 6 result = onvoldoende
if (number < 6) {
    result = "onvoldoende";
} else if (number >= 6 && number < 7) {
    result = "voldoende";
} else if (number >= 7 && number <= 9) {
    result = "goed";
} else if (number > 9) {
    result = "uitmuntend";
} else {
// after all else fails return invalid
    result = "invalid";
}
// print to log
console.log(result);

/**
 * resultaat checker, switch versie
 */

let number2 = 8;
let result2 = "";

switch (true) { // choose case if true
    // if var is less then 6 result = onvoldoende
    case (number2 < 6):
        result2 = "onvoldoende";
        break;
    case (number2 >= 6 && number2 < 7):
        result2 = "voldoende";
        break;
    case (number2 >=7 && number2 <= 9):
        result2 = "goed";
        break;
    case (number2 > 9):
        result2 = "uitmuntend";
        break;
    default: 
    // after all else fails return invalid
        result2 = "invalid"
        break;
}

console.log(result2)

/**
 * can i enjoy my book?
 */

let purchasedBook = true;
let job = 'teacher';
let inTrain = false;

if (purchasedBook === true && inTrain === true && job == 'teacher') {
    message = 'finally i can enjoy my book!';
} else if (purchasedBook === false || inTrain === false && job == 'teacher') {
    message = "oof";
} else if (job != 'teacher') {
    message = 'éven bigger oof';
}

console.log(message);