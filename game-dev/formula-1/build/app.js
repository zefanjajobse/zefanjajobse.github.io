class Car {
    constructor(name, xPosition, yPosition, color) {
        this.image = this.loadNewImage(`./assets/img/${color}-racing-car.png`);
        this._name = name;
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._distance = 0;
        this.color = color;
    }
    set distance(dist) {
        this._distance = dist;
    }
    get distance() {
        return this._distance;
    }
    get xPosition() {
        return this._xPosition;
    }
    get yPosition() {
        return this._yPosition;
    }
    get name() {
        return this._name;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this._xPosition, this._yPosition);
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class KeyboardListener {
    constructor() {
        this.keyDown = (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        };
        this.keyUp = (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        };
        this.keyCodeStates = new Array();
        window.addEventListener("keydown", this.keyDown);
        window.addEventListener("keyup", this.keyUp);
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] === true;
    }
}
KeyboardListener.KEY_SPACE = 32;
KeyboardListener.KEY_LEFT = 37;
KeyboardListener.KEY_UP = 38;
KeyboardListener.KEY_RIGHT = 39;
KeyboardListener.KEY_DOWN = 40;
KeyboardListener.KEY_R = 82;
class Game {
    constructor(canvas) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyboardListener = new KeyboardListener();
        this.gameState = "begin";
        this.redCar = new Car("The Red Barron", window.innerWidth / 9, window.innerHeight / 9, "red");
        this.greenCar = new Car("The green guy", window.innerWidth / 9, window.innerHeight / 1.5, "green");
        this.loop();
    }
    rollDice() {
        return this.randomNumber(1, 6);
    }
    draw() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.writeTextToCanvas("Formula 1", 50, window.innerWidth / 2, 50);
        this.redCar.draw(this.ctx);
        this.greenCar.draw(this.ctx);
        if (this.gameState == "begin") {
            this.writeTextToCanvas("Press 'R' to roll the dice", 50, window.innerWidth / 2, window.innerHeight - 20);
            if (this.keyboardListener.isKeyDown(82)) {
                this.gameState = "dice";
            }
        }
        else if (this.gameState === "dice") {
            this.redCar.distance = this.rollDice();
            this.greenCar.distance = this.rollDice();
            this.gameState = "end";
            if (this.redCar.distance === this.greenCar.distance) {
                this.winner = "Its a tie, noone ";
            }
            else if (this.redCar.distance > this.greenCar.distance) {
                this.winner = this.redCar.name;
            }
            else {
                this.winner = this.greenCar.name;
            }
        }
        else if (this.gameState === "end") {
            this.writeTextToCanvas(`${this.winner} won`, 50, window.innerWidth / 2, window.innerHeight - 20);
            if (this.keyboardListener.isKeyDown(32)) {
                this.gameState = "begin";
            }
        }
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
        this.ctx.font = `${fontSize}px Minecraft`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
let init = () => new Game(document.getElementById("canvas"));
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map