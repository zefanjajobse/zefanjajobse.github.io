class BouncingBall {
    constructor(canvas) {
        this.canvas = canvas;
        this.ballSpeedY = 0;
        this.ballRadius = 25 + 25 * Math.random();
        this.ballSpeedX = -5 + 10 * Math.random();
        this.ballPositionX = this.ballRadius +
            (this.canvas.width - 2 * this.ballRadius) * Math.random();
        this.ballPositionY = this.canvas.height * 0.8 + this.canvas.height * 0.2 * Math.random();
    }
    renderBall(ctx) {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.ellipse(this.ballPositionX, this.ballPositionY, this.ballRadius, this.ballRadius, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    updatePhysics(elapsed, playerPositionX) {
        this.ballSpeedY -= Game.Gravity * elapsed;
        this.ballPositionX += this.ballSpeedX * elapsed;
        this.ballPositionY += this.ballSpeedY * elapsed + 0.5 * Game.Gravity * elapsed * elapsed;
        this.collisionDetection(this.canvas);
        const distX = playerPositionX - this.ballPositionX;
        const distY = Game.PlayerBallSize - this.ballPositionY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const gameover = distance <= (this.ballRadius + Game.PlayerBallSize);
        return gameover;
    }
    collisionDetection(canvas) {
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
Game.RightWallOffset = 1;
Game.BottomWallOffset = 4;
Game.AmountOfBalls = 2;
class Scene {
    constructor(ctx, canvas) {
        this.balls = new Array();
        this.ctx = ctx;
        for (let i = 0; i < Game.AmountOfBalls; i++) {
            this.balls.push(new BouncingBall(canvas));
        }
        this.playerPositionX = canvas.width / 2;
    }
    updateScene(elapsed) {
        const gameover = this.balls.reduce((previous_return, ball) => previous_return ||
            ball.updatePhysics(elapsed, this.playerPositionX), false);
        this.balls.forEach(element => {
            element.renderBall(this.ctx);
        });
        this.renderPlayer(this.ctx);
        return gameover;
    }
    renderPlayer(ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.ellipse(this.playerPositionX, Game.PlayerBallSize, Game.PlayerBallSize, Game.PlayerBallSize, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game(document.getElementById('canvas'));
});
//# sourceMappingURL=app.js.map