abstract class Fruit {
    private _name: string;
    private _lifeSpan: number;
    protected _xPos: number;
    protected _yPos: number;
    protected _image: HTMLImageElement;
    
    constructor(name: string, lifeSpan: number, xPos: number, yPos: number) {
        this._name = name
        this._lifeSpan = lifeSpan
        this._xPos = xPos
        this._yPos = yPos
    }

    /**
     * public getters for the name, lifespan left and position
     */
    public get name() : string {
        return this._name
    }
    
    public get lifeSpan() : number {
        return this._lifeSpan
    }
    
    public get xPos() : number {
        return this._xPos
    }
    
    public get yPos() : number {
        return this._yPos
    }
    
    /**
     * get the width of the image defined in the fruit
     */
    public getImageWidth(): number {
        return this._image.width
    }
    
    /**
     * get the height of the image defined in the fruit
     */
    public getImageHeight(): number {
        return this._image.height
    }

    /**
     * made for Apple, will move the apple.
     */
    public move(canvas: HTMLCanvasElement) {

    }
    
    /**
     * render the fruit to the screen
     * @param ctx canvas 2d rendering context
     */
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this._image, this._xPos, this._yPos);
    }

    /**
     * Loads an image so it doesn't flicker
     * @param {HTMLImageElement} source
     * @return HTMLImageElement - returns an image
     */
    protected loadNewImage(source: string): HTMLImageElement {
        const img = new Image();
        img.src = source;
        return img;
    }
}