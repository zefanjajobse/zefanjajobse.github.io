/// <reference path="Fruit.ts"/>

class Apple extends Fruit{
    private xVelocity: number;
    private yVelocity: number;

    constructor(name: string, lifeSpan: number, xPos: number, yPos: number, xVelocity: number, yVelocity: number) {
        super(name, lifeSpan, xPos, yPos)
        this._image = this.loadNewImage("./assets/apple-sm.png")
        // define speed
        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
    }

    /**
     * move the character over the screen
     * @param canvas html canvas to check the size with
     */
    public move(canvas: HTMLCanvasElement) {
        // move down if top is reached
        if (this._yPos <= 0) {
            this.yVelocity = Math.abs(this.yVelocity)
        // move up is bottom is reached -- canvas with the image height so it doesnt dissapear from screen
        } else if (this._yPos >= canvas.height - this._image.height) {
            this.yVelocity = -Math.abs(this.yVelocity)
        // move left is right is reached
        }
        
        if (this._xPos >= canvas.width - this._image.width) {
            this.xVelocity = -Math.abs(this.xVelocity)
        // move right is left is reached
        } else if (this._xPos <= 0) {
            this.xVelocity = Math.abs(this.xVelocity)
        }
        
        // move the actual character
        this._yPos += this.yVelocity
        this._xPos += this.xVelocity
    }
}