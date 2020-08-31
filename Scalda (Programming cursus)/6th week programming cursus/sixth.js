// Object declaration
let object = {};

/** {} == Accolades */
// object initialization
let car = {
//==key: "Value",
// keys zijn altijd strings, de key hoeft niet met aanhalingstekens
    brand: "Ford",
    model: "Mustang"
// Values zijn primitieve datatypes, objecten of functies
}

/**
 * een functie in een object noemen we een method
 */

console.log(car)

let array = ["Ford", "Mustang"];
// object kan gezien worden als gelabelde array
console.log(array)

let me = {
    name: "Zefanja",
    age: 22,
    previousDiploma: "MBO 3 ICT Medewerker Beheer",
    currentStudy: "MBO 4 ICT Beheer",
    studyInIt: true,
    favorieteVervoersmiddel: "fiets",
    lijst: ["Happy", "Ruben", "Wim", "Parkiet", "Danny"],
    getal: 2,
    zin: function() {
        return `Mijn favoriete vervoersmiddel is de ${me.favorieteVervoersmiddel} en die heeft ${me.getal} wielen.`;
    },
    namen: function() {
        me.lijst.forEach(element => {
            console.log(element)
        });
    }
};

console.log(me);

console.log(`Mijn favoriete vervoersmiddel is de ${me.favorieteVervoersmiddel} en die heeft ${me.getal} wielen.`);

console.log(me.lijst[0]);
console.log(me.lijst[1]);
console.log(me.lijst[2]);
console.log(me.lijst[3]);
console.log(me.lijst[4]);

console.log(me.zin());

me.namen();

//see the type of data its storing
console.log(typeof me.getal);

//2 manieren om aan te spreken van een object
// geen nummers gebruiken in objectnaam, het kan wel met brackets "" maar moet het ook aangesproken worden met ""

console.log(me["getal"]);
console.log(me.getal);

//add or modify item in list
me.getal = 20;
//remove item from List
delete me.getal;