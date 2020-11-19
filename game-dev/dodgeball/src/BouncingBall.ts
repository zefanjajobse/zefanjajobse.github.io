class BouncingBall {

    // declare variables
    private ballRadius: number;
    public ballPositionX: number;
    public ballPositionY: number;
    private ballSpeedX: number;
    private ballSpeedY: number;
    private canvas: HTMLCanvasElement;
    private ballColor: string;

    /**
     * Creates a Ball object
     * @param size size of the ball
     * @param positionX beginposition X
     * @param positionY beginposition Y
     * @param ballSpeed speed of the ball
     * @param gravity how much gravity to apply
     */
    constructor(ballRadius: number, ballPositionX: number, ballPositionY: number, ballSpeedX: number, ballSpeedY: number, canvas: HTMLCanvasElement, ballColor: string) {
        this.canvas = canvas
        this.ballRadius = ballRadius
        this.ballPositionX = ballPositionX
        this.ballPositionY = ballPositionY
        this.ballSpeedX = ballSpeedX
        this.ballSpeedY = ballSpeedY
        this.ballColor = ballColor
    }

    /**
     * Render the ball
     * @param ctx canvas context to render to
     */
    public renderBall(ctx: CanvasRenderingContext2D) {
        // Render the ball
        ctx.fillStyle = this.ballColor;
        ctx.beginPath();
        // reverse height, so the ball falls down
        ctx.ellipse(this.ballPositionX, this.ballPositionY, this.ballRadius,
            this.ballRadius, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    /**
     * updates ball location and checks for gameover
     * @param elapsed the amount of time since previous frame
     * @param playerPositionX location of the player where it can collide with
     * @param canvas the canvas where it has to be checked for collision detection
     */
    public updatePhysics(elapsed: number, playerPositionX: number, playerPositionY: number) {
        // Calculate the new position of the ball
        // Some physics here: the y-portion of the speed changes due to gravity
        // Formula: Vt = V0 + gt
        this.ballSpeedY -= Game.Gravity * elapsed;
        // Calculate new X and Y parts of the position 
        // Formula: S = v*t
        this.ballPositionX += this.ballSpeedX * elapsed;
        // Formula: S=v0*t + 0.5*g*t^2
        this.ballPositionY += this.ballSpeedY * elapsed + 0.5 * Game.Gravity * elapsed * elapsed;

        // Collision detection: check if the ball hits the walls and let it bounce
        this.wallCollisionDetection(this.canvas);

        const leftHandPositionX: number = playerPositionX - 50;
        const rightHandPositionX: number = playerPositionX + 50;
        const leftHand = this.handCollisionDetection(leftHandPositionX, playerPositionY)
        const rightHand = this.handCollisionDetection(rightHandPositionX, playerPositionY)
        //  if the ball collides with the player. It's game over then
        const gameover = this.playerCollisionDetection(playerPositionX, playerPositionY);
        // return all values
        return {isGameover: gameover, leftHand: leftHand, rightHand: rightHand}
    }

    private handCollisionDetection(handPositionX: number, playerPositionY: number) {
        const distX = handPositionX - this.ballPositionX;
        const distY = playerPositionY - this.ballPositionY;
        // Calculate the distance between ball and player using Pythagoras'
        // theorem
        const distance = Math.sqrt(distX * distX + distY * distY);
        // Collides is distance <= sum of radii of both circles, hand is same size as player
        const hit = distance <= (this.ballRadius + Game.PlayerBallSize);
        return hit
    }

    /**
     * Collision detection with the player: gameover when it hits a player
     * @param playerPositionX X position of the player
     * @param playerPositionY Y position of the player
     */
    private playerCollisionDetection(playerPositionX: number, playerPositionY: number) {
        const distX = playerPositionX - this.ballPositionX;
        const distY = playerPositionY - this.ballPositionY;
        // Calculate the distance between ball and player using Pythagoras'
        // theorem
        const distance = Math.sqrt(distX * distX + distY * distY);
        // Collides is distance <= sum of radii of both circles
        const gameover = distance <= (this.ballRadius + Game.PlayerBallSize);
        return gameover;
    }

    /**
     * Collision detection with the wall: check if the ball hits the walls and let it bounce
     * @param canvas the canvas where it has to be checked
     */
    private wallCollisionDetection(canvas: HTMLCanvasElement) {
        // Left wall
        this.ballPositionX >= canvas.width - this.ballRadius;
        if (this.ballPositionX <= this.ballRadius && this.ballSpeedX < 0) {
            this.ballSpeedX = -this.ballSpeedX;
        }
        // Right wall
        if (this.ballPositionX >= canvas.width - this.ballRadius
            && this.ballSpeedX > 0) {
            this.ballSpeedX = -this.ballSpeedX;
        }

        // Bottom only (ball will always come down)
        if (this.ballPositionY <= this.ballRadius && this.ballSpeedY < 0) {
            this.ballSpeedY = -this.ballSpeedY;
        }
    }

}