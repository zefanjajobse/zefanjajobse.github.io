/**
 * Var ‘name of variable’ = “string” 
 * End width: ;
 * 
 * If statements javascript
 * If (4 == 4) {
 * }
 * Else {
 * }
 */

// testapp
let firstName = 'Zefanja';
let lastName = 'Jobse';
let age = 21;
// add 1 to age:
age++;

// same way as in python add with +
let sentence = 'Hallo mijn naam is ' + firstName + ' ' + lastName + ' en ik ben ' + age + ' jaar oud';

// add a variable to a string, use "`" to make the string and add them with ${}, called template string
let sentence2 = `Hallo mijn naam is ${firstName} ${lastName} en ik ben ${age} jaar oud`;

// to view in console: console.log(firstName)
console.log(sentence2);
console.log(sentence);

/**
 * x += 5 ==  x = x + 5
 * x -= 5 ==  x = x - 5
 * x *= 5 ==  x = x * 5
 * x /= 5 ==  x = x / 5
 * x %= 5 ==  x = x % 5  == modulo - het overige van delen door, handig voor even en oneven te berekenen
 */

/**
 * korter laten zien
 * a = a * 5; == a*= 5
 * b = 3 * b; == b*= 3
 */

// use quotes in code with: \"
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// add to a string with +=
var myscndStr = "This is the first sentence. ";
myscndStr += "This is the second sentence."

// instead of name.replace('Old', 'New') you can use: firtname[1]
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

/**
 * == gelijk aan
 * != is niet gelijk aan
 * > is groter dan
 * < is kleiner dan
 * >= is groter of gelijk aan
 * <= is kleiner of gelijk aan
 */

// hoeveelheid appels * prijs
let priceOfAnApple = 1.19;
let numberOfApple = 200;
console.log("de prijs is $" + (numberOfApple * priceOfAnApple) + ",-");

// voorbeeld Boolean expression
message = 'het is vandaag ' + '25 oktober';
console.log(message);
console.log(message.charAt(4));
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.match('oktober'));

var tempC = 10
var temperture = (9 / 5) * tempC + 32

var hz = 'Please visit the HZ University of applied science';
var newhz = hz.replace('applied', 'mad');
console.log(newhz);