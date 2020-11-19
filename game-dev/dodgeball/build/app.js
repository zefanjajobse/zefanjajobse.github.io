class BouncingBall {
    constructor(ballRadius, ballPositionX, ballPositionY, ballSpeedX, ballSpeedY, canvas, ballColor) {
        this.canvas = canvas;
        this.ballRadius = ballRadius;
        this.ballPositionX = ballPositionX;
        this.ballPositionY = ballPositionY;
        this.ballSpeedX = ballSpeedX;
        this.ballSpeedY = ballSpeedY;
        this.ballColor = ballColor;
    }
    renderBall(ctx) {
        ctx.fillStyle = this.ballColor;
        ctx.beginPath();
        ctx.ellipse(this.ballPositionX, this.ballPositionY, this.ballRadius, this.ballRadius, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    updatePhysics(elapsed, playerPositionX, playerPositionY) {
        this.ballSpeedY -= Game.Gravity * elapsed;
        this.ballPositionX += this.ballSpeedX * elapsed;
        this.ballPositionY += this.ballSpeedY * elapsed + 0.5 * Game.Gravity * elapsed * elapsed;
        this.wallCollisionDetection(this.canvas);
        const leftHandPositionX = playerPositionX - 50;
        const rightHandPositionX = playerPositionX + 50;
        const leftHand = this.handCollisionDetection(leftHandPositionX, playerPositionY);
        const rightHand = this.handCollisionDetection(rightHandPositionX, playerPositionY);
        const gameover = this.playerCollisionDetection(playerPositionX, playerPositionY);
        return { isGameover: gameover, leftHand: leftHand, rightHand: rightHand };
    }
    handCollisionDetection(handPositionX, playerPositionY) {
        const distX = handPositionX - this.ballPositionX;
        const distY = playerPositionY - this.ballPositionY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const hit = distance <= (this.ballRadius + Game.PlayerBallSize);
        return hit;
    }
    playerCollisionDetection(playerPositionX, playerPositionY) {
        const distX = playerPositionX - this.ballPositionX;
        const distY = playerPositionY - this.ballPositionY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const gameover = distance <= (this.ballRadius + Game.PlayerBallSize);
        return gameover;
    }
    wallCollisionDetection(canvas) {
        this.ballPositionX >= canvas.width - this.ballRadius;
        if (this.ballPositionX <= this.ballRadius && this.ballSpeedX < 0) {
            this.ballSpeedX = -this.ballSpeedX;
        }
        if (this.ballPositionX >= canvas.width - this.ballRadius
            && this.ballSpeedX > 0) {
            this.ballSpeedX = -this.ballSpeedX;
        }
        if (this.ballPositionY <= this.ballRadius && this.ballSpeedY < 0) {
            this.ballSpeedY = -this.ballSpeedY;
        }
    }
}
class Game {
    constructor(canvas) {
        this.step = (timestamp) => {
            const elapsed = timestamp - this.previous;
            this.previous = timestamp;
            const ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const gameover = this.scene.updateScene(elapsed);
            if (!gameover) {
                requestAnimationFrame(this.step);
            }
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth - Game.RightWallOffset;
        this.canvas.height = window.innerHeight - Game.BottomWallOffset;
        const ctx = this.canvas.getContext('2d');
        ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
        this.scene = new Scene(ctx, this.canvas);
        console.log('start animation');
        this.previous = performance.now();
        requestAnimationFrame(this.step);
    }
}
Game.Gravity = 0.0098;
Game.PlayerBallSize = 50;
Game.playerBallOffsetY = 50;
Game.playerBallSpeed = 1.5;
Game.playerBallColor = "red";
Game.RightWallOffset = 1;
Game.BottomWallOffset = 4;
Game.AmountOfStartingBalls = 2;
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
class MouseListener {
    constructor() {
        document.addEventListener('mousemove', (event) => {
            this.mouseLocation = event.clientX;
        });
    }
}
class Player {
    constructor() {
    }
    renderHands(ctx, ballPositionX, ballPositionY) {
        this.leftHandPositionX = ballPositionX - 100;
        this.renderhand(ctx, this.leftHandPositionX, ballPositionY);
        this.rightHandPositionX = ballPositionX + 100;
        this.renderhand(ctx, this.rightHandPositionX, ballPositionY);
    }
    renderhand(ctx, handPositionX, handPositionY) {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.ellipse(handPositionX, handPositionY, Game.PlayerBallSize, Game.PlayerBallSize, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}
class Scene {
    constructor(ctx, canvas) {
        this.balls = new Array();
        this.ctx = ctx;
        this.canvas = canvas;
        this.mouse = new MouseListener();
        this.playerHands = new Player();
        this.playerScore = 0;
        this.levelCounter = 1;
        this.amountOfBalls = Game.AmountOfStartingBalls;
        this.createBalls(canvas, this.amountOfBalls);
        const playerBallPositionX = canvas.width / 2;
        this.playerBall = new BouncingBall(Game.PlayerBallSize, playerBallPositionX, Game.playerBallOffsetY, Game.playerBallSpeed, Game.playerBallSpeed, canvas, Game.playerBallColor);
    }
    createBalls(canvas, amountOfBalls) {
        for (let i = 0; i < amountOfBalls; i++) {
            const ballRadius = 25 + 25 * Math.random();
            const ballSpeedX = -5 + 10 * Math.random();
            const ballPositionX = ballRadius +
                (canvas.width - 2 * ballRadius) * Math.random();
            const ballPositionY = canvas.height * 0.8 + canvas.height * 0.2 * Math.random();
            const ballSpeedY = 0;
            const ballColor = "blue";
            this.balls.push(new BouncingBall(ballRadius, ballPositionX, ballPositionY, ballSpeedX, ballSpeedY, canvas, ballColor));
        }
    }
    updateScene(elapsed) {
        this.processInput();
        let gameover = false;
        this.balls.forEach((element, index) => {
            const object = element.updatePhysics(elapsed, this.playerBall.ballPositionX, this.playerBall.ballPositionY);
            if (!gameover) {
                gameover = object.isGameover;
            }
            if (object.leftHand || object.rightHand) {
                this.balls.splice(index, 1);
                this.playerScore += 200;
            }
            this.playerScore += 0.03;
        });
        if (this.balls.length == 0 && !gameover) {
            this.amountOfBalls += 2;
            this.levelCounter += 1;
            this.createBalls(this.canvas, this.amountOfBalls);
        }
        this.showScore(this.ctx);
        this.balls.forEach(element => {
            element.renderBall(this.ctx);
        });
        this.playerBall.renderBall(this.ctx);
        this.playerHands.renderHands(this.ctx, this.playerBall.ballPositionX, this.playerBall.ballPositionY);
        return gameover;
    }
    showScore(ctx) {
        ctx.save();
        ctx.resetTransform();
        ctx.font = "28px Georgia";
        ctx.fillStyle = "fuchsia";
        ctx.fillText(`Level: ${this.levelCounter} Score: ${this.playerScore.toFixed(0)}`, 10, 30);
        ctx.restore();
    }
    processInput() {
        this.playerBall.ballPositionX = this.mouse.mouseLocation;
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game(document.getElementById('canvas'));
});
//# sourceMappingURL=app.js.map