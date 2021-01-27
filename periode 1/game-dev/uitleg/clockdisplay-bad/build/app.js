class ClockDisplay {
    constructor(output) {
        this.output = output;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.updateDisplay();
    }
    timeTick() {
        this.seconds = (this.seconds + 1) % 60;
        if (this.seconds == 0) {
            this.minutes = (this.minutes + 1) % 60;
            if (this.minutes == 0) {
                this.hours = (this.hours + 1) % 24;
            }
        }
        this.updateDisplay();
    }
    setTime(hours, minutes, seconds) {
        this.hours = Number(hours);
        this.minutes = Number(minutes);
        if (seconds) {
            this.seconds = Number(seconds);
        }
        this.updateDisplay();
    }
    updateDisplay() {
        let displayString = "";
        if (this.hours < 10) {
            displayString += "0";
        }
        displayString += this.hours + ":";
        if (this.minutes < 10) {
            displayString += "0";
        }
        displayString += this.minutes + ":";
        if (this.seconds < 10) {
            displayString += "0";
        }
        displayString += this.seconds + ":";
        this.output.innerText = displayString;
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const clock = new ClockDisplay(document.getElementById('output'));
    document.getElementById('tickerButton').addEventListener("click", () => {
        console.log("User clicked ticker button");
        clock.timeTick();
    });
    document.getElementById('setTime').addEventListener("click", () => {
        console.log("User clicked setTime button");
        const hoursInput = document.getElementById('hoursInput');
        const minutesInput = document.getElementById('minutesInput');
        const secondsInput = document.getElementById('secondsInput');
        clock.setTime(hoursInput.value, minutesInput.value, secondsInput.value);
    });
});
//# sourceMappingURL=app.js.map