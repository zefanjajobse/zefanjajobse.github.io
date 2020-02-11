let numberOfDayOfWeek = 2;
if (numberOfDayOfWeek == 1) {
    console.log('het is vandaag maandag!');
} else {
    console.log('het is alles behalve maandag');
}

let topic = 'football';
let difficultyLevel = 'easy';
let question = '';

if (difficultyLevel == 'easy') {
    question = 'Welke speler heeft nummer 10 in het huidige elftal van Barcelona?';
} else if (difficultyLevel == 'moderate'){
    question = 'Welke speler heeft de meeste interlands achter zijn naam staan?';
} else if (difficultyLevel == 'hard') {
    question = 'Welke speler schoot in de WK-finale van 1978 op de paal?';
}
console.log(question);
