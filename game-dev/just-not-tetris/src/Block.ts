/// <reference path="framework/GameItem.ts"/>

abstract class Block extends GameItem {

    private playingFieldPosition: Vector;
    private playingFieldSize: Vector;
    private _blockHeight: number;
    private _blockWidth: number;

    constructor(image: HTMLImageElement, blockHeight: number, blockWidth: number) {
        super(image, null, new Vector(0, -Tetris.blockSize), 0, 0);
        this._blockHeight = blockHeight;
        this._blockWidth = blockWidth;
    }

    public get blockHeight(): number {
        return this._blockHeight;
    }

    public get blockWidth(): number {
        return this._blockWidth;
    }

    /**
     * move the player 1 blocksize to the left if not against sidewall
     */
    public moveLeft() {
        const leftSidePlayingField = this.playingFieldPosition.x - this.playingFieldSize.x / 2;
        const leftSideBlock = this.position.x - (this.blockWidth / 2) * Tetris.blockSize;

        if (leftSideBlock - Tetris.blockSize >= leftSidePlayingField) {
            this._position = new Vector(this._position.x - Tetris.blockSize, this._position.y)
        }
    }

    /**
     * move the player 1 blocksize to the right if not against sidewall
     */
    public moveRight() {
        const rightSidePlayingField = this.playingFieldPosition.x + this.playingFieldSize.x / 2;
        const rightSideBlock = this.position.x + (this.blockWidth / 2) * Tetris.blockSize;

        console.log(rightSidePlayingField, rightSideBlock);

        if (rightSideBlock + Tetris.blockSize <= rightSidePlayingField) {
            this._position = new Vector(this._position.x + Tetris.blockSize, this._position.y)
        }
    }

    /**
     * update the location of the game elements
     * @param playingFieldPosition topleft corner of the playingfield
     * @param playingFieldSize size of the area
     */
    public updatePlayingField(playingFieldPosition: Vector, playingFieldSize: Vector) {
        this.playingFieldPosition = playingFieldPosition;
        this.playingFieldSize = playingFieldSize;
    }

    /**
     * draw the block item to the screen
     * @param ctx canvar rendering context
     */
    public draw(ctx: CanvasRenderingContext2D) {
        if (this.position === null) {
            const leftSide = this.playingFieldPosition.x - this.playingFieldSize.x / 2;
            let initialXPosition = leftSide + 3 * Tetris.blockSize;
            if (this.blockWidth % 2 !== 0) {
                initialXPosition += 22;
            }

            const bottom = this.playingFieldPosition.y + this.playingFieldSize.y / 2;
            let initialYPosition = bottom - 13 * Tetris.blockSize;
            if (this.blockHeight % 2 !== 0) {
                initialYPosition += 22;
            }

            this._position = new Vector(initialXPosition, initialYPosition);
        }
        super.draw(ctx);
    }
}
