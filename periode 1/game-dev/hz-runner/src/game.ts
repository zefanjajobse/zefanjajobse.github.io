// define a way to save trophies
type TrophyType = {
    name: string,
    score: number,
    image: string
}

/**
 * Main class of this Game.
 */
class Game {
    // canvas - this number == playerposition 
    public static readonly playerYPosition: number = 150;
    public static readonly TrophySpeed: number = 5;
    public static readonly TrophyBeginHeight: number = 60;

    // a array with all the trophies
    public static readonly trophyArray: TrophyType[] = [
        {name: "gold_trophy", score: 10, image: "gold_trophy.png"}, 
        {name: "red_cross", score: -5, image: "face_on_cross.png"}, 
        {name: "silver_trophy", score: 5, image: "silver_trophy.png"}, 
        {name: "lightning_bolt", score: -10, image: "face_on_yellow_power_icon.png"}]

    // The canvas
    private canvas: HTMLCanvasElement;
    // player and trophy
    private player: Player;
    private trophy: Trophy;

    private totalScore: number;

    public constructor(canvas: HTMLElement) {
        this.canvas = <HTMLCanvasElement>canvas;
 
        // Resize the canvas so it looks more like a Runner game
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;

        // add player and first trophy to the middle (in width) of the canvas
        this.player = new Player(this.canvas.width / 2, this.canvas.height - Game.playerYPosition)
        // start with the golden trophy
        this.trophy = new Trophy(this.canvas.width / 2, Game.trophyArray[0])
        this.totalScore = 0;

        // TODO create multiple objects over time
        // Start the animation
        console.log('start animation');
        requestAnimationFrame(this.step);
    }


    /**
     * This MUST be an arrow method in order to keep the `this` variable
     * working correctly. It will be overwritten by another object otherwise
     * caused by javascript scoping behaviour.
     */
    step = () => {

        // x positions of the lanes in the canvas
        const leftLane = this.canvas.width / 4;
        const middleLane = this.canvas.width / 2;
        const rightLane = this.canvas.width / 4 * 3;

        // Move player
        this.player.move(leftLane, middleLane, rightLane);

        // Move objects
        // TODO adjust for multiple objects
        this.trophy.move();

        this.trophy.canvasCollisionDetection(this.canvas.height, leftLane, middleLane, rightLane);

        // Render the items on the canvas
        // Get the canvas rendering context
        const ctx = this.canvas.getContext('2d');
        // Clear the entire canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // render the controls to the top of the screen
        this.writeTextToCanvas(ctx, "DOWN arrow = middle | LEFT arrow = left | RIGHT arrow = right", this.canvas.width / 2, 30, 14);

        // write the score to the canvas
        this.writeTextToCanvas(ctx, `Score: ${this.totalScore}`, this.canvas.width / 2, 60, 20)

        // Render the player
        // Center the image in the lane with the x coordinates
        this.player.draw(ctx);

        // Collision detection of objects and player
        // add score if player touches the trophy
        // TODO adjust for multiple objects
        if (this.player.collidesWithTrophy(this.trophy, this.canvas.height)) {
            this.totalScore += this.trophy.points
            this.trophy.createNew(leftLane, middleLane, rightLane);
        }

        // Render the objects
        // Center the image in the lane with the x coordinates
        this.trophy.draw(ctx);

        // Call this method again on the next animation frame
        // The user must hit F5 to reload the game
        requestAnimationFrame(this.step);
    }

    /**
   * Writes text to the canvas
   * @param {string} text - Text to write
   * @param {number} fontSize - Font size in pixels
   * @param {number} xCoordinate - Horizontal coordinate in pixels
   * @param {number} yCoordinate - Vertical coordinate in pixels
   * @param {string} alignment - Where to align the text
   * @param {string} color - The color of the text
   */
    public writeTextToCanvas(
        ctx: CanvasRenderingContext2D,
        text: string,
        xCoordinate: number,
        yCoordinate: number,
        fontSize: number = 20,
        color: string = "red",
        alignment: CanvasTextAlign = "center"
    ) {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }

}
