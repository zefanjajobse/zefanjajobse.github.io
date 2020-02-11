/**
 * resultaat checker
 */
// create variable
function grade(number) {
    // if var is less then 6 result = onvoldoende
    if (number < 6) {
        return "onvoldoende";
    }
    else if (number >= 6 && number < 7) {
        return "voldoende";
    }
    else if (number >= 7 && number <= 9) {
        return "goed";
    }
    else if (number > 9) {
        return "uitmuntend";
    }
    else {
        // after all else fails return invalid
        return "invalid";
    }
}
/**
 * resultaat checker, switch versie
 */
function gradeswitch(number) {
    switch (true) { // choose case if true
        // if var is less then 6 result = onvoldoende
        case (number < 6):
            return "onvoldoende";
            break;
        case (number >= 6 && number < 7):
            return "voldoende";
            break;
        case (number >= 7 && number <= 9):
            return "goed";
            break;
        case (number > 9):
            return "uitmuntend";
            break;
        default:
            // after all else fails return invalid
            return "invalid";
            break;
    }
}
/**
 * can i enjoy my book?
 */
var purchasedBook2 = true;
var job2 = 'teacher';
var inTrain2 = false;
var message2 = "";
// @ts-ignore
if (purchasedBook2 === true && inTrain2 === true && job2 == 'teacher') {
    message2 = 'finally i can enjoy my book!';
    // @ts-ignore
}
else if (purchasedBook2 === false || inTrain2 === false && job2 == 'teacher') {
    message2 = "oof";
}
else if (job2 != 'teacher') {
    message2 = 'éven bigger oof';
}
console.log(message2);
