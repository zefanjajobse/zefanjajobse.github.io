// let productList = [];

// productList[0] = "toothbrush";
// productList[1] = "Crisps";
// productList[2] = "Deodorant";
// productList[3] = "Tomato"; 
// productList[4] = "apples";

// console.log(productList);

// //removes the last element from the array
// let lastElement = productList.pop();
// console.log(productList);

// //adds a new element to the array
// productList.push('banana');

// //removes/replaces elements of the array
// productList.splice(2, 2, "Pears", "Rice");

// console.log(lastElement);
// console.log(productList);

// /**
//  * push pop = adds to the beginning of the array - splice //dont use delete, it removes the element but it leaves a hole in the array
//  * the most important functions for a arary ^^
//  * unshift/shift: adds/removes the first element from the array
//  */

// for (let i = 0; i < productList.length; i++) {
//     const element = productList[i];
//     console.log(element);
// }

// productList.forEach(element => {
//     console.log(element)
// });
// //or
// productList.forEach(function(value, index, array){
//     console.log(`using a foreach loop ${index}`, value);
// });

// //map,      filter and      reduce
// //map: basically a foreach loop, will return a new array and you can add content to each element in the array
// //filter: new array, will be smaller, will filter element out of the current array.
// //reduce: will only return one value.

// let newProductList = productList.map(function(value, index, arr) {
//     return `Product ${index}: ${value}`
// });

// newProductList.push(function() { console.log('hello'); });

// console.log(newProductList);


// let specialProductList = ["test", true, function() { console.log('hello'); }];

// specialProductList[2]();
// //PYTHON
// let fruits = ["Apples", "Oranges", "Plum"];

// // iterates over array elements
// for (let fruit of fruits) {
//     console.log(fruit);
// };

// // iterate as if its an object
// for (let key in fruits) {
//     console.log(key, fruits[key]);
// };

// console.log(String(fruits)) // returns the array as string

// fruits.length = 0; //empty the current array

// console.log(fruits); //should be empty

// // makes a new array and maps the lengths of the items in the array to the new arra
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths);

// // if bigger return 1 if smaller return -1
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1,2,15];

// // use the new function in a sort
// arr.sort(compareNumeric);

// console.log(arr);

// let string = "Mfya rpqrhongrrcapmamdixnzg, #i1se tgwebtdt;iunpgb rbwejtktserrm lbzy6 ftmhles edtaiyo!";
// let result = "";
// for (let i = 0; i < string.length; i+=2) {
//     result+=string.charAt(i); 
// }
// console.log(result)

// // console.log pakt de meest recente waarde ook al staat het eerder bij codesandbox

// const studentNames = ["Naam1", "Naam2", "Naam3", "Naam4"];
// console.log(studentNames);
// studentNames[5] = "Naam6";
// console.log(studentNames);

// // higher order functions: .map .filter .reduce

// const numbers = [0, 10, 1, 5, 2, 1, 3, 12, 4, 15, 2];
// const filteredNumbers = numbers.filter(
//     function (value) {
//         return value <= 10;
//     }
// );
// console.log(filteredNumbers)

// // accumulator == totaal opgebouwd bij elkaar / het antwoord van je vorige return statement in de function (hieronder)
// // currentValue == huidige array item inhoud
// // currentIndex == locatie in de array
// // array == de gehele array

// const number = [0, 1, 2, 3, 4];
// const result = number.reduce(
//     function (accumulator,  currentValue, currentIndex, array) {
//         return accumulator + currentValue;   
//     }
// )
// console.log(result)

// styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// if (styles.length % 3 === 0) {
//     styles.splice(styles.length/2, 1, "Classics")
// }
// firstElement = styles.shift()
// console.log(firstElement)
// styles.unshift("Rap","Raggae")
// console.log(styles)

// // calculate sum of prices
// const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

// function sumOfPrices(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum+=element;
//     });
//     return sum
// }

// console.log(sumOfPrices(productPrices))

// function averagePrice(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum+=element;
//     });
//     return ( sum / array.length).toFixed(2)
// }

// console.log(averagePrice(productPrices))

// function maxPrice(array) {
//     let max = 0;
//     array.forEach(element => {
//         if (element > max) {
//             max = element
//         }
//     });
//     return max;
// }

// console.log(maxPrice(productPrices))

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

const filteredLapRoundsWithForLoop = function()
{
	let newArray = [];
	for(let i = 0; i < lapRounds.length; i++) 
	{
		if (lapRounds[i] < 4) 
		{
			newArray.push(lapRounds[i]);
		}
	}
	return newArray;
}

console.log(filteredLapRoundsWithForLoop())