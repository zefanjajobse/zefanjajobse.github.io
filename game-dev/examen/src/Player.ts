/// <reference path="GameItem.ts"/>
class Player extends GameItem {
    private radius: number;
    private keyBoardListener: KeyboardListener;

    constructor(name: string, xPosition: number, yPosition: number, speed: number, radius: number) {
        // send to main class
        super(name, xPosition, yPosition, speed)
        this.radius = radius;
        
        this.keyBoardListener = new KeyboardListener();
    }

    /**
     * Method to draw the player
     */
    public draw(ctx: CanvasRenderingContext2D) {
        //console.log(this.player);
        ctx.beginPath();
        ctx.arc(
            this._xPosition,
            this._yPosition,
            this.radius,
            0,
            Math.PI * 2,
            false
        );
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.stroke();

    }

    /**
     * check if the player pressed the arrow keys on the keyboard,
     * move the player in that direction if he did
     */
    public move() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this._xPosition -= this._speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this._xPosition += this._speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this._yPosition -= this._speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this._yPosition += this._speed;
        }
    }

    /**
     * Method to determine of the player is colliding with a scoringItem
     * and return the score within the scoringItem if it collides
     */
    public collidesWithScoringItem(scoringItems: ScoringItem[]): number {
        let score = 0;

        scoringItems.forEach((scoringItem, index) => {
            // get distances from player
            const distX = this.distanceFromPlayer(this._xPosition,
                scoringItem.xPosition, scoringItem.imageWidth);
            const distY = this.distanceFromPlayer(this._yPosition,
                scoringItem.yPosition, scoringItem.imageHeight);
            const distance = Math.sqrt(distX * distX + distY * distY);

            if (distance <= this.radius) {
                console.log("Collides with Player");
                score += scoringItem.points

                if (scoringItem.name === "Rocket") {
                    this.radius += 3;
                // remove all other items if collides with player
                } else {
                    if (this.radius > Game.PlayerStartingRadius + 3) {
                        this.radius -= 3;
                        scoringItems.splice(index, 1);
                    }
                }
            }
        });
        return score
    }

    /**
     * Get how close the scoringItem is from the player
     * @param playerPosition position of the player X or Y on canvas
     * @param scoringItemPosition location X or Y of the scoring Item
     * @param imageSize Size X or Y of the scoringItem
     */
    private distanceFromPlayer(playerPosition: number, scoringItemPosition: number, imageSize: number) {
        let test = 0
        if (playerPosition < scoringItemPosition) {
            test = scoringItemPosition;
        } else if (playerPosition > scoringItemPosition + imageSize) {
            test = scoringItemPosition + imageSize;
        }
        return playerPosition - test;
    }
}