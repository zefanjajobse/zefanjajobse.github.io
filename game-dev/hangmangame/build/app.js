window.addEventListener("load", init);
const lettersInDOM = document.querySelector("#letters");
const attemptInDOM = document.querySelector("#attempt");
let attempts = 5;
let isComplete = false;
const word = "Appelflap";
let lettersInWord = [];
let guessedLettersInWord = [];
function init() {
    writeAlphabetToTheDom();
    lettersInWord = word.split("");
    guessedLettersInWord = lettersInWord.map(element => {
        return "-";
    });
    lettersInDOM.textContent = guessedLettersInWord.join(" ");
    attemptInDOM.textContent = attempts.toString();
}
function writeAlphabetToTheDom() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyboard = document.querySelector("#keyboard");
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
    keyboard.addEventListener("click", checkLetters);
}
function checkLetters(event) {
    if (event.target.classList.contains("key") && attempts !== 0 && !isComplete) {
        const item = event.target.id;
        event.target.classList.add("idle");
        let containsLetter = false;
        lettersInWord.forEach((element, index) => {
            if (item == element.toLowerCase()) {
                containsLetter = true;
                guessedLettersInWord[index] = element.toLowerCase();
            }
            lettersInDOM.textContent = guessedLettersInWord.join(" ");
        });
        if (!containsLetter) {
            attempts -= 1;
            attemptInDOM.textContent = attempts.toString();
            if (attempts === 0) {
                attemptInDOM.classList.add("lost");
                attemptInDOM.textContent = "you Lost";
            }
        }
        isComplete = guessedLettersInWord.every((item) => {
            return item.match(/[a-z]/i);
        });
        if (isComplete) {
            attemptInDOM.classList.add("winner");
            attemptInDOM.textContent = "you Win";
        }
    }
}
//# sourceMappingURL=app.js.map