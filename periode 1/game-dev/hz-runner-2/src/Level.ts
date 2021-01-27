/// <reference path="View.ts"/>

class Level extends View {    
    private scoringObject: ScoringObject[];
    private frameIndex: number;
    private spawnRate: number = 100;
    private targetScore: number = 20;
    private canvas: HTMLCanvasElement;
    private levelNumber: number;

    private lanes: number[] = []
    // The player on the canvas
    private player: Player;

    /**
     * create a level
     * @param canvas HTML canvas element
     * @param spawnRate how fast the items spawn
     * @param targetScore the score it needs to get to get to the next level
     * @param lanesCount the amount of lanes in this level
     */
    public constructor (levelNumber: number, canvas: HTMLCanvasElement, spawnRate: number, targetScore: number, lanesCount: number) {
        // connection with View:
        super();
        this.canvas = canvas
        this.levelNumber = levelNumber

        this.initializeLanes(lanesCount)

        // save spawnrate/targetscore given
        this.spawnRate = spawnRate;
        this.targetScore = targetScore;
        
        // Set the player at the center
        this.player = new Player(canvas, this.lanes);

        // reset frameindex and objects on screen on next level
        this.frameIndex = 0;
        this.scoringObject = []

        // create new object
        this.createRandomScoringObject();
    }

    /**
     * add to score if it hits player otherwise just remove if it hits the bottom
     */
    private collisionDetection(): void {
        this.scoringObject.forEach((element, index) => {
            if (element !== null) {
                element.move();

                if (this.player.collidesWith(element)) {
                    this._score += element.getPoints();
                    this.scoringObject.splice(index, 1);
                } else if (element.collidesWithCanvasBottom()) {
                    this.scoringObject.splice(index, 1);
                }
            }
        });
    }

    /**
     * create the lanes in array based on the lanecount
     * @param laneCount amount of lanes to create
     */
    private initializeLanes(laneCount: number) {
        this.lanes = []
        for (let i: number = 0; i < laneCount; i++) {
            this.lanes.push(this.canvas.width / (laneCount + 1) * (i + 1))
        }
    }

    /**
     * moves the game to the next step
     * @param canvas the html canvas element
     */
    public update() {
        this.frameIndex += 1
        this.player.move(this.lanes);

        // if 100 frames past, write new element to screen and reset timer
        if (this.frameIndex % this.spawnRate == 0) {
            this.createRandomScoringObject()
        }

        // check for collisions and add score
        this.collisionDetection();
    }

    /**
     * check if game can progress to next level
     */
    public isComplete(): Boolean {
        return this.score > this.targetScore;
    }

    /**
     * Create a random scoring object and clear the other scoring objects by setting them to `null`.
     */
    private createRandomScoringObject(): void {

        const random = this.randomInteger(1, 4);

        if (random === 1) {
            this.scoringObject.push(new GoldTrophy(this.canvas, this.lanes))
        }

        if (random === 2) {
            this.scoringObject.push(new SilverTrophy(this.canvas, this.lanes))
        }

        if (random === 3) {
            this.scoringObject.push(new RedCross(this.canvas, this.lanes))
        }

        if (random === 4) {
            this.scoringObject.push(new LightningBolt(this.canvas, this.lanes))
        }
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

    /**
     * Render the items on the canvas
     */
    public draw(canvas: HTMLCanvasElement, game: Game, totalScore: number): void {
        // Get the canvas rendering context
        const ctx = canvas.getContext('2d');
        // Clear the entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // render the controls to the top of the screen
        game.writeTextToCanvas(ctx, `there are ${this.lanes.length} lanes, press the number keys 1 to ${this.lanes.length} to move`, canvas.width / 2, 30, 14);

        // write the score to the canvas
        game.writeTextToCanvas(ctx, `Level: ${this.levelNumber} Score: ${this.score}`, canvas.width / 2, 60, 20)

        this.player.draw(ctx);

        if (this.scoringObject !== null) {
            this.scoringObject.forEach(element => {
                element.draw(ctx);
            });   
        }
    }
}
