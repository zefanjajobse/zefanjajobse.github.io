window.addEventListener("load", init);
//global variables
var carCategories = [
    {
        category: "A",
        minHeight: 0,
        maxHeight: 1.8,
        price: 2.56
    },
    {
        category: "B",
        minHeight: 1.9,
        maxHeight: 3,
        price: 3.05
    },
    {
        category: "C",
        minHeight: 3.1,
        maxHeight: 5,
        price: 5.67
    },
    {
        category: "D",
        minHeight: 5.1,
        maxHeight: 8,
        price: 2.45
    }
];
/**
 * Function to initialize the application
 * @param {*} event
 */
function init(event) {
    // select the formitems
    var form = document.querySelector("form");
    var button = form.querySelector("#sbmButton");
    var vehicleHeight = form.querySelector("#inputHeight");
    // select the category items
    var carCategory = document.querySelector("#car-category");
    var label = carCategory.querySelector("#category-label");
    var price = carCategory.querySelector("#category-price");
    // create a error item and hide it
    var newElement = document.createElement("p");
    newElement.textContent = "Your vehicle is to heigh for our roads.";
    newElement.classList.add("error");
    newElement.style.display = "none";
    carCategory.append(newElement);
    // add selector for elemennt
    var errorElement = document.querySelector(".error");
    /**
     * react on click, if element found in category show category. else show error
     * @param {*} event // event used (default prevented)
     */
    button.addEventListener("click", function (event) {
        event.preventDefault();
        var vehicleHeightValue = parseFloat(vehicleHeight.value);
        var found = false;
        carCategories.forEach(function (element) {
            // vehicle == type if between min and max height
            if (vehicleHeightValue >= element.minHeight && vehicleHeightValue <= element.maxHeight) {
                found = true;
                label.textContent = element.category;
                price.textContent = element.price + " \u20AC";
            }
        });
        // show based of whats found
        if (found === false) {
            label.style.display = "none";
            price.style.display = "none";
            errorElement.style.display = "block";
        }
        else {
            label.style.display = "block";
            price.style.display = "block";
            errorElement.style.display = "none";
        }
    });
}
