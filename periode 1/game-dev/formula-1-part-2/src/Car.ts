class Car {
    private image: HTMLImageElement;
    private _name: string;
    private _distance: number;
    private _xPosition: number;
    private _yPosition: number;
    private upgrade: number

    constructor(name:string, colour:string, xPos:number, yPos:number) {
        this._xPosition = xPos;
        this._yPosition = yPos;
        this._name = name;
        this.upgrade = 0;
        this.image = this.loadNewImage(`./assets/img/${colour}-racing-car.png`);
        //console.log(this.image);
    }

    public set distance(distanceRaced : number) {
        this._distance = distanceRaced;
    }
    
    public get distance() : number {
        return this._distance;
    }

    public get xPostition() : number {
        return this._xPosition;
    }

    public get yPostition() : number {
        return this._yPosition;
    }

    public get name() : string {
        return this._name;
    }

    public set xPosition(position: number) {
        this._xPosition = position
    }

    /**
     * move the car by the defined distance
     */
    public drive() {
        this._xPosition += this._distance
    }

    /**
     * make the car faster based on given number
     * @param number amount to increase it by
     */
    public setUpgrade(number: number) {
        this._distance += number
        this.upgrade = number
    }

    /**
     * returns the upgrade value
     */
    public getUpgrade(): number {
        return this.upgrade
    }

    /**
    * Draw all the necessary items to the screen
    */
    public draw(ctx:CanvasRenderingContext2D) {
        // draw player
        //console.log(ctx);
        ctx.drawImage(this.image, this._xPosition, this._yPosition);
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