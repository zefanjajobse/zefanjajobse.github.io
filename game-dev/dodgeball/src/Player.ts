class Player {
    private leftHandPositionX: number;
    private rightHandPositionX: number;
    constructor() {
    }
    
    /**
     * Get the handdistance and render
     * @param ctx canvas context to render to
     * @param ballPositionX location of the player X asis
     * @param ballPositionY location of the player Y asis
     */
    public renderHands(ctx: CanvasRenderingContext2D, ballPositionX: number, ballPositionY: number) {
        // Render the leftHand
        this.leftHandPositionX = ballPositionX - 100;
        this.renderhand(ctx, this.leftHandPositionX, ballPositionY)
        // Render the rightHand
        this.rightHandPositionX = ballPositionX + 100;
        this.renderhand(ctx, this.rightHandPositionX, ballPositionY)
    }

    /**
     * render the hands
     * @param ctx canvas context to render to
     * @param handPositionX position of the X position of hand to render
     * @param handPositionY position of the Y position of hand to render
     */
    private renderhand(ctx: CanvasRenderingContext2D, handPositionX: number, handPositionY: number) {
        ctx.fillStyle = "green";
        ctx.beginPath();
        // reverse height, so the ball falls down
        ctx.ellipse(handPositionX, handPositionY, Game.PlayerBallSize,
            Game.PlayerBallSize, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    
}