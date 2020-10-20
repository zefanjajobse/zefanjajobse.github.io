// // everything is a event

// // scroll event
// // moving mouse
// // button clicking
// // clicking on a image
// // hovering over text

// // one of the ways to get a element
// //document.getElementById("test")

// //item.addEventListener("event", function) will trigger handler inside

// let li = document.getElementById("artist1");

// li.addEventListener("click", handleClickEvent)

// function handleClickEvent(event) {
//     console.log(event.target.innerHTML);
// }

// // the event will bubble up the DOM so each elements parent
// // but it will run on both if its set on the main and the sub item

// let ul = document.getElementById("artists");

// ul.addEventListener("click", newFunction);

// function newFunction(event) {
//     if(event.target.nodeName === "LI") {
//         console.log(event.target.innerHTML)
//     }
// }

// const form = document.querySelector("form");
// const input = form.querySelector(".prachtig");
// const button = form.querySelector("button");

// button.addEventListener("click", buttonClick)

// function buttonClick(event) {
//     event.preventDefault();
//     console.log(input.value) 
//     const body = document.querySelector("body");
//     const newElement = document.createElement("ul");
//     newElement.textContent = input.value
//     body.append(newElement)
// }
// function addElementsToList(array, addTo) {
//     array.forEach(element => {
//         const newPlayer = document.createElement("li");
//         newPlayer.textContent = `${element["name"]} for ${element["club"]}`
//         addTo.append(newPlayer)
//     });
// };

// footballPlayers = [
//     {
//         name:"Steven Berghuis",
//         club:"Feyenoord"
//     },
//     {
//         name:"Jorge Acuña",
//         club:"Feyenoord"
//     },
//     {
//         name:"Maikel Aerts",
//         club:"Feyenoord"
//     }
// ];
// const ulSoccer = document.querySelector("#soccerplayers");

// addElementsToList(footballPlayers, ulSoccer);
// // objectarray == array met objecten

// document.querySelector("#hi").addEventListener("click", function(event) {
//     event.preventDefault();
//     const newElement = document.createElement("h1");
//     newElement.textContent = "Hi!"
//     const body = document.querySelector("body");
//     body.append(newElement)
// });

// 1. Clicker Game
const clicker = document.querySelector("#clicker");
const trophies = document.querySelector("#trophies");
let i = 1
clicker.addEventListener("click", function(event){
    event.preventDefault();
    i += 1
    switch (i) {
        case 10:
            trophies.textContent += "🍓";
            break;
        case 100:
            trophies.textContent += "🌽";
            break;
        case 250:
            trophies.textContent += "🧱";
            break;
        case 500:
            trophies.textContent += "🐴";
            break;
        case 1000:
            trophies.textContent += "🏆";
            break;
        default:
            break;
    }
});

// 2. Working with images
document.querySelector("#images").addEventListener("click", function(event) {
    if (event.target.alt != undefined) {
        console.log(event.target.alt)
    }
});

// 3. Simple form handling
const form = document.querySelector("form");
const chosenDate = document.querySelector("#chosenDate");
const date = form.querySelector("#date")

form.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();
    chosenDate.textContent = date.value;
})

const onload = document.addEventListener('load', newfunction);

function newfunction(event) {
    console.log("runs on load")
}

const h1 = document.createElement('h1');
h1.id = "test";
h1.classList.add("test");
h1.textContent = "test";

