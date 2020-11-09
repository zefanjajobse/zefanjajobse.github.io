window.addEventListener('load', init);

//global variables
const myPlayList = {
    name: 'My Favourite 80s tracks',
    numbers: [
        {
            name: 'Wake me up be for you Go-Go',
            duration: 3.43,
            artist: 'Wham'
        },
        {
            name: 'Never gonna give you up',
            duration: 3.30,
            artist: 'Rick Astley'
        },
        {
            name: 'The final countdown',
            duration: 3.57,
            artist: 'Europe'
        }
    ]
}

/**
 * this runs on script load, calculates the total duration of the playlist and add it to the DOM
 * @param {*} event 
 */
function init(event) {
    const airtime = document.querySelector('#total-airtime');
    let totalAirtime = 0;
    myPlayList.numbers.map(element => {
        totalAirtime += element.duration;
    })
    // uses toFixed(2) to always show 2 numbers
    airtime.textContent = `${totalAirtime.toFixed(2)} minutes`;
};

// create constants for the search function
const button = document.querySelector('#sbmButton');
const input = document.querySelector("#inputNumber");
const artist = document.querySelector("#artist");
const name = document.querySelector("#number");
const duration = document.querySelector("#duration");


button.addEventListener('click', function (event) {
    // prevent the default so the page doesnt reload
    event.preventDefault();
    // get the current input in dropdown menu
    let result = input.options[input.selectedIndex].value;
    // iterate through playlist and add to DOM based on name
    myPlayList.numbers.map(element => {
        if (element.name == result) {
            artist.textContent = element.artist
            name.textContent = element.name
            duration.textContent = `Duration: ${element.duration.toFixed(2)} minutes`
        }
    });
});
