/**
 * random getal uit array
 */
var lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
function randomRounds() {
    return lapRounds[Math.floor(Math.random() * (+lapRounds.length - +0)) + +0];
}
console.log(randomRounds());
/**
 * console log de gehele array onder elkaar
 */
var allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];
allMyRecords.forEach(function (element) {
    element.forEach(function (element) {
        console.log(element);
    });
});
/**
 * filter alles kleiner dan 4 in een array met for loop
 */
var filteredLapRoundsWithForLoop = function () {
    var newArray = [];
    for (var i = 0; i < lapRounds.length; i++) {
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
};
console.log(filteredLapRoundsWithForLoop());
/**
 * filter alles kleiner dan 4 in een array met filter
 */
var filteredLapRoundsWithFilter = lapRounds.filter(function (element, index) {
    return element < 4;
});
console.log(filteredLapRoundsWithFilter);
