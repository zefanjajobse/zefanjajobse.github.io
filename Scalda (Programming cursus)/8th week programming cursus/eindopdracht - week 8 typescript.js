/**
 * make object smaller every 10 clicks
 */
var clicker = document.querySelector('#button');
clicker.addEventListener('click', clicking);
var isclicked = 0;
function clicking(event) {
    isclicked += 1;
    if (isclicked == 10 || isclicked == 20) {
        var width = clicker.clientWidth;
        var height = clicker.clientHeight;
        clicker.setAttribute('style', "height: " + (height - 10) + "px");
        clicker.setAttribute('style', "width: " + (width - 10) + "px");
    }
}
/**
 * boodschappenlijstje
 */
var button = document.querySelector('#toevoegen');
button.addEventListener('click', toevoeging);
function toevoeging(event) {
    event.preventDefault();
    var productlist = document.querySelector('#producten').querySelector('table');
    var boodschap = document.querySelector('#boodschap').value;
    var prijs = document.querySelector('#prijs').value;
    var newitem = document.createElement('tr');
    var boodschapitem = document.createElement('th');
    boodschapitem.textContent = boodschap;
    var prijsitem = document.createElement('th');
    prijsitem.textContent = prijs;
    var verwijderitem = document.createElement('th');
    verwijderitem.textContent = 'verwijder';
    verwijderitem.addEventListener('click', verwijderen);
    newitem.appendChild(boodschapitem);
    newitem.appendChild(prijsitem);
    newitem.appendChild(verwijderitem);
    productlist.appendChild(newitem);
}
function verwijderen(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}
