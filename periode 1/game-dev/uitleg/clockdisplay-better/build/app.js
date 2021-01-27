class ClockDisplay {
    constructor(output) {
        this.output = output;
        this.hours = new NumberDisplay(24);
        this.minutes = new NumberDisplay(60);
        this.seconds = new NumberDisplay(60);
        this.updateDisplay();
    }
    timeTick() {
        this.seconds.increment();
        if (this.seconds.getValue() == 0) {
            this.minutes.increment();
            if (this.minutes.getValue() == 0) {
                this.hours.increment();
            }
        }
        this.updateDisplay();
    }
    setTime(hours, minutes, seconds) {
        this.hours.setStringValue(hours);
        this.minutes.setStringValue(minutes);
        if (seconds) {
            this.seconds.setStringValue(seconds);
        }
        this.updateDisplay();
    }
    dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    updateDisplay() {
        const displayString = `${this.dec2bin(this.hours.getValue())}:${this.dec2bin(this.minutes.getValue())}:${this.dec2bin(this.seconds.getValue())}`;
        this.output.innerText = displayString;
    }
}
class NumberDisplay {
    constructor(rollOverLimit) {
        this.limit = rollOverLimit;
        this.value = 0;
    }
    getValue() {
        return this.value;
    }
    setValue(replacementValue) {
        if ((replacementValue >= 0) && (replacementValue < this.limit)) {
            this.value = replacementValue;
        }
    }
    getStringValue() {
        if (this.value < 10) {
            return "0" + this.value;
        }
        else {
            return "" + this.value;
        }
    }
    setStringValue(newValue) {
        this.setValue(Number(newValue));
    }
    increment() {
        this.value = (this.value + 1) % this.limit;
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