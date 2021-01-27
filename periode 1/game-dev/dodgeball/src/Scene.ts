class Scene {
    // declare initial values
    private mouse: MouseListener;
    private ctx: CanvasRenderingContext2D;
    private balls: Array<BouncingBall> = new Array();
    public playerBall: BouncingBall;
    public playerHands: Player;
    private playerScore: number;
    private amountOfBalls: number;
    private canvas: HTMLCanvasElement;
    private levelCounter: number;

    /**
     * declare the scene
     * @param ctx canvas rendering object
     * @param canvas the canvas where is can render the object
     */
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx
        this.canvas = canvas
        this.mouse = new MouseListener()
        this.playerHands = new Player()
        this.playerScore = 0;
        this.levelCounter = 1;
        // ballamount is later used to add more balls than previous round if all balls are gone
        this.amountOfBalls = Game.AmountOfStartingBalls
        // create the balls
        this.createBalls(canvas, this.amountOfBalls);
        
        // create player ball in the middle of the screen as starting point
        const playerBallPositionX = canvas.width / 2;
        this.playerBall = new BouncingBall(Game.PlayerBallSize, playerBallPositionX, Game.playerBallOffsetY, Game.playerBallSpeed, Game.playerBallSpeed, canvas, Game.playerBallColor)
    }

    /**
     * create more balls
     * @param canvas the canvas where is can render the object
     * @param amountOfBalls the amount of balls that need to be added
     */
    private createBalls(canvas: HTMLCanvasElement, amountOfBalls: number) {
        for (let i = 0; i < amountOfBalls; i++) {
            // random size/speed
            const ballRadius: number = 25 + 25 * Math.random();
            const ballSpeedX: number = -5 + 10 * Math.random();
            const ballPositionX: number = ballRadius +
                (canvas.width - 2 * ballRadius) * Math.random();
            const ballPositionY: number = canvas.height * 0.8 + canvas.height * 0.2 * Math.random();
            const ballSpeedY: number = 0;
            // blue color
            const ballColor: string = "blue";
            // Spawn a Ball
            this.balls.push(new BouncingBall(ballRadius, ballPositionX, ballPositionY, ballSpeedX, ballSpeedY, canvas, ballColor));
        }
    }

    /**
     * update the scene; locations balls and player
     * @param elapsed elapsed time since previous frame
     */
    public updateScene(elapsed: number) {
        this.processInput()

        let gameover: boolean = false
        // updates gamelogic and returns if gameover and removes ball if player has cought them
        this.balls.forEach((element, index) => {
            const object = element.updatePhysics(elapsed, this.playerBall.ballPositionX, this.playerBall.ballPositionY)
            // only check for next gameover when gameover is still false (needs to check the next ball)
            if (!gameover) {
                gameover = object.isGameover
            }
            // remove ball if cought
            if (object.leftHand || object.rightHand) {
                this.balls.splice(index, 1)
                // score +200 if cought
                this.playerScore += 200
            }

            // add 0.03 score each frame * the amount of balls on the screen
            this.playerScore += 0.03
        });

        // if there are no more balls, go to next level and add balls
        if (this.balls.length == 0 && !gameover) {
            this.amountOfBalls += 2
            this.levelCounter += 1
            this.createBalls(this.canvas, this.amountOfBalls)
        }

        // show score on screen
        this.showScore(this.ctx)

        // render the new ball positions
        this.balls.forEach(element => {
            element.renderBall(this.ctx)
        });

        // render the player
        this.playerBall.renderBall(this.ctx)
        this.playerHands.renderHands(this.ctx, this.playerBall.ballPositionX, this.playerBall.ballPositionY)
        
        // return gameover if the player got hit
        return gameover
    }

    /**
     * show player score
     * @param ctx canvas context to render to
     */
    private showScore(ctx: CanvasRenderingContext2D) { 
        ctx.save();
        ctx.resetTransform();
        ctx.font = "28px Georgia";
        ctx.fillStyle = "fuchsia";
        ctx.fillText(`Level: ${this.levelCounter} Score: ${this.playerScore.toFixed(0)}`, 10, 30);
        ctx.restore();
    }

    /**
     * process the input for the game
     */
    private processInput() {
        // Check mouse location
        this.playerBall.ballPositionX = this.mouse.mouseLocation
    }
}