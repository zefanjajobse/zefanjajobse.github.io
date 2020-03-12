let productList = ["Tandenborstel", "Deodorant", "Bakmeel", "Wortels", "Tandpasta", "Krop Sla", "Maggi", "Croky Chips", "WC papier", "Shampoo"];
productList.push("soep");
productList[11] = "tomaat";
newTest = productList.pop();
console.table(productList); // log array in table
console.log(newTest);
let test = [];

const empty = 0;

productList.forEach(element => {
    console.log(element);
});

productList.forEach(function (val, index, arr) { // "do a action with a array item, instead of a for loop"
    console.log(`${val} ${index}`);
})

const newProductsArray = productList.map(function (element) { // ".map" make a new array from the items of the old array
    return element.toUpperCase();
})

console.log(newProductsArray);
/**
 * array.filter
 * array.reduce
 */

let newProductList = productList.map(function (element, index) {
    return "Product " + (index + 1) + ": " + element
})
console.table(newProductList)

let newerProductList = newProductList.filter(function(element, index) {
    return index > 5;
});
console.log(newerProductList);

let newestProductList = productList.reduce(function(total, currentValue, currentIndex, arr){

})

const productPrices = [2.10, 4.99, 5.6, 0.4, 5.44, 7.33, 2.33];

let sumProductPrices = 0;
// sum prices
productPrices.forEach(element => {
    sumProductPrices = sumProductPrices + element;
});

console.log(sumProductPrices)
// gemiddelde
console.log(sumProductPrices / productPrices.length);
//grootste
let biggest = 0;

productPrices.forEach(element => {
    if (element > biggest) {
        biggest = element;
    }
});

console.log(biggest);
// sum with .reduce
const reducer = (accumulator, item) => {
    return accumulator + item;
};

const total = productPrices.reduce(reducer, empty);

console.log(total);

// filter alles kleiner dan 2.10
const newproductprices = productPrices.filter(function(val, index){
    return val > 2.10
})

console.log(newproductprices)

/**
 * var myRand = Math.floor(Math.random () * (max - min + 1) + min);
 * eerst doet hij het minimale eraf halen met +1 om bijv de 10 te halen bij max 10 en dan * math.random, math.random word nooit meer dan 1 dus ook nooit meer dan 10, dan doe je het minimale er weer bij zodat het altijd hoger is dan min.
 */

/**
 * alles samenvoegen met *
 */
function multiplyAll(arr) {
  var product = 1;
  // open eerste array
  for (var i=0; i < arr.length; i++) {
      // open de tweede array in de eerste array
    for (var j=0; j < arr[i].length; j++) {
        // spreek elk item aan in de 2e arrays
      product = product * arr[i][j]
    }
  }
  return product;
}

console.log(multiplyAll([[1,2],[3,4],[5,6,7]]))

// findAverage("parameter", y) {"function body" "in scope of function"}
// "out of scope of function"
// var avg = findAverage(argument, 9);
// if a variable is declared in a function, its only visable inside the function, otherwise its global
// if you change a variable inside a function for a global variable, it will remain changed.
// code hoisting, https://classroom.udacity.com/courses/ud803/lessons/a7c5b540-51a6-44dc-b2f2-515c9dd6ca4f/concepts/86acf25e-7511-4f3a-927e-050899ec87da

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle (num) {
    var complete = "";
    for (var i=1; i <= num; i++) {
        complete += makeLine(i);
    }
    return complete
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

/**
 * call a function with a function
 */
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
  }
  
  // Call the movies function, pass in the function and name of movie
  movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  }, "Finding Nemo");