/**
 * even/uneven checker
 */

// define the number that needs to be checked
let number = 10;
// if number is even, show that's even
if ((number % 2) == 0) {
    console.log("This number is even")
// if number is uneven
} else if ((number % 2) == 1) {
    console.log("This number isn't even")
// if value is string
} else (
    console.log("This is invalid")
)

/**
 * change words in a string
 */

// define a string
let defaultString = "Programming is not so cool";
// remove the word "not" and the white space
newString = defaultString.replace("not ", "");
// log to console
console.log(newString);

/**
 * compare strings / numbers
 */

// compare a number and a string
let compareStrings = 1400 != "Ik woon in Naboo";
// if you compare strings it checks if the content is the same, numbers and strings are only the same if you the string had a number with ==, it will be false with ===:
// console.log(1400 === "1400") = false
// console.log(1400 == "1400") = true
console.log(compareStrings);
