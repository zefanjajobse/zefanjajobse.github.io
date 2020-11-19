/**
 * Main class of this Game.
 */
class Game {

    private canvas: HTMLCanvasElement;
    private scene: Scene;
    private previous: number;

    // 9.8 is the gravitational constant and time=1
    public static readonly Gravity: number = 0.0098;
    // size of the playerball
    public static readonly PlayerBallSize: number = 50;
    public static readonly playerBallOffsetY: number = 50
    public static readonly playerBallSpeed: number = 1.5;

    public static readonly playerBallColor: string = "red";

    // offset for the canvas size
    private static readonly RightWallOffset: number = 1;
    private static readonly BottomWallOffset: number = 4;

    public static AmountOfBalls: number = 2;

    public constructor(canvas: HTMLElement) {
        this.canvas = <HTMLCanvasElement>canvas;
        
        // Resize the canvas to full window size
        this.canvas.width = window.innerWidth - Game.RightWallOffset;
        this.canvas.height = window.innerHeight - Game.BottomWallOffset; 
        
        // Transform the rendering context so that (0,0) is the lower left 
        // corner.
        const ctx = this.canvas.getContext('2d');
        ctx.transform(1, 0, 0, -1, 0, this.canvas.height);

        // declare the scene
        this.scene = new Scene(ctx, this.canvas)

        // Start the animation
        console.log('start animation');
        this.previous = performance.now();
        requestAnimationFrame(this.step);
    }


    /**
     * This MUST be an arrow method in order to keep the `this` variable 
     * working correctly. It will be overwritten by another object otherwise
     * caused by javascript scoping behaviour.
     */
    step = (timestamp: number) => {
        // Timedifference (t) in ms between previous and now
        const elapsed = timestamp - this.previous;
        this.previous = timestamp;

        // Render the items on the canvas
        // Get the canvas rendering context
        const ctx = this.canvas.getContext('2d');
        // Clear the entire canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render the balls
        const gameover = this.scene.updateScene(elapsed)

        // Call this method again on the next animation frame
        // A quick-and-dirty game over situation: just stop animating :/
        // The user must hit F5 to reload the game
        if (!gameover) {
            requestAnimationFrame(this.step);
        }
    }
}