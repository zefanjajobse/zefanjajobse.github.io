// loads when the page loads
window.addEventListener("load", init);

//global variables
const allGroceryProducts = {
    name: "Grocery inventory list",
    products: [
        {
            product: "Milk",
            image: "milk.png",
            price: 1.89,
        },
        {
            product: "Cheese",
            image: "cheese.png",
            price: 3.49,
        },
        {
            product: "Coca cola",
            image: "coca-cola.png",
            price: 0.89,
        },
        {
            product: "Tooth brush",
            image: "toothe-brush.png",
            price: 8.99,
        },
    ],
};

const baseUrl : string = "./assets/images/";

/**
 * Function to initialize the application
 * @param {*} event
 */
function init() {
    // select used DOM elements
    const groceryList = document.querySelector("#groceryList") as HTMLDivElement;
    const button = document.querySelector("#buy") as HTMLButtonElement;

    // add images on load
    addImages(allGroceryProducts.products, groceryList);
    // when image is clicked
    groceryList.addEventListener("click", addToGroceryDetails);

    // when total is clicked
    button.addEventListener("click", addToTotal);
}

/**
 * adds all the images from the specified array to the DOM
 * @param {array} array array to get prices from
 * @param {DOM element} domElement DOM element to add the items to
 */
function addImages(array: any, domElement: HTMLElement) {
    array.forEach(element => {
        const newImage = document.createElement("img");
        // adds the imagelocation to the DOM with name in alt, with class groceryImage for a beautiful border
        newImage.src = baseUrl + element.image;
        newImage.alt = element.product;
        newImage.classList.add("groceryImage");
        domElement.append(newImage);
    });  
}

/**
 * shows the item in groceryDetails when the image is clicked
 * @param {DOM event handler} event onclick event when item is clicked
 */
function addToGroceryDetails(event: any) {
    if (event.target.className === "groceryImage") {
        // shows the clicked item name in console
        console.log(event.target.alt);
        // finds item in array and adds it to string
        const foundItem = allGroceryProducts.products.find((item) => {
            return item.product === event.target.alt;
        });
        // add the found items to the DOM
        const groveryName = document.querySelector("#groceryName") as HTMLElement;
        const groceryPrice = document.querySelector("#groceryPrice") as HTMLParagraphElement;
        groveryName.textContent = foundItem.product;
        groceryPrice.textContent = `€ ${foundItem.price}`;
    }
}

/**
 * when the "add" button is clicked, add the item to the total price
 */
function addToTotal() {
    const totalPrice = document.querySelector("#totalPrice") as HTMLSpanElement;
    const groceryPrice = document.querySelector("#groceryPrice") as HTMLParagraphElement;
    // add total and groceryPrice together
    const total = parseFloat(totalPrice.textContent) + parseFloat(groceryPrice.textContent.substr(2));
    // do nothing is the number is NaN
    if (!isNaN(total)) {
        // add price to total
        totalPrice.textContent = total.toFixed(2)
    }
}