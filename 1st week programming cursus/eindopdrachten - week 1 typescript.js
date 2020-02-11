/**
 * even/uneven checker
 */
function checker(numbers) {
    if ((numbers % 2) == 0) {
        return numbers + " is an even number";
        // if number is uneven
    }
    else if ((numbers % 2) == 1) {
        return numbers + " isn't an even number";
        // if value is string
    }
    else {
        return "This is invalid";
    }
}
/**
 * change words in a string
 */
// define a string
var defaultStringTS = "Programming is not so cool (Typescript)";
// remove the word "not" and the white space
var newStringTS = defaultStringTS.replace("not ", "");
// log to console
console.log(newStringTS);
/**
 * compare strings / numbers
 */
// compare a number and a string
// @ts-ignore
var compareStringsTS = 1400 != "Ik woon in Naboo";
// This condition will always return 'true' since the types 'number' and 'string' have no overlap.
console.log(compareStringsTS);
