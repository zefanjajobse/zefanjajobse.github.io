/**
 * make object smaller every 10 clicks
 */

let clicker = document.querySelector('#button');
clicker.addEventListener('click', clicking);
isclicked = 0

function clicking(event) {
    isclicked += 1
    if (isclicked == 10 || isclicked == 20) {
        width = clicker.clientWidth;
        height = clicker.clientHeight;
        clicker.setAttribute('style', `height: ${height - 10}px` );
        clicker.setAttribute('style', `width: ${width - 10}px` );
    }
}

/**
 * boodschappenlijstje
 */

let button = document.querySelector('#toevoegen')
button.addEventListener('click', toevoeging)

function toevoeging(event) {
    event.preventDefault()
    let productlist = document.querySelector('#producten').querySelector('table')
    let boodschap = document.querySelector('#boodschap').value
    let prijs = document.querySelector('#prijs').value
    newitem = document.createElement('tr')
    boodschapitem = document.createElement('th')
    boodschapitem.textContent = boodschap
    prijsitem = document.createElement('th')
    prijsitem.textContent = prijs
    verwijderitem = document.createElement('th')
    verwijderitem.textContent = 'verwijder'
    verwijderitem.addEventListener('click', verwijderen)
    newitem.appendChild(boodschapitem)
    newitem.appendChild(prijsitem)
    newitem.appendChild(verwijderitem)
    productlist.appendChild(newitem)
}

function verwijderen(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}