class Scene {
    // declare initial values
    private ctx: CanvasRenderingContext2D;
    private balls: Array<BouncingBall> = new Array();
    private playerPositionX: number;

    /**
     * declare the scene
     * @param ctx canvas rendering object
     * @param canvas the canvas where is can render the object
     */
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx

        // create the balls
        for (let i = 0; i < Game.AmountOfBalls; i++) {
            this.balls.push(new BouncingBall(canvas))
        }
        
        // Set the player at the center
        this.playerPositionX = canvas.width / 2;
    }

    /**
     * update the scene; locations balls and player
     * @param elapsed elapsed time since previous frame
     */
    public updateScene(elapsed: number) {
        // updates gamelogic and returns if gameover
        const gameover = this.balls.reduce(
            (previous_return, ball) =>
                previous_return ||
                ball.updatePhysics(elapsed, this.playerPositionX)
        , false)

        // render the new ball positions
        this.balls.forEach(element => {
            element.renderBall(this.ctx)
        });

        // render the player
        this.renderPlayer(this.ctx);
        return gameover
    }

    /**
     * render the player
     * @param ctx Canvas object to render to
     */
    private renderPlayer(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.ellipse(this.playerPositionX, Game.PlayerBallSize, Game.PlayerBallSize, Game.PlayerBallSize, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}