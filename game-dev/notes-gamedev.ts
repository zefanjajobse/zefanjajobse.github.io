class Car {
    // classname - always start with hoofdletter
    private brand: string; // private - only available within the class
    private model: string;
    private fuel: string;
    private speed: number;
    private milage: number;
    private started: boolean = false;

    constructor(
        brand: string,
        model: string,
        fuel: string,
        speed: number,
        milage: number,
    ) {
        // stuff you need to declare the class
        this.brand = brand; // save the variable to the running class
        this.model = model;
        this.fuel = fuel;
        this.speed = speed;
        this.milage = milage;
    }
    public info() {
        return `This ${this.brand} ${this.model}
        drives on ${this.fuel},
        can drive ${this.speed}km/h
        and has driven ${this.milage}`;
    }
    public start() {
        this.started = true;
        console.log(
            `This ${this.brand} ${this.model} has started his engine`,
        );
    }
    public drive(distance: number) {
        // public - available thoughout the code - function within the car
        if (this.started) {
            console.log(
                `This ${this.brand} ${this.model} is driving ${distance} kilometers`,
            );
            this.milage += distance; // add distance to the total milage
        } else {
            console.log(
                `This ${this.brand} ${this.model} cant drive because the motor isnt started`,
            );
        }
    }
    public brake() {
        this.started = false;
        console.log(
            `This ${this.brand} ${this.model} has stopped his engine`,
        );
    }
}

// making the class
const mecedes = new Car("mecedes", "t10", "diesel", 50, 60);

mecedes.start();
mecedes.drive(50);

// running the function within the class
console.log(mecedes.info());
