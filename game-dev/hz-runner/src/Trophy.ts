class Trophy {
    // The objects on the canvas
    // TODO make multiple objects instead of one
    private _image: HTMLImageElement;
    private _positionX: number;
    private _positionY: number;
    private speed: number;
    private _points: number;

    public get image() : HTMLImageElement {
        return this._image
    }
    
    public get positionX() : number {
        return this._positionX
    }
    
    public get positionY() : number {
        return this._positionY
    }
    
    public get points() : number {
        return this._points
    }

    // create initial trophy on position
    constructor(canvasCenter: number, trophy: TrophyType) {

        this._points = trophy.score

        // create trophy
        this._image = this.loadNewImage(`assets/img/objects/${trophy.image}`);
        this._positionX = canvasCenter;
        this._positionY = Game.TrophyBeginHeight;
        this.speed = Game.TrophySpeed;
    }

    // check if trophy collided with canvas
    public canvasCollisionDetection(canvasHeight: number, leftLane: number, middleLane: number, rightLane: number) {
        if (this._positionY + this._image.height > canvasHeight + this._image.height) {
            // Create a new trophy in a random lane
            this.createNew(leftLane, middleLane, rightLane);
        }
    }
    
    /**
     * move the trophy down based on gamespeed
     */
    public move() {
        this._positionY += this.speed;
    }

    /**
     * create a new trophy
     * @param leftLane Location of the left lane
     * @param middleLane Location of the middle lane
     * @param rightLane Location of the right lane
     */
    public createNew(leftLane: number, middleLane: number, rightLane: number) {
        let random = this.randomInteger(1, 3);
        if (random === 1) {
            this._positionX = leftLane;
        }
        if (random === 2) {
            this._positionX = middleLane;
        }
        if (random === 3) {
            this._positionX = rightLane;
        }
        random = this.randomInteger(0, Game.trophyArray.length-1);

        this._points = Game.trophyArray[random].score
        this._image = this.loadNewImage(`assets/img/objects/${Game.trophyArray[random].image}`);
        this._positionY = Game.TrophyBeginHeight;
        this.speed = Game.TrophySpeed;
    }

    /**
     * draw the trophy to the screen
     * @param ctx canvas 2d context
     */
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this._image, this._positionX - this._image.width / 2, this._positionY);
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