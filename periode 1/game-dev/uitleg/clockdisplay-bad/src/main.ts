console.log("Javascript is working!");

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    
    const clock = new ClockDisplay(document.getElementById('output'));

    document.getElementById('tickerButton').addEventListener("click", () => {
        console.log("User clicked ticker button");
        clock.timeTick();
    });
    
    document.getElementById('setTime').addEventListener("click", () => {
        console.log("User clicked setTime button");
        const hoursInput = document.getElementById('hoursInput') as HTMLInputElement;
        const minutesInput = document.getElementById('minutesInput') as HTMLInputElement;
        const secondsInput = document.getElementById('secondsInput') as HTMLInputElement;
        clock.setTime(hoursInput.value, minutesInput.value, secondsInput.value);
    });

});