class Scene {
    // declare initial values
    private mouse: MouseListener;
    private ctx: CanvasRenderingContext2D;
    private balls: Array<BouncingBall> = new Array();
    public playerBall: BouncingBall;
    public playerHands: Player;

    /**
     * declare the scene
     * @param ctx canvas rendering object
     * @param canvas the canvas where is can render the object
     */
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx
        this.mouse = new MouseListener()
        this.playerHands = new Player()

        // create the balls
        for (let i = 0; i < Game.AmountOfBalls; i++) {
            // random size/speed
            const ballRadius: number = 25 + 25 * Math.random();
            const ballSpeedX: number = -5 + 10 * Math.random();
            const ballPositionX: number = ballRadius +  
                (canvas.width - 2 * ballRadius)*Math.random();
            const ballPositionY: number = canvas.height * 0.8 + canvas.height * 0.2 * Math.random();
            const ballSpeedY: number = 0;
            // blue color
            const ballColor: string = "blue"
            // Spawn a Ball
            this.balls.push(new BouncingBall(ballRadius, ballPositionX, ballPositionY, ballSpeedX, ballSpeedY, canvas, ballColor))
        }
        
        // create player ball in the middle of the screen as starting point
        const playerBallPositionX = canvas.width / 2;
        this.playerBall = new BouncingBall(Game.PlayerBallSize, playerBallPositionX, Game.playerBallOffsetY, Game.playerBallSpeed, Game.playerBallSpeed, canvas, Game.playerBallColor)
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
            }
        });

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
     * process the input for the game
     */
    public processInput() {
        // Check mouse location
        this.playerBall.ballPositionX = this.mouse.mouseLocation
    }
}