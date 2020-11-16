class Car {
    // class attributes
    private image: HTMLImageElement;
    private _name: string;
    private _distance: number;
    
    private _xPosition:number;
    private _yPosition:number;
    private color:string;

    /**
     * 
     * @param name name for the car
     * @param xPosition location in pixels on the canvas on the X as
     * @param yPosition location in pixels on the canvas on the Y as
     * @param color the color of the car
     */
    constructor(name:string, xPosition:number, yPosition:number, color:string) {
        this.image = this.loadNewImage(`./assets/img/${color}-racing-car.png`)
        this._name = name;
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._distance = 0;
        this.color = color
    }

    // class methods
    // you cant set method to the same name as a attribute
    
    // a getter or setter can also be used instead of a method to make changes to values
    public set distance(dist : number) {
        this._distance = dist;
    }
    
    public get distance() : number {
        return this._distance;
    }
    
    
    public get xPosition() : number {
        return this._xPosition;
    }

    public get yPosition() : number {
        return this._yPosition;
    }
    
    
    public set xPosition(xPosition : number) {
        this._xPosition = xPosition;
    }
    

    public get name() : string {
        return this._name;
    }
    
    /**
     * draw
     */
    public draw(ctx:CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this._xPosition, this._yPosition)
    }

    /**
    * Method to load an image
    * @param {HTMLImageElement} source
    * @return HTMLImageElement - returns an image
    */
    private loadNewImage(source: string): HTMLImageElement {
        const img = new Image();
        img.src = source;
        return img;
    }
}