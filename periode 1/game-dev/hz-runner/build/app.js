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
class Player {
    constructor(canvasCenter, playerPosition) {
        this.keyListener = new KeyListener();
        this.image = this.loadNewImage("./assets/img/players/character_robot_walk0.png");
        this.positionX = canvasCenter;
        this.positionY = playerPosition;
    }
    move(leftLane, middleLane, rightLane) {
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT) && this.positionX !== leftLane) {
            this.positionX = leftLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN) && this.positionX !== middleLane) {
            this.positionX = middleLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT) && this.positionX !== rightLane) {
            this.positionX = rightLane;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.positionX - this.image.width / 2, this.positionY);
    }
    collidesWithTrophy(trophy, canvasHeight) {
        return this.positionX < trophy.positionX + trophy.image.width
            && this.positionX + this.image.width > trophy.positionX
            && canvasHeight - Game.playerYPosition < trophy.positionY + trophy.image.height
            && canvasHeight - Game.playerYPosition + this.image.height > trophy.positionY;
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class Trophy {
    constructor(canvasCenter, trophy) {
        this._points = trophy.score;
        this._image = this.loadNewImage(`assets/img/objects/${trophy.image}`);
        this._positionX = canvasCenter;
        this._positionY = Game.TrophyBeginHeight;
        this.speed = Game.TrophySpeed;
    }
    get image() {
        return this._image;
    }
    get positionX() {
        return this._positionX;
    }
    get positionY() {
        return this._positionY;
    }
    get points() {
        return this._points;
    }
    canvasCollisionDetection(canvasHeight, leftLane, middleLane, rightLane) {
        if (this._positionY + this._image.height > canvasHeight + this._image.height) {
            this.createNew(leftLane, middleLane, rightLane);
        }
    }
    move() {
        this._positionY += this.speed;
    }
    createNew(leftLane, middleLane, rightLane) {
        let random = this.randomInteger(1, 3);
        if (random === 1) {
            this._positionX = leftLane;
        }
        if (random === 2) {
            this._positionX = middleLane;
        }
        if (random === 3) {
            this._positionX = rightLane;
        }
        random = this.randomInteger(0, Game.trophyArray.length - 1);
        this._points = Game.trophyArray[random].score;
        this._image = this.loadNewImage(`assets/img/objects/${Game.trophyArray[random].image}`);
        this._positionY = Game.TrophyBeginHeight;
        this.speed = Game.TrophySpeed;
    }
    draw(ctx) {
        ctx.drawImage(this._image, this._positionX - this._image.width / 2, this._positionY);
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
class Game {
    constructor(canvas) {
        this.step = () => {
            const leftLane = this.canvas.width / 4;
            const middleLane = this.canvas.width / 2;
            const rightLane = this.canvas.width / 4 * 3;
            this.player.move(leftLane, middleLane, rightLane);
            this.trophy.move();
            this.trophy.canvasCollisionDetection(this.canvas.height, leftLane, middleLane, rightLane);
            const ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.writeTextToCanvas(ctx, "DOWN arrow = middle | LEFT arrow = left | RIGHT arrow = right", this.canvas.width / 2, 30, 14);
            this.writeTextToCanvas(ctx, `Score: ${this.totalScore}`, this.canvas.width / 2, 60, 20);
            this.player.draw(ctx);
            if (this.player.collidesWithTrophy(this.trophy, this.canvas.height)) {
                this.totalScore += this.trophy.points;
                this.trophy.createNew(leftLane, middleLane, rightLane);
            }
            this.trophy.draw(ctx);
            requestAnimationFrame(this.step);
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;
        this.player = new Player(this.canvas.width / 2, this.canvas.height - Game.playerYPosition);
        this.trophy = new Trophy(this.canvas.width / 2, Game.trophyArray[0]);
        this.totalScore = 0;
        console.log('start animation');
        requestAnimationFrame(this.step);
    }
    writeTextToCanvas(ctx, text, xCoordinate, yCoordinate, fontSize = 20, color = "red", alignment = "center") {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
Game.playerYPosition = 150;
Game.TrophySpeed = 5;
Game.TrophyBeginHeight = 60;
Game.trophyArray = [
    { name: "gold_trophy", score: 10, image: "gold_trophy.png" },
    { name: "red_cross", score: -5, image: "face_on_cross.png" },
    { name: "silver_trophy", score: 5, image: "silver_trophy.png" },
    { name: "lightning_bolt", score: -10, image: "face_on_yellow_power_icon.png" }
];
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game(document.getElementById('canvas'));
});
//# sourceMappingURL=app.js.map