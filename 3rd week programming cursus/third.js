/**
 * while loop:
 *  continue if still true
 */
let message = 'Het is eindelijk weekend';
var i = message.length;
// print every character on a line backwards
while (i >= 0) {
    i--;
    console.log(message.charAt(i));
}

// log 1 to 10
i = 0;
while (i < 10) {
    i++
    console.log(i);
}
// print every character on a line forwards
message = 'Het is maandag';
i = 0;
while (i <= message.length - 1) {
    console.log(message.charAt(i));
    i++;
}
// print Geweldig backwards
message = 'nixin';
i = message.length;
newmessage = "";
while (i >= 0) {
    i--;
    newmessage += message.charAt(i); // korter opgescreven
    // newmessage = newmessage + message.charAt(i);
}
console.log(newmessage)
if (newmessage == message) {
    console.log('palindrome');
} else {
    console.log('geen palindrome');
}
// check for palindromes
const testsentence = 'nixin';
let firstChar = "";
let lastChar = "";
i = testsentence.length;
let t = 0;
let test = false
let halfLength = i / 2
while (halfLength >= 0) {
    i--;
    lastChar = testsentence.charAt(i);
    firstChar = testsentence.charAt(t);
    halfLength--;
    t++;
    if (lastChar == firstChar) {
        test = true;
    } else {
        test = false;
        break;
    }
}
console.log(test);
/**
 * purchasedBook test shortend true's
 */
const purchasedBook3 = true;
const job3 = 'teacher';
const inTrain3 = false;
let message3 = "";
// @ts-ignore
if (purchasedBook3 && inTrain3 && job3 == 'teacher') {
    message3 = 'finally i can enjoy my book!';
    // @ts-ignore
} else if (purchasedBook3 === false || inTrain3 === false && job3 == 'teacher') {
    message3 = "oof";
} else if (job3 != 'teacher') {
    message3 = 'éven bigger oof';
}
console.log(message3);
/**
 * for loop:
 *  continue if still true but define it in first line
 */
for (let index = 0; index < 10; index++) {
    console.log('test');
}
// 1 to 10 in a for loop
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
// print every letter in console
message = "Het is maandag!"
for (let index = 0; index < message.length; index++) {
    console.log(message.charAt(index));
}
// check if devidable by 3 with numbers 1 to 25
for (let index = 1; index < 25; index++) {
    if (index % 3 == 0) {
        console.log(index + " is deelbaar door 3")
    }
}