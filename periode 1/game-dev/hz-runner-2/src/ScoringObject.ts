abstract class ScoringObject {
    
    private canvas: HTMLCanvasElement;

// visable for inherited classes: protected
    // protected == all childs (for example gold trophy) can read the item
    protected image: HTMLImageElement;
    private positionX: number;
    private positionY: number;
    protected speed: number;

    protected points: number;

    /**
     * create a element the player can catch
     * @param canvas HTML canvas element
     * @param lanes the amount of lanes in this level (array is made in level)
     */
    public constructor(canvas: HTMLCanvasElement, lanes: number[]) {
        this.canvas = canvas;

        // position of object spawn is a random lane
        const random = this.randomInteger(0, lanes.length-1);
        this.positionX = lanes[random]

        // starting position + static speed
        this.positionY = 60;
        this.speed = 5;
    }

    /**
     * move the object by his speed
     */
    public move(): void {
        this.positionY += this.speed;
    }

    // visable for inherited classes: protected

    /**
     * Render the objects
     * @param ctx The CanvasRenderingContext2D of the canvas to draw on
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(
            this.image,
            // Center the image in the lane with the x coordinates
            this.positionX - this.image.width / 2,
            this.positionY
        );
    }

    /**
     * check if object collides with bottom and return bolean
     */
    public collidesWithCanvasBottom(): boolean {
        if (this.positionY + this.image.height > this.canvas.height) {
            return true;
        }

        return false;
    }

    // public getters
    public getPositionX(): number {
        return this.positionX;
    }

    public getPositionY(): number {
        return this.positionY;
    }

    public getImageWidth(): number {
        return this.image.width;
    }

    public getImageHeight(): number {
        return this.image.height;
    }

    public getPoints(): number {
        return this.points;
    }

    /**
    * Loads an image in such a way that the screen doesn't constantly flicker
    * @param {HTMLImageElement} source
    * @return HTMLImageElement - returns an image
    */
    protected loadNewImage(source: string): HTMLImageElement {
        const img = new Image();
        img.src = source;
        return img;
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