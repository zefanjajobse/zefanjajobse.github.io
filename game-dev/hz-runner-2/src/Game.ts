class Game {

    // The canvas
    private canvas: HTMLCanvasElement;

    // The player on the canvas
    private player: Player;

    private scoringObject: ScoringObject[];
    private frameIndex: number;

    // Score
    private totalScore: number;

    public constructor(canvas: HTMLElement) {
        this.canvas = <HTMLCanvasElement>canvas;
        this.frameIndex = 0;
        this.scoringObject = []

        // Resize the canvas so it looks more like a Runner game
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;

        // TODO create multiple objects over time
        this.createRandomScoringObject();

        // Set the player at the center
        this.player = new Player(this.canvas);

        // Score is zero at start
        this.totalScore = 0;

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
        this.frameIndex += 1
        this.player.move();

        // if 100 frames past, write new element to screen and reset timer
        if (this.frameIndex == 100) {
            this.createRandomScoringObject()
            this.frameIndex = 0
        }

        // check for collisions and add score
        this.collisionDetection();
        
        // draw the items to screen
        this.draw();

        // Call this method again on the next animation frame
        // The user must hit F5 to reload the game
        requestAnimationFrame(this.step);
    }

    /**
     * add to score if it hits player otherwise just remove if it hits the bottom
     */
    private collisionDetection(): void {
        this.scoringObject.forEach((element, index) => {
            if (element !== null) {
                element.move();

                if (this.player.collidesWith(element)) {
                    this.totalScore += element.getPoints();
                    this.scoringObject.splice(index, 1);
                } else if (element.collidesWithCanvasBottom()) {
                    this.scoringObject.splice(index, 1);
                }
            }
        });
    }

    /**
     * Render the items on the canvas
     */
    private draw(): void {
        // Get the canvas rendering context
        const ctx = this.canvas.getContext('2d');
        // Clear the entire canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // render the controls to the top of the screen
        this.writeTextToCanvas(ctx, "DOWN arrow = middle | LEFT arrow = left | RIGHT arrow = right", this.canvas.width / 2, 30, 14);

        // write the score to the canvas
        this.writeTextToCanvas(ctx, `Score: ${this.totalScore}`, this.canvas.width / 2, 60, 20)

        this.player.draw(ctx);

        if (this.scoringObject !== null) {
            this.scoringObject.forEach(element => {
                element.draw(ctx);
            });   
        }
    }

    /**
     * Create a random scoring object and clear the other scoring objects by setting them to `null`.
     */
    private createRandomScoringObject(): void {

        const random = this.randomInteger(1, 4);

        if (random === 1) {
            this.scoringObject.push(new GoldTrophy(this.canvas))
        }

        if (random === 2) {
            this.scoringObject.push(new SilverTrophy(this.canvas))
        }

        if (random === 3) {
            this.scoringObject.push(new RedCross(this.canvas))
        }

        if (random === 4) {
            this.scoringObject.push(new LightningBolt(this.canvas))
        }
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

    /**
    * Generates a random integer number between min and max
    *
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    private randomInteger(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}
