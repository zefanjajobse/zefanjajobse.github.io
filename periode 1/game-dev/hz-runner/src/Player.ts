class Player {
    // The player on the canvas
    private image: HTMLImageElement;
    private positionX: number;
    private positionY: number;

    // KeyListener so the user can give input
    private keyListener: KeyListener;

    // create initial player on position
    constructor(canvasCenter: number, playerPosition: number) {
        // create a keyboardListener
        this.keyListener = new KeyListener();

        // Set the player at the center
        this.image = this.loadNewImage("./assets/img/players/character_robot_walk0.png");
        this.positionX = canvasCenter;
        this.positionY = playerPosition
    }

    /**
     * check if one of the buttons is pressed, if so: move the player to the location
     * @param leftLane Location of the left lane
     * @param middleLane Location of the middle lane
     * @param rightLane Location of the right lane
     */
    public move(leftLane: number, middleLane: number, rightLane: number) {
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT) && this.positionX !== leftLane) {
            this.positionX = leftLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN) && this.positionX !== middleLane) {
            this.positionX = middleLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT) && this.positionX !== rightLane) {
            this.positionX = rightLane;
        }
    }

    /**
     * Draw the player to the screen
     * @param ctx canvas 2d context
     */
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.positionX - this.image.width / 2, this.positionY);
    }

    /**
     * check if the player collided with the trophy
     * @param trophy trophy object it needs to check
     * @param canvasHeight height is the canvas
     */
    public collidesWithTrophy(trophy: Trophy, canvasHeight: number): boolean {
        return this.positionX < trophy.positionX + trophy.image.width
            && this.positionX + this.image.width > trophy.positionX
            && canvasHeight - Game.playerYPosition < trophy.positionY + trophy.image.height
            && canvasHeight - Game.playerYPosition + this.image.height > trophy.positionY;
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