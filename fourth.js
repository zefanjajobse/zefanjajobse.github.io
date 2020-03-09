function pleaseDoNotShout() {
    console.info('SHOUT');
}

function pleaseDoNotShoutMyName(myName) {
    let whisper = '...whispering... ' + myName;
    return whisper;
}

function giveMeSomeNiceName(gender) {
    let name = ""
    if (gender == "men") {
        name = "Arnold"
    } else if (gender == "woman") {
        name = "betty"
    } else {
        name = "(this is not a gender)"
    }
    return("myNewName is " + name)
}

// function expression in a variable
const name = function(gender){
    let name = ""
    if (gender == "men") {
        name = "Arnold"
    } else if (gender == "woman") {
        name = "betty"
    } else {
        name = "(this is not a gender)"
    }
    return("myNewName is " + name)
}

// arrow function in a variable
const name2 = (gender) => {
    let name = ""
    if (gender == "men") {
        name = "Arnold"
    } else if (gender == "woman") {
        name = "betty"
    } else {
        name = "(this is not a gender)"
    }
    return("myNewName is " + name)
}

// je kan in meerdere consoles loggen
//console.log(1);
//console.warn(2);
//console.error(3);
//console.debug(4);

function pig(numberOfPigs) {
    let pigs = "";
    for (let index = 0; index < numberOfPigs; index++) {
        pigs = pigs + "\u{1F437}"
    }
    return pigs + "knor!"
}

console.log("🐷");

function factorial(num) {
    ans = 1;
    for (let index = 1; index <= num; index++) {
        ans = index * ans;
    }
    return ans;
}

/**
 * let is blockscoped (dus alleen aanroepbaar binnen de functie)
 * var is globaal (dus ook buiten de functie)
 * const is ook gloaal maar kan niet veranderen
 */

// Array.length()
// Array.reverse()
// Array.sort()
// Array.push()
// Array.pop()
// Array.push()

/**
 * var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
 * donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
 * == donuts.splice((index),(items to remove),("list of items to add"))
 * Returns: ["chocolate frosted"]
 * donuts array: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]
 */

 /**
  * instead of for looping through items in a array
  */
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     
 }
 /**
  * do
  */
 array.forEach(element => {
     
 });