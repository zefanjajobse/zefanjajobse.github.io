/**
 * oneven andere achtergrond
 */

// get all items with tag li
table = document.getElementsByTagName("li")
// select only the second item
for (let index = 0; index < table.length; index++) {
    if (index % 2 == 0) {
        // make the background blue
        table[index].style.backgroundColor = "blue";
    }
}

/**
 * function to add images to the current site
 */

// create a function to make a image element
function createImageElement(imagename) {
    let image = document.createElement("img");
    image.setAttribute('src', imagename);
    // add the element to the current body
    document.body.append(image);
}

// run the new function
createImageElement("https://battlefieldtracker.com/Images/bf1/ranks/150.png")