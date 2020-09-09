/**
 * make object smaller every 10 clicks
 */

let clicker = document.querySelector('#button');
clicker.addEventListener('click', clicking);
let isclicked = 0

function clicking(event) {
    isclicked += 1
    if (isclicked == 10 || isclicked == 20) {
        let width = clicker.clientWidth;
        let height = clicker.clientHeight;
        clicker.setAttribute('style', `height: ${height - 10}px` );
        clicker.setAttribute('style', `width: ${width - 10}px` );
    }
}

/**
 * boodschappenlijstje
 */

let button = document.querySelector('#toevoegen')
button.addEventListener('click', toevoeging)
// voeg een element toe met de gegevens van het input veld
function toevoeging(event) {
    event.preventDefault()
    let productlist = document.querySelector('#producten').querySelector('table')
    let boodschap = (<HTMLInputElement>document.querySelector('#boodschap')).value
    let prijs = (<HTMLInputElement>document.querySelector('#prijs')).value
    let newitem = document.createElement('tr')
    let boodschapitem = document.createElement('th')
    boodschapitem.textContent = boodschap
    let prijsitem = document.createElement('th')
    prijsitem.textContent = prijs
    let verwijderitem = document.createElement('th')
    verwijderitem.textContent = 'verwijder'
    verwijderitem.addEventListener('click', verwijderen)
    newitem.appendChild(boodschapitem)
    newitem.appendChild(prijsitem)
    newitem.appendChild(verwijderitem)
    productlist.appendChild(newitem)
}
// verwijder geklikte element
function verwijderen(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}