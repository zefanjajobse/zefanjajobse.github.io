class Game {
    constructor(canvasId) {
        this.scoringItems = [];
        this.loop = () => {
            this.score++;
            this.draw();
            this.scoringItems.forEach((scoringItem) => {
                scoringItem.move();
                scoringItem.outOfCanvas(this.canvas.width, this.canvas.height);
            });
            if (this.score % Game.ScoreNeededForPowerUp === 0) {
                this.scoringItems.push(this.factory("Powerup", "powerup"));
            }
            this.score += this.player.collidesWithScoringItem(this.scoringItems);
            this.player.move();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        for (let index = 0; index < Game.TotalAmountOfRockets; index++) {
            if (index % 2 == 0) {
                this.scoringItems.push(this.factory("Rocket", "leftToRight"));
                console.log("leftToRight");
            }
            else {
                this.scoringItems.push(this.factory("Rocket", "topToBottom"));
            }
        }
        console.log(this.scoringItems);
        this.player = new Player("Me", this.canvas.width / 2, this.canvas.height / 2, Game.PlayerSpeed, Game.PlayerStartingRadius);
        console.log(this.player);
        this.score = 0;
        this.loop();
    }
    factory(name, type) {
        let xPosition = Game.randomNumber(0, this.canvas.width - Game.MaxXPosSpawnRocketFromCanvasEdge);
        let yPosition = Game.randomNumber(0, this.canvas.height - Game.MaxYPosSpawnRocketFromCanvasEdge);
        let image;
        if (type == "leftToRight") {
            xPosition = 0;
            image = this.loadNewImage("./assets/rocket-horizontal.png");
        }
        else if (type == "topToBottom") {
            yPosition = 0;
            image = this.loadNewImage("./assets/rocket-vertical.png");
        }
        else {
            image = this.loadNewImage("./assets/face_on_plus_health.png");
        }
        if (name == "Rocket") {
            return new Rocket(name, xPosition, yPosition, type, Game.randomNumber(0, 15), image, Game.ScoreForHittingRocket);
        }
        else {
            return new PowerUp(name, xPosition, yPosition, Game.randomNumber(0, 15), image, Game.ScoreForHittingPowerUp);
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        if (this.scoringItems.length != 0) {
            this.scoringItems.forEach((scoringItem) => {
                scoringItem.draw(this.ctx);
            });
            Game.writeTextToCanvas(this.ctx, `Score is: ${this.score}`, Game.ScoreFontSize, this.canvas.width / 2, Game.YCordinateScore);
        }
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
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
Game.TotalAmountOfRockets = 10;
Game.ScoreForHittingRocket = 0;
Game.ScoreForHittingPowerUp = 10;
Game.ScoreNeededForPowerUp = 500;
Game.MaxXPosSpawnRocketFromCanvasEdge = 200;
Game.MaxYPosSpawnRocketFromCanvasEdge = 200;
Game.YCordinateScore = 40;
Game.ScoreFontSize = 40;
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
    constructor(name, xPosition, yPosition, speed, radius) {
        super(name, xPosition, yPosition, speed);
        this.radius = radius;
        this.keyBoardListener = new KeyboardListener();
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
    collidesWithScoringItem(scoringItems) {
        let score = 0;
        scoringItems.forEach((scoringItem, index) => {
            const distX = this.distanceFromPlayer(this._xPosition, scoringItem.xPosition, scoringItem.imageWidth);
            const distY = this.distanceFromPlayer(this._yPosition, scoringItem.yPosition, scoringItem.imageHeight);
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance <= this.radius) {
                console.log("Collides with Player");
                score += scoringItem.points;
                if (scoringItem.name === "Rocket") {
                    this.radius += 3;
                }
                else {
                    if (this.radius > Game.PlayerStartingRadius + 3) {
                        this.radius -= 3;
                        scoringItems.splice(index, 1);
                    }
                }
            }
        });
        return score;
    }
    distanceFromPlayer(playerPosition, scoringItemPosition, imageSize) {
        let test = 0;
        if (playerPosition < scoringItemPosition) {
            test = scoringItemPosition;
        }
        else if (playerPosition > scoringItemPosition + imageSize) {
            test = scoringItemPosition + imageSize;
        }
        return playerPosition - test;
    }
}
class ScoringItem extends GameItem {
    constructor(name, xPosition, yPosition, speed, image, points) {
        super(name, xPosition, yPosition, speed);
        this._image = image;
        this._points = points;
    }
    get xPosition() {
        return this._xPosition;
    }
    get yPosition() {
        return this._yPosition;
    }
    get imageWidth() {
        return this._image.width;
    }
    get imageHeight() {
        return this._image.height;
    }
    get points() {
        return this._points;
    }
    get name() {
        return this._name;
    }
    outOfCanvas(width, height) {
    }
    move() {
    }
    draw(ctx) {
        ctx.drawImage(this._image, this._xPosition, this._yPosition);
    }
}
class PowerUp extends ScoringItem {
    constructor(name, xPosition, yPosition, speed, image, points) {
        super(name, xPosition, yPosition, speed, image, points);
    }
}
class Rocket extends ScoringItem {
    constructor(name, xPosition, yPosition, type, speed, image, points) {
        super(name, xPosition, yPosition, speed, image, points);
        this.type = type;
    }
    move() {
        if (this.type == "leftToRight") {
            this._xPosition += this._speed;
        }
        else {
            this._yPosition += this._speed;
        }
    }
    outOfCanvas(width, height) {
        if (this.type == "leftToRight") {
            if (this._xPosition + this._image.width >= width) {
                this._xPosition = 0;
                this._yPosition = Game.randomNumber(0, height);
            }
        }
        else {
            if (this._yPosition + this._image.height >= height) {
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