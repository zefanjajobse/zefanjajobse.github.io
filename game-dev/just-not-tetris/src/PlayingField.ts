class PlayingField {
    private size: Vector = new Vector(308, 618);
    private position: Vector;

    private availableBlocks: string[] = ["I", "L", "R", "S", "T"];
    
    private movingBlock: Block;
    
    private delay: number = 250;

    private blocksInPlay: Block[] = [];

    constructor(game: Game) {
        this.createNewMovingBlock(game);
    }

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
    
    private getRandomBlock(): string {
        return this.availableBlocks[Game.randomInteger(0, this.availableBlocks.length - 1)];
    }

    private createNewMovingBlock(game: Game) {
        const randomBlock: string = this.getRandomBlock();
        switch (randomBlock) {
            case "I" :
                this.movingBlock = new IBlock(game.repo.getImage(randomBlock));
                break;
            case "L" :
                this.movingBlock = new LBlock(game.repo.getImage(randomBlock));
                break;
            case "R" :
                this.movingBlock = new RBlock(game.repo.getImage(randomBlock));
                break;
            case "S" :
                this.movingBlock = new SBlock(game.repo.getImage(randomBlock));
                break;
            case "T" :
                this.movingBlock = new TBlock(game.repo.getImage(randomBlock));
                break;
        }
    }

    public moveDown(canvas: HTMLCanvasElement, lastMoveDown: number, game: Game) {
        if (this.movingBlock.position !== null && performance.now() - lastMoveDown > this.delay) {
            lastMoveDown = performance.now();
            this.movingBlock.move(canvas);

            const bottomField = this.position.y + this.size.y / 2;
            const bottomBlock = this.movingBlock.position.y + (this.movingBlock.blockHeight / 2) * 44;
            if (bottomField === bottomBlock) {
                this.blocksInPlay.push(this.movingBlock);
                this.createNewMovingBlock(game);
            }
        }
        return lastMoveDown
    }

    public moveLeft() {
        this.movingBlock.moveLeft()
    }

    public moveRight() {
        this.movingBlock.moveRight()
    }
}