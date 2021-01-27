class Game {

    // The canvas
    private canvas: HTMLCanvasElement;

    private view: View[] = [];
    private currentLevel: number;

    private totalScore: number;

    public constructor(canvas: HTMLElement) {
        this.canvas = <HTMLCanvasElement>canvas;
        this.totalScore = 0

        // Resize the canvas so it looks more like a Runner game
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;
        this.currentLevel = 0;

        // every part of the level (draw, playerlocation and speed) are managed by this.
        // create 3 levels and gamecomplete if all levels complete:
        this.view.push(new Level(1, this.canvas, 100, 50, 3))
        this.view.push(new Level(2, this.canvas, 50, 100, 4))
        this.view.push(new Level(3, this.canvas, 20, 200, 4))
        this.view.push(new GameComplete())

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
        // update the current level's physics
        this.view[this.currentLevel].update(this.canvas)
        
        // draw the items to screen 
        this.view[this.currentLevel].draw(this.canvas, this, this.totalScore);

        // check if next level can be shown
        if (this.view[this.currentLevel].isComplete()) {
            this.advanceToNextLevel();
        }

        // Call this method again on the next animation frame
        // The user must hit F5 to reload the game
        requestAnimationFrame(this.step);
    }

    /**
     * check if next level can be shown, and add score to total
     */
    private advanceToNextLevel() {
        this.totalScore += this.view[this.currentLevel].score
        this.currentLevel += 1;
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
    ): void {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
