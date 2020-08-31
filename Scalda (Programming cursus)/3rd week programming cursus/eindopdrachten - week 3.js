/**
 * check if the numbers 1 to 100 are dividable by 4
 */
let numbers = 1; // create the first number to check
while (numbers <= 100) { // loop trough the numbers intil 100
    if (numbers % 4 == 0) {
        console.log(numbers + " is dividable by 4") // log if its posible to devide by 4
    }
    numbers++; // iterate to the next number to check
}

// in javascript to add the an array use array.push()
// for python this function is array.append()

// shortcode for i = i + 2 ---- i += 2

/**
 * Fibonacci getallenreeks
 */
firstNumber = 0;
number = 1;
fibonacciRange = [1, 2, 3, 4];
//while (fibonacciRange.length <= 10) {

   // firstNumber = number.charAt(fibonacciRange.length);
//}
console.log(firstNumber);
total = 0;
let array = [2, 4, 8, 9, 12, 13];
array.forEach(element => {
    total = total + element;
});
console.log(total);