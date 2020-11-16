/**
 * The Cat class implements a virtual pet, that you have to feed/play with otherwise it will die..
 */
class Cat {
    // declare the items for the cat
    private output: HTMLElement
    private mood: number;
    private hungry: number;
    private energy: number;

    /**
     * 
     * @param output 
     */
    constructor(output: HTMLElement) {
        this.output = output
        this.mood = 50;
        this.hungry = 50;
        this.energy = 50;
    }

    /**
     * update the cats state every time (timout declared in ticker).
     */
    public timeTick() {
        this.mood -= 1;
        this.hungry += 1;
        this.energy -= 1;
        this.updateDom()
    }

    /**
     * lets the cat sleep to gain more energy. (cat will get more hungry that way)
     */
    public sleep() {
        this.energy += 50;
        this.hungry += 20;
    }
    
    /**
     * play with the cat so his mood stays good. (cat will have even less energy lest)
     */
    public play() {
        this.mood += 20;
        this.energy -= 20;
        this.meow();
    }

    /**
     * feeds the cat so it doesnt go hungry. (with small mood improvement because you did something with him)
     */
    public feed() {
        this.hungry -= 60;
        this.mood += 10;
        this.meow();
    }

    /**
     * returns meow to the console, can only be called by other methods in the list
     */
    private meow() {
        console.log("Meow!")
    }

    /**
     * updates the DOM every timetick
     * (there is no point in doing it every time you click play/sleep for example, because it updates on the next second because of timeTick())
     */
    private updateDom() {
        this.output.textContent = `Mood: ${this.mood} Hungry: ${this.hungry} Energy: ${this.energy}`
    }
}