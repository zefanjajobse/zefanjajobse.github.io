tableOne = document.querySelector("table");
sum = 0;
sumArr = [];
for (var i = 0, row; row = tableOne.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
        tableTwo = col.textContent
        if (isNaN(tableTwo)) {
            
        }
        else {
            sumArr.push(Number(tableTwo))
        }

    }
}
for (let index = 0; index < sumArr.length; index++) {
    sum += sumArr[index];
}
sum = sum / sumArr.length;
let total = document.createElement("td");
total.textContent = sum;
tableOne.append(total);

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