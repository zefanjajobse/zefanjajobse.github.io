class Player {

    // initial values
    private canvas: HTMLCanvasElement;

    private keyListener: KeyListener;

    private lanes: number[]

    private image: HTMLImageElement;
    private positionX: number;

    /**
     * create a player
     * @param canvas HTML canvas element
     * @param lanes the amount of lanes in this level (array is made in level)
     */
    public constructor(canvas: HTMLCanvasElement, lanes: number[]) {
        this.canvas = canvas;

        this.lanes = lanes

        this.keyListener = new KeyListener();

        this.image = this.loadNewImage("./assets/img/players/character_robot_walk0.png");
        this.positionX = this.canvas.width / 2;
    }

    /**
     * check for keypresses
     */
    public move(lanes: number[]): void {
        // 49 == KEY_1, 50 key 2 etc..
        // lanes == lanepositions, index == lanes from left to right
        lanes.forEach((element, index) => {
            if (this.keyListener.isKeyDown(49+index) && this.positionX !== element) {
                this.positionX = element;
            }
        });
    }

    /**
     * Draw the image of the player in a lane
     * @param ctx canvas 2d rendering context
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(
            this.image,
            // Center the image in the lane with the x coordinates
            this.positionX - this.image.width / 2,
            this.canvas.height - 150
        );
    }

    /**
     * Collision detection of gold trophy and player
     * Use bounding box detection method: https://computersciencewiki.org/index.php/Bounding_boxes
     */
    public collidesWith(scoringObject: ScoringObject): boolean {
        if (this.positionX < scoringObject.getPositionX() + scoringObject.getImageWidth()
            && this.positionX + this.image.width > scoringObject.getPositionX()
            && this.canvas.height - 150 < scoringObject.getPositionY() + scoringObject.getImageHeight()
            && this.canvas.height - 150 + this.image.height > scoringObject.getPositionY()
        ) {
            return true;
        }

        return false;
    }

    /**
    * Loads an image in such a way that the screen doesn't constantly flicker
    * @param {HTMLImageElement} source
    * @return HTMLImageElement - returns an image
    */
    private loadNewImage(source: string): HTMLImageElement {
        const img = new Image();
        img.src = source;
        return img;
    }
}
