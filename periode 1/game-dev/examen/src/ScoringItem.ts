/// <reference path="GameItem.ts"/>
/**
 * this item is the parent of both the rocket and the powerup
 */
abstract class ScoringItem extends GameItem {
    private _points: number;
    protected _image: HTMLImageElement;

    /**
     * declare the values used
     * @param name name of the gameObject
     * @param xPosition starting X position
     * @param yPosition starting Y position
     * @param speed startingspeed
     * @param image image used for the gameObject
     * @param points how much points its worth
     */
    constructor(name: string, xPosition: number, yPosition: number, speed: number, image: HTMLImageElement, points: number) {
        // send to main class
        super(name, xPosition, yPosition, speed)
        this._image = image;
        this._points = points
    }

    // public getters to get positions, points and name
    public get xPosition() : number {
        return this._xPosition
    }

    public get yPosition() : number {
        return this._yPosition
    }

    public get imageWidth() : number {
        return this._image.width
    }
    
    public get imageHeight() : number {
        return this._image.height
    }

    public get points() : number { 
        return this._points
    }

    public get name() : string {
        return this._name
    }

    // method not used here, is for rocket
    public outOfCanvas(width: number, height: number) {
    }
    public move() {
    }

    /**
     * draw the scoringItem to the screen
     * @param ctx Canvas rendering context
     */
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this._image, this._xPosition, this._yPosition);
    }
}