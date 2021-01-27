class Game {
    constructor(canvas) {
        this.view = [];
        this.step = () => {
            this.view[this.currentLevel].update(this.canvas);
            this.view[this.currentLevel].draw(this.canvas, this, this.totalScore);
            if (this.view[this.currentLevel].isComplete()) {
                this.advanceToNextLevel();
            }
            requestAnimationFrame(this.step);
        };
        this.canvas = canvas;
        this.totalScore = 0;
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;
        this.currentLevel = 0;
        this.view.push(new Level(1, this.canvas, 100, 50, 3));
        this.view.push(new Level(2, this.canvas, 50, 100, 4));
        this.view.push(new Level(3, this.canvas, 20, 200, 4));
        this.view.push(new GameComplete());
        console.log('start animation');
        requestAnimationFrame(this.step);
    }
    advanceToNextLevel() {
        this.totalScore += this.view[this.currentLevel].score;
        this.currentLevel += 1;
    }
    writeTextToCanvas(ctx, text, xCoordinate, yCoordinate, fontSize = 20, color = "red", alignment = "center") {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
class View {
    constructor() {
        this._score = 0;
    }
    get score() {
        return this._score;
    }
    update(canvas) {
    }
    isComplete() {
        return false;
    }
    draw(canvas, game, totalScore) {
    }
}
class GameComplete extends View {
    update(canvas) {
    }
    isComplete() {
        return false;
    }
    draw(canvas, game, totalScore) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.writeTextToCanvas(ctx, "No more levels!", canvas.width / 2, 30, 20);
        game.writeTextToCanvas(ctx, `Your highscore: ${totalScore}`, canvas.width / 2, 60, 20);
    }
}
class ScoringObject {
    constructor(canvas, lanes) {
        this.canvas = canvas;
        const random = this.randomInteger(0, lanes.length - 1);
        this.positionX = lanes[random];
        this.positionY = 60;
        this.speed = 5;
    }
    move() {
        this.positionY += this.speed;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.positionX - this.image.width / 2, this.positionY);
    }
    collidesWithCanvasBottom() {
        if (this.positionY + this.image.height > this.canvas.height) {
            return true;
        }
        return false;
    }
    getPositionX() {
        return this.positionX;
    }
    getPositionY() {
        return this.positionY;
    }
    getImageWidth() {
        return this.image.width;
    }
    getImageHeight() {
        return this.image.height;
    }
    getPoints() {
        return this.points;
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class GoldTrophy extends ScoringObject {
    constructor(canvas, lanes) {
        super(canvas, lanes);
        this.image = this.loadNewImage("assets/img/objects/gold_trophy.png");
        this.points = 10;
    }
}
class KeyListener {
    constructor() {
        this.keyCodeStates = new Array();
        this.keyCodeTyped = new Array();
        this.previousState = new Array();
        window.addEventListener("keydown", (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        });
        window.addEventListener("keyup", (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        });
    }
    onFrameStart() {
        this.keyCodeTyped = new Array();
        this.keyCodeStates.forEach((val, key) => {
            if (this.previousState[key] != val && !this.keyCodeStates[key]) {
                this.keyCodeTyped[key] = true;
                this.previousState[key] = val;
            }
        });
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] == true;
    }
    isKeyTyped(keyCode) {
        return this.keyCodeTyped[keyCode] == true;
    }
}
KeyListener.KEY_ENTER = 13;
KeyListener.KEY_SHIFT = 16;
KeyListener.KEY_CTRL = 17;
KeyListener.KEY_ALT = 18;
KeyListener.KEY_ESC = 27;
KeyListener.KEY_SPACE = 32;
KeyListener.KEY_LEFT = 37;
KeyListener.KEY_UP = 38;
KeyListener.KEY_RIGHT = 39;
KeyListener.KEY_DOWN = 40;
KeyListener.KEY_DEL = 46;
KeyListener.KEY_1 = 49;
KeyListener.KEY_2 = 50;
KeyListener.KEY_3 = 51;
KeyListener.KEY_4 = 52;
KeyListener.KEY_5 = 53;
KeyListener.KEY_6 = 54;
KeyListener.KEY_7 = 55;
KeyListener.KEY_8 = 56;
KeyListener.KEY_9 = 57;
KeyListener.KEY_0 = 58;
KeyListener.KEY_A = 65;
KeyListener.KEY_B = 66;
KeyListener.KEY_C = 67;
KeyListener.KEY_D = 68;
KeyListener.KEY_E = 69;
KeyListener.KEY_F = 70;
KeyListener.KEY_G = 71;
KeyListener.KEY_H = 72;
KeyListener.KEY_I = 73;
KeyListener.KEY_J = 74;
KeyListener.KEY_K = 75;
KeyListener.KEY_L = 76;
KeyListener.KEY_M = 77;
KeyListener.KEY_N = 78;
KeyListener.KEY_O = 79;
KeyListener.KEY_P = 80;
KeyListener.KEY_Q = 81;
KeyListener.KEY_R = 82;
KeyListener.KEY_S = 83;
KeyListener.KEY_T = 84;
KeyListener.KEY_U = 85;
KeyListener.KEY_V = 86;
KeyListener.KEY_W = 87;
KeyListener.KEY_X = 88;
KeyListener.KEY_Y = 89;
KeyListener.KEY_Z = 90;
class Level extends View {
    constructor(levelNumber, canvas, spawnRate, targetScore, lanesCount) {
        super();
        this.spawnRate = 100;
        this.targetScore = 20;
        this.lanes = [];
        this.canvas = canvas;
        this.levelNumber = levelNumber;
        this.initializeLanes(lanesCount);
        this.spawnRate = spawnRate;
        this.targetScore = targetScore;
        this.player = new Player(canvas, this.lanes);
        this.frameIndex = 0;
        this.scoringObject = [];
        this.createRandomScoringObject();
    }
    collisionDetection() {
        this.scoringObject.forEach((element, index) => {
            if (element !== null) {
                element.move();
                if (this.player.collidesWith(element)) {
                    this._score += element.getPoints();
                    this.scoringObject.splice(index, 1);
                }
                else if (element.collidesWithCanvasBottom()) {
                    this.scoringObject.splice(index, 1);
                }
            }
        });
    }
    initializeLanes(laneCount) {
        this.lanes = [];
        for (let i = 0; i < laneCount; i++) {
            this.lanes.push(this.canvas.width / (laneCount + 1) * (i + 1));
        }
    }
    update() {
        this.frameIndex += 1;
        this.player.move(this.lanes);
        if (this.frameIndex % this.spawnRate == 0) {
            this.createRandomScoringObject();
        }
        this.collisionDetection();
    }
    isComplete() {
        return this.score > this.targetScore;
    }
    createRandomScoringObject() {
        const random = this.randomInteger(1, 4);
        if (random === 1) {
            this.scoringObject.push(new GoldTrophy(this.canvas, this.lanes));
        }
        if (random === 2) {
            this.scoringObject.push(new SilverTrophy(this.canvas, this.lanes));
        }
        if (random === 3) {
            this.scoringObject.push(new RedCross(this.canvas, this.lanes));
        }
        if (random === 4) {
            this.scoringObject.push(new LightningBolt(this.canvas, this.lanes));
        }
    }
    randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    draw(canvas, game, totalScore) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.writeTextToCanvas(ctx, `there are ${this.lanes.length} lanes, press the number keys 1 to ${this.lanes.length} to move`, canvas.width / 2, 30, 14);
        game.writeTextToCanvas(ctx, `Level: ${this.levelNumber} Score: ${this.score}`, canvas.width / 2, 60, 20);
        this.player.draw(ctx);
        if (this.scoringObject !== null) {
            this.scoringObject.forEach(element => {
                element.draw(ctx);
            });
        }
    }
}
class LightningBolt extends ScoringObject {
    constructor(canvas, lanes) {
        super(canvas, lanes);
        this.image = this.loadNewImage("assets/img/objects/titled_yellow_power_icon.png");
        this.points = -10;
    }
}
class Player {
    constructor(canvas, lanes) {
        this.canvas = canvas;
        this.lanes = lanes;
        this.keyListener = new KeyListener();
        this.image = this.loadNewImage("./assets/img/players/character_robot_walk0.png");
        this.positionX = this.canvas.width / 2;
    }
    move(lanes) {
        lanes.forEach((element, index) => {
            if (this.keyListener.isKeyDown(49 + index) && this.positionX !== element) {
                this.positionX = element;
            }
        });
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.positionX - this.image.width / 2, this.canvas.height - 150);
    }
    collidesWith(scoringObject) {
        if (this.positionX < scoringObject.getPositionX() + scoringObject.getImageWidth()
            && this.positionX + this.image.width > scoringObject.getPositionX()
            && this.canvas.height - 150 < scoringObject.getPositionY() + scoringObject.getImageHeight()
            && this.canvas.height - 150 + this.image.height > scoringObject.getPositionY()) {
            return true;
        }
        return false;
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class RedCross extends ScoringObject {
    constructor(canvas, lanes) {
        super(canvas, lanes);
        this.image = this.loadNewImage("assets/img/objects/tilted_cross.png");
        this.points = -5;
    }
}
class SilverTrophy extends ScoringObject {
    constructor(canvas, lanes) {
        super(canvas, lanes);
        this.image = this.loadNewImage("assets/img/objects/silver_trophy.png");
        this.points = 5;
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game(document.getElementById('canvas'));
});
//# sourceMappingURL=app.js.map