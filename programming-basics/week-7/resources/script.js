let myCar = {
    key: 'value',
    color: 'red',
    engine: 2.0,
    wheels: 4,
    honk: function () {
        console.log('Honk, Honk', this.color)
        //in javascript you use "this" to request a object inside a object
    },
    "a bigger object": "oof", // is also valid, but can only be accessed via brackets
}

// even without the '', keys are strings in a object

myCar.height = 1.3;
// object .name adds a object to the object

console.log(myCar)

myCar.drive = function(){console.log('driving my car');}

// you can request a method inside of a object:
myCar.drive()

myCar.honk()

// deletes HONK byebye
delete myCar.honk

// or request it the same as a array/python
//myCar["honk"]()

//javascript wont error and just returns undefined except if its a function because it cant run undefined.

let user = {
    name: "John",
    surname: "Smith",
}

user.name = "John";
delete user.name;

// function isEmpty(object) {

// }

// let schedule = {};

// console.log(isEmpty(schedule))

// schedule["8:30"] = "get up"

// console.log(isEmpty(schedule))

// map filter reduce foreach
// map is a callback function(element, index, array) {}
// filter makes the array smaller
// reduce returns 1 element 

const productPrices = [2.1, 4.99, 5.6, 0.4, 5.44, 7.33, 2.33, 2.49, 2.1];

function discount(array, discount) {
    return array.map(element => {
        return ("€" +(element - (element * discount)).toFixed(2).replace(".",","))
    })  
}

console.log(discount(productPrices, 0.10))

// append == push

const soccer = {
    firstName: "",
    lastName: "",
    nickName: "",
    yearOfBirth: "",
    currentClub: "",
    clubs: ["test"],
    redCards: 0,
    yellowCards: 0,
    appearances: [],
    loop: function () {
        this.clubs.forEach((element, index) => {
            console.log(element, index)
        });
    }
}

// soccer.loop()

const me = {
    car: [false, "oof"],
    familyFriends: ["Sandra", "Wim"],
    printFriendNames: function () {
        this.familyFriends.forEach(element => {
            console.log(element);
        });
    },
    printTransportation: function () {
        this.car.forEach(element => {
            console.log(element);
        });
    },
};
