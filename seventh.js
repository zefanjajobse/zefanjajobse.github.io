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

/**
 * .innerHTML - select the html inside of the element in a string
 * and display added html as hmtl
 */
/**
 * .outerhtml - select itself and inside of the element in a string
 */
/**
 * .textContent - select only the text inside the element in a string
 * it will display the html you added to text content as text
 */
/**
 * replace the text of a element - card.textContent = "newtext";
 */

 /**
  * .innerText - will return the text as seen in visual website, when its made all caps in css.
  * it will be all caps there.
  */

// create a paragraph element <p>
const conainer = document.createElement('span');
// add text to the element
conainer.textContent = ', right now!';
// add the text to the end
const mainHeading = document.querySelector('p');

mainHeading.appendChild(conainer);
// with appendChild you can only add it once or it will be moved to the new location.

/**
 * document.createTextNode(''); - create a new text node to a to a paragraph
 */
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the text node'); //create text node to later add to paragraph
myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

/**
 * for textContent, same result:
 * 
 * const myPara = document.createElement('p');
 * myPara.textContent = 'I am the text for the paragraph!';
 * document.body.appendChild(myPara);
 */

 /**
  * .insertAdjecentHTML - insert on a specified location
  * .insertAdjecentHTML('afterend', 'text to add'); - only text dont use html tags
  * beforebegin - add above the element
  * afterbegin - add above inside the element
  * beforend - add at bottom inside the element
  * afterend - add at below the element 
  */

/**
 * <!-- beforebegin -->
 * <p>
 *   <!-- afterbegin -->
 *   foo
 *   <!-- beforeend -->
 * </p>
 * <!-- afterend -->
 */

 const testie = mainHeading.firstElementChild // select the first child of main heading

 mainHeading.removeChild(testie); // remove the selected first child from the main heading element.
 
/**
 * remove h1 by selecting h1's parent element and then removing the child (the element itself)
 */

const meanheading = document.querySelector('h1');

meanheading.parentElement.removeChild(mainHeading);

/**
 * remove h1 by selecting h1 itself
 */

const meanheader = document.querySelector('h1');

//meanheader.remove();

/**
 * change the style of a element
 */

const messd = document.querySelector('h1');

messd.style.color = 'red';
messd.style.backgroundColor = 'orange';
messd.style.fontSize = '3.5em';

/**
 * do all those style changes as one command
 */

messd.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

/**
 * with cssText you need to spell it with a line example:
 * background-color.
 * and for style:
 * backgroundColor.
 */

/**
 * or use setattribute, to do styles or other attributes of h1
 */

messd.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em');

const mend = document.querySelector('#one');
const listOfClasses = mend.className;
console.log(listOfClasses)

/**
 * The .classList property has a number of properties of its own. Some of the most popularly used ones are:
 *
 * .add() - to add a class to the list
 * .remove() - to remove a class from the list
 * .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
 * .contains() - returns returns a boolean based on if the class exists in the list or not
 * Let's take a look!
 */

 /**
  * monitor events via chrome
  */

//monitorEvents(document);
//unmonitorEvents(document);

/**
 * do something with the event
 */

// diffent types of events to listen for:
// click
// dblclick
// scroll
// resize

// https://developer.mozilla.org/en-US/docs/Web/Events

const headding = document.querySelector('h1');

headding.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

console.log({ name: 'Richard' } === { name: 'Richard' })

// ex 2

function myEventListeningFunction() {
  console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);


// will run during the bubbeling fase bottom to top in element view 
/** the default for the third element is false, bubbeling phase */
document.addEventListener('click', function () {
  console.log('The document was clicked');
});

// will run earlier during the capturing phase top to bottom in element view
/**
* the true at the end makes the difference
*/
document.addEventListener('click', function () {
  console.log('The document was clicked');
}, true);

// it will also run body first instead of whole document in false because in bubbleing it will run from bottom to top

// if you put something in the function("tag") it can be used somewhere else in the function example:
document.addEventListener('click', function (event) {
  console.log(event);
});

/**
 * prevent the default action (in this example clicking the link)
 */

//select all link elements (a)
const links = document.querySelectorAll('a');
//select the third of all links
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
  //prevent the default action
    event.preventDefault();
    //and do this instead.
    console.log("Look, ma! We didn't navigate to a new page!");
});

/**
 * load right after the whole dom is loaded without it running other code first
 * <script>
 *     document.addEventListener('DOMContentLoaded', function () {
 *         document.querySelector('footer').style.backgroundColor = 'purple';
 *     });
 *   </script>
 */

 /**
  * run the same code but only add it after the loop is done saving time by not having to rerender part of the page
  * const framgment = document.createDocumentFragment(); // create a document fragment to temporary save the output of the loop
  * 
  * for (let i = 0; i < 200; i++) { //create a loop
  * const newElement = document.createElement('p') // create the p element 200 times
  * newElement.innerText = 'This is paragraph number ' + i; // write something in the p element
  * 
  * fragment.appendChild(newElement) // add the new element as child to the temporary fragment
  * }
  * 
  * document.body.appendChild(fragment); // append the made fragment to the end of the body element.
  */

// create a temporary space to do the for loop or whatever before adding it to the main element
const fragment = document.createDocumentFragment();

// add something to that fragment
//fragment.appendChild(newelement)

//add the fragment to the main dom (body)
document.body.appendChild(fragment);

// if you hide the element instead of removing it completely it takes less compute power and less time to do the task

// check if a function has run for 2000 times and stop
/**function generateParagraphs() {
 * for (let i = 1; i <= 500; i++) {
 *   // code
 * }
 * if (count < 2000)
 * {
 *   setTimeout(generateParagraphs, 0);
 * }
 }
 */
