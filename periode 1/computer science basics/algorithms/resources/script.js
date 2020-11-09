const array = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function newline(array) {
    array.forEach(element => {
        console.log(element)
    });
}

function uneven(array) {
    array.forEach((element, index) => {
        if (index % 2 == 1) {
            console.log(element)
        }
    });
}

function first(array) {
    array.forEach(element => {
        console.log(element[0])
    });
}

function last(array) {
    array.forEach((element, index) => {
        console.log(element[element.length-1])
    });
}

function reverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        console.log(array[index])
    }
}

function completeReverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        let string = "";
        for (let i = array[index].length - 1; i >= 0; i--) {
            string+=array[index][i]
        }
        console.log(string)
    }
}


// newline(array)
// uneven(array)
// first(array)
// last(array)
// reverse(array)
completeReverse(array)

// javascript
// Typescript (blok 2)
// php, mysql (blok 3)
// java of c# (blok 5-6)
// python (blok 7-8)
// wat je wil (stage, minor)
// golang (blok 13)
// wat je wil (blok 14, afstuderen)