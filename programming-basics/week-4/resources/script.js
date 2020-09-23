// while loop

let sips = 0;

while (sips <= 10) {
    console.log('Ah nice', sips);
    sips++; // after each step add 1 to sips
}

let seps = 0;

// first run code than check condition and run again
// do while loop
do {
    console.log("ah, that is better", seps);
    seps++;
} while (seps <= 0)


for (let sops = 0; sops <= 10; sops++) {
    console.log('wow, sops', sops)
}

// een string is altijd waar wanneer er iets in staat en verder geen vergelijking in staat.
//make it a int: parseInt()

//als je een + voor de prompt zet dan word het omgezet naar number hij doet dat omdat hij dan 0+prompt doet

// const number = +prompt("test")
// console.log(number)

const start = 0;
const end = 100;
let total = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
        total += i
    }
}

console.log(total)
// telt alle oneven getallen bij elkaar op

const base = 3;
const exponent = 4;
let result = 1;

for (let i = 0; i < exponent; i++) {
    result *= base;
}

console.log(`${base} ^ ${exponent} = ${result}`)

let number = 0;
let input;
while (number < 100) {
    input = prompt("input a number bigger than 100" , "");
    if (input === "") {
        break;
    }
    number = parseInt(input);
}
console.log(number);

// part 2, 1
const string = "I am a developer";
let i = 0;
while (i <= string.length) {
    console.log(string[i]);
    i++;
}

for (let i = string.length; i >= 0; i--) {
    console.log(string[i]);
}

// part 2,2
const word = "radar";
i = 0;
let b = word.length-1;
while (i <= word.length) {
    if (word[i] !== word[b]) {
        console.log("this is not a palindrome");
        break
    } else if (i == word.length) {
        console.log("this is a palindrome");
    }
    i++;
    b--;
}

for (i=0, b=word.length-1; i <= word.length; i++, b--) {
    if (word[i] !== word[b]) {
        console.log("this is not a palindrome");
        break
    } else if (i == word.length) {
        console.log("this is a palindrome");
    }
}

// get prime numbers
let n = 10;
let result = [];
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  result.push(i); // a prime
}
console.log(result)