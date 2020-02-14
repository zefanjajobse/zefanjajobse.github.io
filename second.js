let numberOfDayOfWeek = 2;
if (numberOfDayOfWeek == 1) {
    console.log('het is vandaag maandag!');
} else {
    console.log('het is alles behalve maandag');
}

let topic = 'football';
let difficultyLevel = 'easy';
let question = '';

// difficultyLevel == 'easy' -> 'Welke speler heeft nummer 10 in het huidige elftal van Barcelona?'
// difficultyLevel == 'moderate' -> 'Welke speler heeft de meeste interlands achter zijn naam staan?'
// difficultyLevel == 'hard' -> 'Welke speler schoot in de WK-finale van 1978 op de paal?'

if (difficultyLevel == 'easy') {
    question = 'Welke speler heeft nummer 10 in het huidige elftal van Barcelona?';
} else if (difficultyLevel == 'moderate') {
    question = 'Welke speler heeft de meeste interlands achter zijn naam staan?';
} else if (difficultyLevel == 'hard') {
    question = 'Welke speler schoot in de WK-finale van 1978 op de paal?';
}
console.log(question);
// switch statements:
let toDay = 2;

switch (toDay)  {
    case 0:
        console.log('het is vandaag zondag!');
        break;
    case 1:
        console.log('het is vandaag maandag!');
        break;
    case 2:
        console.log('het is vandaag dinsdag!');
        break;
    case 3:
        console.log('het is vandaag woensdag!');
        break;
    default:
        console.log('dit klopt niet');
        break;
}
// switch statement version of the previous if statement
let topic2 = 'football';
let difficultyLevel2 = 'easy';
let question2 = '';

switch (difficultyLevel2) {
    case 'easy':
        question2 = 'Welke speler heeft nummer 10 in het huidige elftal van Barcelona?';
        break;
    case 'moderate':
        question2 = 'Welke speler heeft de meeste interlands achter zijn naam staan?';
        break;
    case 'hard':
        question2 = 'Welke speler schoot in de WK-finale van 1978 op de paal?';
        break;
}
console.log(question2);

/**
 * var a = 3;
 * var b = -2;
 * 
 * console.log(a > 0 && b > 0); -- && = and -- false -- if both are true
 * console.log(a > 0 || b > 0); -- || = or -- true -- if one of them is true
 * console.log(!(a > 0 || b > 0)); -- ! = tegenovergestelde == false
 */

// BMI = gewicht / lengte²
console.log(80/(1.80 ** 2));

/**
 * < 18.5 ondergewicht -- laag
 * 18.5 - 24.9 normaal gewicht -- gemiddeld
 * 25 - 29.9 overgewitch -- verhoogd
 * 30 obesitas -- duidelijk verhoogd
 */
let gewicht = 80;
let lengte = 1.80;

let bmi = (gewicht/(lengte ** 2));

let uitslag = [];

if (bmi < 18.5) {
    uitslag = ['ondergewicht', 'laag risico'];
} else if (bmi >= 18.5 && bmi < 24.9) {
    uitslag = ['normaal gewicht', 'gemiddeld risico'];
} else if (bmi >= 24.9 && bmi < 29.9) {
    uitslag = ['overgewicht', 'verhoogd risico'];
} else if (bmi > 30) {
    uitslag = ['obesitas', 'duidelijk verhoogd risico'];
} else {
    uitslag = ['invalid', 'invalid'];
}

function bmitest(length, weight) {
    let bmiuitslag = (weight/(length ** 2));
    if (bmiuitslag < 18.5) {
        uitslagtest = ['ondergewicht', 'laag risico'];
    } else if (bmiuitslag >= 18.5 && bmiuitslag < 24.9) {
        uitslagtest = ['normaal gewicht', 'gemiddeld risico'];
    } else if (bmiuitslag >= 24.9 && bmiuitslag < 29.9) {
        uitslagtest = ['overgewicht', 'verhoogd risico'];
    } else if (bmiuitslag > 30) {
        uitslagtest = ['obesitas', 'duidelijk verhoogd risico'];
    } else {
        uitslagtest = ['invalid', 'invalid'];
    }
    return uitslagtest;
}

console.log(uitslag)

/**
 * function test (myCondition) {
 *  if (myCondition) {
 *     return "It was true"; -- return returns request even if there is code left beneath it
 *  }
 *  return "It was false";
 * }
 */

var now = Date.now();
var time1 = //whatever time1 is
var time2 = //whatever time2 is

if (now > time1 && now < time2)
{
    alert("blah"):
}
