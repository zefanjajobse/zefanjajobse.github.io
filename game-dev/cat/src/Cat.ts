/**
 * 
 */
class Cat {
    private output: HTMLElement
    private mood: number;
    private hungry: number;
    private energy: number;

    constructor(output: HTMLElement) {
        this.output = output
        this.mood = 50;
        this.hungry = 50;
        this.energy = 50;
    }

    public timeTick() {
        this.mood -= 1;
        this.hungry += 1;
        this.energy -= 1;
        this.updateDom()
    }

    public sleep() {
        this.energy += 50;
        this.hungry += 20;
    }
    public play() {
        this.mood += 20;
        this.energy -= 20;
        this.meow();
    }
    public feed() {
        this.hungry -= 60;
        this.mood += 10;
        this.meow();
    }

    private meow() {
        console.log("Meow")
    }

    private updateDom() {
        this.output.textContent = `Mood: ${this.mood} Hungry: ${this.hungry} Energy: ${this.energy}`
    }
}