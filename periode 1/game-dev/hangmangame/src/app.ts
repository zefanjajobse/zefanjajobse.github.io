window.addEventListener("load", init);

//Global variables
const lettersInDOM: HTMLDivElement = document.querySelector("#letters");
const attemptInDOM: HTMLDivElement = document.querySelector("#attempt");
let attempts: number = 5;
let isComplete:Boolean = false;

// word to guess with in the game
const word:string = "Appelflap"
let lettersInWord:string[] = []
let guessedLettersInWord:string[] = []

/**
 * Function to initialize the programme
 */
function init() {
  //write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();

  // split the word into a array
  // and fill the guessedLettersInWord with "-"
  lettersInWord = word.split("");
  guessedLettersInWord = lettersInWord.map(element => {
    return "-"
  });
  // show in the attempts and guessedLetters in the DOM
  lettersInDOM.textContent = guessedLettersInWord.join(" ")
  attemptInDOM.textContent = attempts.toString()
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard: HTMLDivElement = document.querySelector("#keyboard");
  alphabet.forEach(function (element, index) {
    let divKey: HTMLDivElement = document.createElement("div");
    divKey.id = element;
    divKey.classList.add("key");
    divKey.innerHTML = element;
    keyboard.append(divKey);
  });
  keyboard.addEventListener("click", checkLetters)
}

/**
 * adds the letters to the dom,
 * decrement the amount of attempts left
 * and checks the whole list if you won.
 * @param event MouseEvent when clicking the letters
 */
function checkLetters(event:MouseEvent) {
  // check if you already won/lost and if you actually pressed the keyboard
  if ((<Element>event.target).classList.contains("key") && attempts !== 0 && !isComplete) {
    // add the letter to the DOM if correct
    const item:string = (<Element>event.target).id;
    (<Element>event.target).classList.add("idle");
    let containsLetter:Boolean = false
    lettersInWord.forEach((element, index) => {
      if (item == element.toLowerCase()) {
        containsLetter = true
        guessedLettersInWord[index] = element.toLowerCase()
      }
    lettersInDOM.textContent = guessedLettersInWord.join(" ")
    });

    // lower attempts if the letter isnt there
    if (!containsLetter) {
      attempts-=1
      attemptInDOM.textContent = attempts.toString()
      // show you lost when attempts == 0
      if (attempts === 0) {
        attemptInDOM.classList.add("lost")
        attemptInDOM.textContent = "you Lost"
      }
    }

    // show you win when every letter is there
    isComplete = guessedLettersInWord.every((item) => {
      // /[(bewtween a and z)]/(not case sensitive)
      return item.match(/[a-z]/i)
    })
    // show you win when the REGEX above cant find letters a-z
    if (isComplete) {
      attemptInDOM.classList.add("winner")
      attemptInDOM.textContent = "you Win"
    }
  }
}