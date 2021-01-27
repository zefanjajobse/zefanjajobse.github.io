class Car {
    constructor(name, colour, xPos, yPos) {
        this._xPosition = xPos;
        this._yPosition = yPos;
        this._name = name;
        this.upgrade = 0;
        this.image = this.loadNewImage(`./assets/img/${colour}-racing-car.png`);
    }
    set distance(distanceRaced) {
        this._distance = distanceRaced;
    }
    get distance() {
        return this._distance;
    }
    get xPostition() {
        return this._xPosition;
    }
    get yPostition() {
        return this._yPosition;
    }
    get name() {
        return this._name;
    }
    set xPosition(position) {
        this._xPosition = position;
    }
    drive() {
        this._xPosition += this._distance;
    }
    setUpgrade(number) {
        this._distance += number;
        this.upgrade = number;
    }
    getUpgrade() {
        return this.upgrade;
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
var GameState;
(function (GameState) {
    GameState[GameState["Begin"] = 0] = "Begin";
    GameState[GameState["Dice"] = 1] = "Dice";
    GameState[GameState["Animate"] = 2] = "Animate";
    GameState[GameState["End"] = 3] = "End";
})(GameState || (GameState = {}));
class KeyboardListener {
    constructor() {
        this.keyDown = (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
            console.log(ev.keyCode);
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
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            if (this.gameState == GameState.Begin) {
                this.beginState();
            }
            else if (this.gameState == GameState.Dice) {
                this.diceState();
            }
            else if (this.gameState == GameState.Animate) {
                this.animate();
            }
            else if (this.gameState == GameState.End) {
                this.endState();
            }
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyboardListener = new KeyboardListener();
        this.car1 = new Car("Bullet", "red", 100, 200);
        this.car2 = new Car("Greek Arrow", "green", 100, 500);
        console.log(this.car1);
        this.cheatNotUsed = true;
        this.gameState = GameState.Begin;
        this.loop();
    }
    rollDice() {
        return this.randomNumber(9, 15);
    }
    endState() {
        if (this.car1.distance > this.car2.distance) {
            this.winner = this.car1.name;
        }
        else if (this.car1.distance < this.car2.distance) {
            this.winner = this.car2.name;
        }
        else {
            this.winner = "undecided";
        }
        this.writeTextToCanvas(`Player 1: ${this.car1.distance}`, 40, this.canvas.width / 2, 200, "center", "white");
        this.writeTextToCanvas(`Player 2: ${this.car2.distance}`, 40, this.canvas.width / 2, 500, "center", "white");
        if (this.car1.getUpgrade() !== 0) {
            this.writeTextToCanvas(`${this.car1.name} cheated!`, 60, this.canvas.width / 2, this.canvas.height - 50, "center", "red");
        }
        else if (this.car2.getUpgrade() !== 0) {
            this.writeTextToCanvas(`${this.car2.name} cheated!`, 60, this.canvas.width / 2, this.canvas.height - 50, "center", "red");
        }
        else {
            this.writeTextToCanvas(`The winner is ${this.winner}`, 60, this.canvas.width / 2, this.canvas.height - 50, "center", "red");
        }
        if (this.keyboardListener.isKeyDown(32)) {
            this.gameState = GameState.Begin;
            this.cheatNotUsed = true;
            this.car1.setUpgrade(0);
            this.car2.setUpgrade(0);
            this.car1.xPosition = 100;
            this.car2.xPosition = 100;
        }
    }
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.car1.drive();
        this.car2.drive();
        this.writeTextToCanvas(`Player 1:`, 40, this.canvas.width / 2, 200, "center", "white");
        this.writeTextToCanvas(`Player 2:`, 40, this.canvas.width / 2, 500, "center", "white");
        if (this.car1.xPostition >= this.canvas.width - 230 || this.car2.xPostition >= this.canvas.width - 230) {
            this.gameState = GameState.End;
        }
        else if (this.keyboardListener.isKeyDown(66) && this.cheatNotUsed) {
            this.car1.setUpgrade(this.rollDice());
            this.cheatNotUsed = false;
        }
        else if (this.keyboardListener.isKeyDown(78) && this.cheatNotUsed) {
            this.car2.setUpgrade(this.rollDice());
            this.cheatNotUsed = false;
        }
    }
    diceState() {
        this.car1.distance = this.rollDice();
        this.car2.distance = this.rollDice();
        this.gameState = GameState.Animate;
    }
    beginState() {
        this.writeTextToCanvas("Press R to Roll the dice", 30, this.canvas.width / 2, this.canvas.height - 50);
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_R)) {
            this.gameState = GameState.Dice;
        }
    }
    draw() {
        this.writeTextToCanvas("Formula 1", 40, this.canvas.width / 2, 50, "center", "white");
        this.finishLine();
        this.car1.draw(this.ctx);
        this.car2.draw(this.ctx);
    }
    finishLine() {
        this.ctx.beginPath();
        this.ctx.setLineDash([30, 30]);
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 15;
        this.ctx.moveTo(this.canvas.width - 250, 0);
        this.ctx.lineTo(this.canvas.width - 250, this.canvas.height);
        this.ctx.stroke();
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