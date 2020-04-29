const img1 = document.getElementById('0');
img1.addEventListener('click', clickEventHandler)
const img2 = document.getElementById('1');
img2.addEventListener('click', clickEventHandler)
const img3 = document.getElementById('2');
img3.addEventListener('click', clickEventHandler)
const img4 = document.getElementById('3');
img4.addEventListener('click', clickEventHandler)

function clickEventHandler(event) {
    console.log(event.target.id)
}

//get value from input field
const submit = document.getElementById('submit')
submit.addEventListener('click', clickFormHandler)

function clickFormHandler(event) {
    event.preventDefault()
    let shoppingInput = document.getElementById('text').value;
    console.log(shoppingInput);
    let firstElement = document.createElement('p');
    firstElement.textContent = shoppingInput
    document.body.appendChild(firstElement)
}