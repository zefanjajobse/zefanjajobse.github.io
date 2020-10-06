// // let ul = document.getElementById('groceryList'); // via id

// // // via queryselection #id, selects only the first element it finds
// let ul = document.querySelector("#groceryList"); 
// // // is a list:
// // let ul = document.querySelectorAll(".grocery");
// ul.classList // shows the list of classes

// ul.classList.add("ulBackground") // adds the class ulbackground to the list

// // create a new element
// let newElement = document.createElement("li");

// // add the text to the item
// newElement.textContent = "Test";

// // add the class grocery
// newElement.classList.add(".grocery")

// // append the element back to the DOM
// ul.append(newElement)

// console.log(ul);

// const old_allMyRecords = [
//     [
// 		"The Who - Pinball Wizard", 
// 		"Rolling Stones - Exile on main street", 
// 		"Police - Message in a bottle"
//     ],
//     [
// 		"De Dijk - Alle 40 Goed", 
// 		"Het Goede Doel - Belgie", 
//         "Doe Maar - skunk"
//     ]
// ]

// const allMyRecords = [
//     {
//         name: "Pinball Wizard",
//         artist: "The Who"
//     },
//     {
//         name: "Exile on main street",
//         artist: "Rolling Stones"
//     },
//     {
//         name: "Message in a bottle",
//         artist: "Police"
//     },
//     {
//         name: "Alle 40 Goed",
//         artist: "De Dijk"
//     },
//     {
//         name: "Belgie",
//         artist: "Het Goede Doel"
//     },
//     {
//         name: "Doe Maar",
//         artist: "skunk"
//     }
// ]

// function addToDom(arr) {
//     const body = document.querySelector("body")
//     arr.forEach(element => {
//         let newElement = document.createElement("div");
//         newElement.textContent = `Album: ${element.name}`;
//         body.append(newElement);
//         newElement = document.createElement("div");
//         newElement.textContent = `Artist: ${element.artist}`;
//         body.append(newElement);
//         newElement = document.createElement("br");
//         body.append(newElement)
//     });
// }

// // addToDom(allMyRecords)

// // DOM elements == nodes, html elements, tags, objects (andere benamingen)

// // 1.

// const paragraph = document.querySelectorAll("p");
// paragraph[1].classList.add("ulBackground")

// function removeParent(element, selector) {
//     const toRemove = element.closest(selector)
//     toRemove.remove() 
// }

// removeParent(paragraph[1], "p")

// // 2.

// const books = [
//     {
//       author: "Glennon Doyle",
//       title: "Untamed",
//     },
//     {
//       author: "Ijeoma Oluo",
//       title: "So you want to talk about race",
//     },
//     {
//       author: "Erik Larson",
//       title: "The splendid and the vile",
//     },
//     {
//       author: "David Kessler",
//       title: "Finding meaning: the sixth state of grieve",
//     },
//     {
//       author: "Samantha Irby",
//       title: "Wow, no thank you",
//     },
//   ];

// function createTable(params) {
//     // body selector for appending
//     const body = document.querySelector("body");

//     // create table and head
//     const table = document.createElement("table");
//     const thead = document.createElement("thead");
//     const tbody = document.createElement("tbody")

//     // create tableheading
//     const heading = document.createElement("tr");
//     const headAuthor = document.createElement("th");
//     headAuthor.textContent = "Author";
//     const headTitle = document.createElement("th");
//     headTitle.textContent = "Title";

//     // append to table
//     heading.appendChild(headAuthor);
//     heading.appendChild(headTitle);
//     thead.appendChild(heading);
//     table.appendChild(thead);

//     books.forEach(element => {
//         // create elements
//         const newLine = document.createElement("tr");
//         const author = document.createElement("td");
//         author.textContent = element.author;
//         const title = document.createElement("td");
//         title.textContent = element.title;

//         // append to table
//         newLine.appendChild(author)
//         newLine.appendChild(title)
//         tbody.appendChild(newLine)
//     });

//     // append final table
//     table.appendChild(tbody)
//     body.appendChild(table)
// }

// createTable(books)

const cal = document.querySelector("#calendar");

function createCalendar(elem, year, month) {
    // create heading
    const heading = document.createElement("tr");
    const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    weekdays.forEach(element => {
        const newDay = document.createElement("th");
        newDay.textContent = element;
        heading.appendChild(newDay);
    });
    elem.appendChild(heading);
    // iterator for newline calendar
    let weekday = 0;
    // firstline
    let row = document.createElement("tr");
    // for loop empty days beginning month
    for (let i = 0; i < new Date(`${year}-${month}-1`).getDay()-1; i++) {
        weekday += 1;
        const day = document.createElement("td");
        row.appendChild(day)
    }
    // for loop until last day
    for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
        if (weekday < 7) {
            weekday += 1;
        } else {
            elem.appendChild(row)
            row = document.createElement("tr");
            weekday = 1;
        }
        const day = document.createElement("td");
        day.textContent = i
        row.appendChild(day)
    }
    // fill last empty weekdays
    if (weekday != 7) {
        for (let i = weekday; i < 7; i++) {
            const day = document.createElement("td");
            row.appendChild(day)
        }
    }
    elem.appendChild(row)
}

createCalendar(cal, 2012, 9);