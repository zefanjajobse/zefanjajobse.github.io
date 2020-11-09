// declare initial values
const questions = [
    {
        question: '01101000 01100101 01101100 01101100 01101111',
        answer: 'Hello'
    },
    {
        question: '01010111 01100101 01101100 01101011 01101111 01101101',
        answer: 'Welkom'
    },
    {
        question: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
        answer: 'Tot ziens'
    },
    {
        question: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
        answer: 'Groetjes'
    }
]
let done = ""

// this eventhandler will trigger on load
window.addEventListener('load', init);

const question = document.querySelector("#questionText");

/**
 * run on init
 */
function init() {
    console.log('DOM is loaded');
    // declaring the elements in js
    const input = document.querySelector("#inputAnswer");
    const submit = document.querySelector("#submit");
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        questions.forEach(element => {
            // check if the filled in answer is correct with the objectarray
            if (question.textContent == element.question && input.value == element.answer) {
                changeAnswerText(input, isCorrect=true)
            } else {
                changeAnswerText(input, isCorrect=false)
            }
        });
    })
}

/**
 * changes the answer beneath if its correct
 * @param {string} input add this input field to the answerfield
 * @param {boolean} isCorrect boolean value with if correct
 */
function changeAnswerText(input, isCorrect) {
    // create a new answerText field
    const answer = document.querySelector("#answer");
    answer.innerHTML = "";
    answerText = document.createElement("p");
    answerText.id = "answerText";
    answerText.textContent = "Your answer "
    htmlAnswer = document.createElement("span");
    // makes the background green if correct
    if (isCorrect) {
        htmlAnswer.classList.add("bg-green");
    } else {
        htmlAnswer.classList.add("bg-red");
    }
    // adds the current answer to it
    htmlAnswer.textContent = input.value
    answerText.append(htmlAnswer);
    if (isCorrect) {
        answerText.innerHTML += " is fully correct!"
        updateQuestion()
    } else {
        answerText.innerHTML += " is incorrect!"
    }
    answer.append(answerText)
}

/**
 * show the next question if correct
 */
function updateQuestion() {
    done = question.textContent;
    console.log(done)
    // picks the next question after the previous question is correct
    newquestion = Math.floor(Math.random() * questions.length)
    question.textContent = questions[newquestion].question
    // questions.forEach((element, index, array) => {
    //     if (element.question == done) {
    //         if (array[index+1] != null) {
    //             question.textContent = array[index+1].question
    //         } else {
    //             // shows no more questions if there are no more items in the array 
    //             question.textContent = "No more questions!"
    //         }
    //     }
    // });
}