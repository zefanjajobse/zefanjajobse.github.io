/**
 * <ul id=groceryList>
 *  <li></li>
 *  <li></li>
 *  <li></li>
 * </ul>
 */
// id aanspreken
//const ulList = document.getElementById('groceryList');
// alle li's aanspreken
//const listItems = document.getElementsByTagName('li');
// laaste element van een lijst (zoals li) via listItems variable hierboven
//const lastItemFromListItems = listItems[listItems.length-1].innerText;
// exact de 3e item - in dit geval ook het laatste item
//lastItemFromListItems = listItems[3].innerText;

// direct pakken van html zonder extra var.
//lastItemFromListItems = document.getElementById('groceryList').lastChild.innerText;

// complete lijst selecteren en printen
const groceryList = document.getElementById('grocery').innerText;

console.log(groceryList);

// eerste item selecteren en printen
const groceryFirst = document.getElementsByTagName('li')[0];

console.log(groceryFirst.innerText)

// eerste item bold maken met setAttribute
groceryFirst.setAttribute("style", "font-weight: bold;")

// element toevoegen aan de DOM
//1. de DOM ophalen
let ph = document.getElementById('grocery');
//2. creeer het nieuwe element
let newItem = document.createElement('li');
newItem.innerText = 'Krop Sla';
//3. het nieuwe item toevoegen aan de lijst
ph.appendChild(newItem);

console.log(ph);
// maak array met items en prijzen
const newGroceryList = [["appel", 4.3], ["sinaasappel", 5.5], ["manderijn", 7.8]]
// koppel html item met id groceryList aan pd
const pd = document.getElementById('groceryList');
// maak totaallijst
let total = 0
// voeg elk element in de array toe.
newGroceryList.forEach(element => {
    const newItem = document.createElement('li');
    newItem.innerText = `${element[0]} voor ${element[1]} euro`;
    total += element[1]
    pd.appendChild(newItem);
});
// voeg de totaal toe aan de tabel
newItem = document.createElement('li');
newItem.innerText = `totaalprijs: ${total} euro`;
pd.appendChild(newItem);

// verwijder het eerste element van groceryList
ph = document.getElementById('groceryList');
ph.removeChild(ph.firstChild)

document.body.style.background = 'red'; // make the background red

setTimeout(() => document.body.style.background = '', 500); // return back

/**
 * Please note the special characters in text nodes:
 * a newline: ↵ (in JavaScript known as \n)
 * a space: ␣
 */

 /**
  * in een tabel:
  * <table><tr><td>1</td></tr></table>
  * word als de pagina gerenderd word automatisch <tbody> toegevoegd, ook al heb je het zelf niet getyped.
  * <table><tbody><tr><td>1</td></tr></tbody></table>
  */

for (let node of document.body.childNodes) {
    console.log(node);
}

/**
 * select a element by ID
 */

let elem = document.getElementById('elem');

/**
 * select all elements that matches the query ul element, last li element of ul.
 */
let elements = document.querySelectorAll('ul > li:last-child');

/**
 * select elements that matches the description and return true, handy for for statement as in array
 */

for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }

/**
 * searches until it finds the first of the element by type/name
 */

/**
 * <div class="contents">
 *  <ul class="book">
 *    <li class="chapter">Chapter 1</li>
 *    <li class="chapter">Chapter 1</li>
 *  </ul>
 * </div>
 */

//let chapter = document.querySelector('.chapter'); // LI

//element = (chapter.closest('.book')); // UL

/**
 * display how many elements it found
 */

let divs = document.getElementsByTagName('div');
console.log(divs.length); // 1

console.log( document.body.constructor.name ); // HTMLBodyElement

console.log( document.body ); // [object HTMLBodyElement]

/**
 * select also the outer part of the element
 */
// <div id="elem">Hello <b>World</b></div>

console.log(grocery.outerHTML); // <div id="elem">Hello <b>World</b></div>

/**
 * show items in div text only
 * <div id="news">
 *   <h1>Headline!</h1>
 *   <p>Martians attack people!</p>
 * </div>
 * 
 * <script>
 *   // Headline! Martians attack people!
 *   alert(news.textContent);
 * </script>
 * 
 */

/**
 * elem.hidden - hide a element.
 */

/**
 * get element name of selected element
 */

Element.prototype.sayHi = function() {
    console.log(`Hello, I'm ${this.tagname}`)
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY

/**
 * get element attributes example style="" inside a tag
 */

console.log(document.body.id);

/**
 * elem.hasAttribute(name) – checks for existence.
 * elem.getAttribute(name) – gets the value.
 * elem.setAttribute(name, value) – sets the value.
 * elem.removeAttribute(name) – removes the attribute.
 */

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

/**
 * node.append(...nodes or strings) – append nodes or strings at the end of node,
 * node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
 * node.before(...nodes or strings) –- insert nodes or strings before node,
 * node.after(...nodes or strings) –- insert nodes or strings after node,
 * node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
 */

 document.body.append(div);

// paste before and after the div with the html code already attached:
div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
div.insertAdjacentHTML('afterend', '<p>Bye</p>');

/**
 * "beforebegin" – insert html immediately before elem,
 * "afterbegin" – insert html into elem, at the beginning,
 * "beforeend" – insert html into elem, at the end,
 * "afterend" – insert html immediately after elem.
 */

// remove a node (element like div) 
setTimeout(() => {
    let div2 = div.cloneNode(true); // clone the message
    div.remove();
    div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone
    document.body.append(div2)
    //div.after(div2); // show the clone after the existing div
}, 10000);

// switch nodes (elements) places
two.after(one);

//document.body.style.backgroundColor = prompt('background color?', 'green');

/**
 * to get the style after the browser as computed the style and edit like normal:
 */
let computedStyle = getComputedStyle(document.body);
console.log(computedStyle)

//udacity:
//the dom element is what the browser gets when its requested a page to load, and can be referenced in javascript as object to make the page more dynamic.

/**
 * select element by id:
 */
console.log(document.getElementById('test'));
console.log(document.getElementsByClassName('test'));
console.log(document.getElementsByTagName('p'));

//select item by classname
//const sidebarElement = document.getElementById('sidebar');

//select a item within the previouw item
//const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');

/**
 * select query as in CSS
 */
// Element
document.querySelector('head');
// Class
document.querySelector('.test');
// Id
document.querySelector('#test');
// select body element with class test
document.querySelector('body.test')

/**
 * select more items in a nodeList object
 */
console.log(document.querySelectorAll('p'));
// select all p elements inside the class articles
document.querySelectorAll('.articles p');

// loop through all the paragraph elements
const paragraphElements = document.querySelectorAll('p');

for (let i = 0; i < paragraphElements.length; i++) {
    console.log(paragraphElements[i]);
}