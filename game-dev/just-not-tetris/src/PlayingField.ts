class PlayingField {
    private size: Vector = new Vector(308, 618);
    private position: Vector;

    private availableBlocks: string[] = ["I", "L", "R", "S", "T"];
    
    // field with the blocklocations (table (array in a array))
    private leftOverBlocks: Block[] = [];
    private amountOfBlocks: number;

    private movingBlock: Block;
    
    private delay: number = 250;

    private blocksInPlay: Block[] = [];

    constructor(game: Game, amountOfBlocks: number) {
        this.amountOfBlocks = amountOfBlocks
        for (let i = 0; i < this.amountOfBlocks; i++) {
            this.leftOverBlocks.push(this.createNewMovingBlock(game))
        }
        this.movingBlock = this.leftOverBlocks.shift()
    }

    /**
     * draw the blocks to the screen
     * @param ctx Canvas rendering context
     * @param backgroundTopLeftX X cordinate of the place a block can be
     * @param backgroundTopLeftY Y cordinate of the place a block can be
     */
    public draw(ctx: CanvasRenderingContext2D, backgroundTopLeftX: number, backgroundTopLeftY: number) {
        this.blocksInPlay.forEach(block => {
            block.draw(ctx)
        });
        this.position = new Vector(
            12 + backgroundTopLeftX + this.size.x / 2,
            68 + backgroundTopLeftY + this.size.y / 2);
        this.movingBlock.updatePlayingField(this.position, this.size)
        this.movingBlock.draw(ctx);
    }
    
    /**
     * get a random block from the availableBlocks array
     */
    private getRandomBlock(): string {
        return this.availableBlocks[Game.randomInteger(0, this.availableBlocks.length - 1)];
    }

    /**
     * gets a random movingblock as return
     * @param game the Game object to get the images
     */
    private createNewMovingBlock(game: Game): Block {
        const randomBlock: string = this.getRandomBlock();
        switch (randomBlock) {
            case "I" :
                return new IBlock(game.repo.getImage(randomBlock));
            case "L" :
                return new LBlock(game.repo.getImage(randomBlock));
            case "R" :
                return new RBlock(game.repo.getImage(randomBlock));
            case "S" :
                return new SBlock(game.repo.getImage(randomBlock));
            //case "T" :
            default:
                return new TBlock(game.repo.getImage(randomBlock));
        }
    }

    /**
     * move the player down by the size of a block
     * @param canvas canvas HTML element to place the new elements
     * @param lastMoveDown when did it perform the last move-down action
     */
    public moveDown(canvas: HTMLCanvasElement, lastMoveDown: number) {
        if (this.movingBlock.position !== null && performance.now() - lastMoveDown > this.delay) {
            lastMoveDown = performance.now();
            this.movingBlock.move(canvas);

            const bottomField = this.position.y + this.size.y / 2;
            const bottomBlock = this.movingBlock.position.y + (this.movingBlock.blockHeight / 2) * Tetris.blockSize;
            if (bottomField === bottomBlock) {
                this.blocksInPlay.push(this.movingBlock);
                this.movingBlock = this.leftOverBlocks.shift()
            }
        }
        return lastMoveDown
    }

    /**
     * check if there are more blocks left
     */
    public stillMoreBlocks(): Boolean {
        return !(this.leftOverBlocks.length == 0)
    }

    /**
     * ask movingblock to move the player
     */
    public moveLeft() {
        this.movingBlock.moveLeft()
    }
    public moveRight() {
        this.movingBlock.moveRight()
    }
}