class Animator {
    constructor(clock, cat) {
        this.clock = clock;
        this.ticker = new Ticker(this);
        this.cat = cat;
    }
    step() {
        this.clock.timeTick();
        this.cat.timeTick();
    }
    toggleAnimation() {
        this.ticker.toggle();
    }
}
class Cat {
    constructor(output) {
        this.output = output;
        this.mood = 50;
        this.hungry = 50;
        this.energy = 50;
    }
    timeTick() {
        this.mood -= 1;
        this.hungry += 1;
        this.energy -= 1;
        this.updateDom();
    }
    sleep() {
        this.energy += 50;
        this.hungry += 20;
    }
    play() {
        this.mood += 20;
        this.energy -= 20;
        this.meow();
    }
    feed() {
        this.hungry -= 60;
        this.mood += 10;
        this.meow();
    }
    meow() {
        console.log("Meow");
    }
    updateDom() {
        this.output.textContent = `Mood:${this.mood} Hungry:${this.hungry} Energy:${this.energy}`;
    }
}
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
    updateDisplay() {
        const displayString = `${this.hours.getStringValue()}:${this.minutes.getStringValue()}:${this.seconds.getStringValue()}`;
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
class Ticker {
    constructor(animator, interval = 1000) {
        this.animator = animator;
        this.interval = interval;
    }
    isRunning() {
        return this.timerId != null;
    }
    toggle() {
        if (this.isRunning()) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        else {
            this.timerId = setInterval(() => {
                if (this.animator) {
                    this.animator.step();
                }
            }, this.interval);
        }
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const clock = new ClockDisplay(document.getElementById('output'));
    const cat = new Cat(document.querySelector("#status"));
    const animator = new Animator(clock, cat);
    document.getElementById('tickerButton').addEventListener("click", () => {
        console.log("User clicked ticker button");
        animator.toggleAnimation();
    });
    document.getElementById('setTime').addEventListener("click", () => {
        console.log("User clicked setTime button");
        const hoursInput = document.getElementById('hoursInput');
        const minutesInput = document.getElementById('minutesInput');
        const secondsInput = document.getElementById('secondsInput');
        clock.setTime(hoursInput.value, minutesInput.value, secondsInput.value);
    });
    document.querySelector("#sleepButton").addEventListener("click", () => {
        cat.sleep();
    });
    document.querySelector("#playButton").addEventListener("click", () => {
        cat.play();
    });
    document.querySelector("#feedButton").addEventListener("click", () => {
        cat.feed();
    });
});
//# sourceMappingURL=app.js.map