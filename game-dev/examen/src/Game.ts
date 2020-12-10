class Game {
    // game starting values
    public static readonly PlayerSpeed: number = 15;
    public static readonly PlayerStartingRadius: number = 10;

    public static readonly TotalAmountOfRockets: number = 10;
    public static readonly ScoreForHittingRocket: number = 0;

    public static readonly ScoreForHittingPowerUp: number = 10;
    public static readonly ScoreNeededForPowerUp: number = 500;

    public static readonly MaxXPosSpawnRocketFromCanvasEdge: number = 200;
    public static readonly MaxYPosSpawnRocketFromCanvasEdge: number = 200;

    public static readonly YCordinateScore: number = 40;
    public static readonly ScoreFontSize: number = 40;

    private canvas: HTMLCanvasElement;
    private scoringItems: ScoringItem[] = [];
    private player: Player;
    private score: number;
    private ctx: CanvasRenderingContext2D;

    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");

        // add rockets, half from the top - half from the side.
        for (let index = 0; index < Game.TotalAmountOfRockets; index++) {
            if (index % 2 == 0) {
                this.scoringItems.push(this.factory("Rocket", "leftToRight"));
                console.log("leftToRight");
            } else {
                this.scoringItems.push(this.factory("Rocket", "topToBottom"));
            }
        }
        console.log(this.scoringItems);

        // place the player in the middle of the canvas
        this.player = new Player("Me", this.canvas.width / 2, this.canvas.height / 2, 
            Game.PlayerSpeed, Game.PlayerStartingRadius);
        console.log(this.player);

        this.score = 0;
        this.loop();
    }
    /**
     * Method for the Game Loop
     */
    private loop = () => {
        this.score++;
        // draw the items to the screen
        this.draw();

        // move the rockets and move then back to 0 position if out of canvas
        this.scoringItems.forEach((scoringItem) => {
            scoringItem.move()
            scoringItem.outOfCanvas(this.canvas.width, this.canvas.height)
        });

        // create a powerup if a you hit a certain amount of points
        if (this.score % Game.ScoreNeededForPowerUp === 0) {
            this.scoringItems.push(this.factory("Powerup", "powerup"));
        }

        // check if a player collides with a rocket and check keyboard input to move the player
        this.score += this.player.collidesWithScoringItem(this.scoringItems);
        this.player.move()

        requestAnimationFrame(this.loop);
    };

    /**
     * Method to create a ScoringItem object
     * @param {string} name - name of the ScoringItem
     * @param {string} type - type of the ScoringItem
     * @return ScoringItem - returns a ScoringItem object
     *
     * The ScoringItem object has the following attributes:
     * - name of the ScoringItem object
     * - xPos: x position on the canvas
     * - yPos: y position on the canvas
     * - type: type of the ScoringItem. The type will be used to determine left-to-right or top-to-bottom movement
     * - speed: speed of the ScoringItem
     * - image: an HTMLimageElement
     */
    private factory(name: string, type: string): ScoringItem {
        let xPosition = Game.randomNumber(0, this.canvas.width - Game.MaxXPosSpawnRocketFromCanvasEdge);
        let yPosition = Game.randomNumber(0, this.canvas.height - Game.MaxYPosSpawnRocketFromCanvasEdge);
        let image: HTMLImageElement;

        if (type == "leftToRight") {
            xPosition = 0;
            image = this.loadNewImage("./assets/rocket-horizontal.png");
        } else if (type == "topToBottom") {
            yPosition = 0;
            image = this.loadNewImage("./assets/rocket-vertical.png");
        } else {
            image = this.loadNewImage("./assets/face_on_plus_health.png");
        }

        if (name == "Rocket") {
            return new Rocket(name, xPosition, yPosition, type, Game.randomNumber(0, 15),
                image, Game.ScoreForHittingRocket)
        } else {
            return new PowerUp(name, xPosition, yPosition, Game.randomNumber(0, 15), image, Game.ScoreForHittingPowerUp)
        }
    }

    /**
     * Draws all the necessary elements to the canvas
     */
    private draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        // when there are elements in the rocket array
        if (this.scoringItems.length != 0) {
            // clear the canvas

            // draw each rocket
            this.scoringItems.forEach((scoringItem) => {
                scoringItem.draw(this.ctx)
            });

            //write the current score
            Game.writeTextToCanvas(
                this.ctx,
                `Score is: ${this.score}`,
                Game.ScoreFontSize,
                this.canvas.width / 2,
                Game.YCordinateScore
            );
        }
    }

    /**
     * Loads an image so it doesn't flicker
     * @param {HTMLImageElement} source
     * @return HTMLImageElement - returns an image
     */
    private loadNewImage(source: string): HTMLImageElement {
        const img = new Image();
        img.src = source;
        return img;
    }

    /**
     * Writes text to the canvas
     * @param {string} text - Text to write
     * @param {number} fontSize - Font size in pixels
     * @param {number} xCoordinate - Horizontal coordinate in pixels
     * @param {number} yCoordinate - Vertical coordinate in pixels
     * @param {string} alignment - Where to align the text
     * @param {string} color - The color of the text
     */
    public static writeTextToCanvas(
        ctx: CanvasRenderingContext2D,
        text: string,
        fontSize: number = 20,
        xCoordinate: number,
        yCoordinate: number,
        alignment: CanvasTextAlign = "center",
        color: string = "red"
    ) {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }

    /**
     * Renders a random number between min and max
     * @param {number} min - minimum number
     * @param {number} max - maximum number
     */
    public static randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}