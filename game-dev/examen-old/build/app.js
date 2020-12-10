class Game {
    constructor(canvasId) {
        this.rockets = [];
        this.loop = () => {
            this.score++;
            this.draw();
            this.move();
            this.rocketOutOfCanvas();
            this.player.collidesWithRocket(this.rockets);
            this.player.move();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.keyBoardListener = new KeyboardListener();
        for (let index = 0; index < 10; index++) {
            if (index % 2 == 0) {
                this.rockets.push(this.rocketFactory("Rocket", "leftToRight"));
                console.log("leftToRight");
            }
            else {
                this.rockets.push(this.rocketFactory("Rocket", "topToBottom"));
            }
        }
        console.log(this.rockets);
        this.player = new Player("Me", this.canvas.width / 2, this.canvas.height / 2, Game.PlayerSpeed, Game.PlayerStartingRadius, this.keyBoardListener);
        console.log(this.player);
        this.score = 0;
        this.loop();
    }
    rocketFactory(name, type) {
        let xPosition = Game.randomNumber(0, this.canvas.width - 200);
        let yPosition = Game.randomNumber(0, this.canvas.height - 200);
        let image;
        if (type == "leftToRight") {
            xPosition = 0;
            image = this.loadNewImage("./assets/rocket-horizontal.png");
        }
        else {
            yPosition = 0;
            image = this.loadNewImage("./assets/rocket-vertical.png");
        }
        return new Rocket(name, xPosition, yPosition, type, Game.randomNumber(0, 15), image);
    }
    move() {
        this.rockets.forEach((rocket) => {
            rocket.move();
        });
    }
    rocketOutOfCanvas() {
        this.rockets.forEach((rocket) => {
            rocket.outOfCanvas(this.canvas.width, this.canvas.height);
        });
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        if (this.rockets.length != 0) {
            this.rockets.forEach((rocket) => {
                rocket.draw(this.ctx);
            });
            this.writeTextToCanvas(this.ctx, `Score is: ${this.score}`, 40, this.canvas.width / 2, 40);
        }
    }
    writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
Game.PlayerSpeed = 15;
Game.PlayerStartingRadius = 10;
class GameItem {
    constructor(name, xPosition, yPosition, speed) {
        this._name = name;
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._speed = speed;
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
class Player extends GameItem {
    constructor(name, xPosition, yPosition, speed, radius, keyBoardListener) {
        super(name, xPosition, yPosition, speed);
        this.radius = radius;
        this.keyBoardListener = keyBoardListener;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this._xPosition, this._yPosition, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
    move() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this._xPosition -= this._speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this._xPosition += this._speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this._yPosition -= this._speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this._yPosition += this._speed;
        }
    }
    collidesWithRocket(rockets) {
        rockets.forEach((rocket) => {
            let testX;
            let testY;
            if (this._xPosition < rocket.xPosition) {
                testX = rocket.xPosition;
            }
            else if (this._xPosition > rocket.xPosition + rocket.imageWidth) {
                testX = rocket.xPosition + rocket.imageWidth;
            }
            if (this._yPosition < rocket.yPosition) {
                testY = rocket.yPosition;
            }
            else if (this._yPosition > rocket.yPosition + rocket.imageHeight) {
                testY = rocket.yPosition + rocket.imageHeight;
            }
            const distX = this._xPosition - testX;
            const distY = this._yPosition - testY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance <= this.radius) {
                console.log("Collides with Player");
                this.radius += 3;
            }
        });
    }
}
class Rocket extends GameItem {
    constructor(name, xPosition, yPosition, type, speed, image) {
        super(name, xPosition, yPosition, speed);
        this.image = image;
        this.type = type;
    }
    get xPosition() {
        return this._xPosition;
    }
    get yPosition() {
        return this._yPosition;
    }
    get imageWidth() {
        return this.image.width;
    }
    get imageHeight() {
        return this.image.height;
    }
    move() {
        if (this.type == "leftToRight") {
            this._xPosition += this._speed;
        }
        else {
            this._yPosition += this._speed;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this._xPosition, this._yPosition);
    }
    outOfCanvas(width, height) {
        if (this.type == "leftToRight") {
            if (this._xPosition + this.image.width >= width) {
                this._xPosition = 0;
                this._yPosition = Game.randomNumber(0, height);
            }
        }
        else {
            if (this._yPosition + this.image.height >= height) {
                this._yPosition = 0;
                this._xPosition = Game.randomNumber(0, height);
            }
        }
    }
}
let init = () => {
    new Game(document.getElementById("canvas"));
};
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map