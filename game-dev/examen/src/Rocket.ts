/// <reference path="ScoringItem.ts"/>
/**
 * item that flies across the screen
 */
class Rocket extends ScoringItem {
    private type: string;

    /**
     * declare the values used
     * @param name name of the gameObject
     * @param xPosition starting X position
     * @param yPosition starting Y position
     * @param speed startingspeed
     * @param image image used for the gameObject
     * @param points how much points its worth
     */
    constructor(name: string, xPosition: number, yPosition: number, type: string, speed: number, image: HTMLImageElement, points: number) {
        super(name, xPosition, yPosition, speed, image, points)
        this.type = type
    }

    /**
     * move the rocket based on his speed
     */
    public move() {
        if (this.type == "leftToRight") {
            this._xPosition += this._speed;
        } else {
            this._yPosition += this._speed;
        }
    }
    
    /**
     * check if the rocket is outside the canvas,
     * move him back to 0 if he is
     * @param width width of the canvas
     * @param height height of the canvas
     */
    public outOfCanvas(width: number, height: number) {
        if (this.type == "leftToRight") {
            if (this._xPosition + this._image.width >= width) {
                this._xPosition = 0;
                this._yPosition = Game.randomNumber(0, height);
            }
        } else {
            if (this._yPosition + this._image.height >= height) {
                this._yPosition = 0;
                this._xPosition = Game.randomNumber(0, height);
            }
        }
    }
}