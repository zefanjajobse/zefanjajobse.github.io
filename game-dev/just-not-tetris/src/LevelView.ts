/// <reference path="framework/View.ts"/>

class LevelView extends View {
    private playingField: PlayingField;

    private lastMoveDown: number = performance.now();
    private lastMove: number = performance.now();

    private background: HTMLImageElement;
    private backgroundSize: Vector = new Vector(446, 700);
    private backgroundPosition: Vector;

    public init(game: Game) {
        super.init(game);
        this.background = game.repo.getImage("background");
        this.playingField = new PlayingField(game, 5)
    }

    /**
     * listen for input for left or right keypress
     * @param input keyboard input
     */
    public listen(input: Input) {
        super.listen(input);

        const timeSinceLastMove = performance.now() - this.lastMove;
        if (timeSinceLastMove > 200) {
            if (input.keyboard.isKeyDown(Input.KEY_LEFT)) {
                this.playingField.moveLeft();
                this.lastMove = performance.now();
            }
            if (input.keyboard.isKeyDown(Input.KEY_RIGHT)) {
                this.playingField.moveRight();
                this.lastMove = performance.now();
            }
        }
    }

    /**
     * draw the background image and ask to draw block
     * @param ctx canvas rendering context
     */
    public draw(ctx: CanvasRenderingContext2D) {
        this.background.width = this.backgroundSize.x;
        this.background.height = this.backgroundSize.y;
        this.backgroundPosition = new Vector(this.center.x, this.background.height / 2 + 30)

        const backgroundTopLeft: Vector = new Vector(
            this.backgroundPosition.x - this.backgroundSize.x / 2,
            this.backgroundPosition.y - this.backgroundSize.y / 2);
        super.draw(ctx);
        this.drawImage(ctx, this.background, this.backgroundPosition.x, this.backgroundPosition.y);
        this.playingField.draw(ctx, backgroundTopLeft.x, backgroundTopLeft.y);
    }

    /**
     * move the tetris block down by one blockheight
     * @param canvas canvas html element
     */
    public move(canvas: HTMLCanvasElement) {
        if (this.playingField.stillMoreBlocks()) {
            super.move(canvas);
            this.lastMoveDown = this.playingField.moveDown(canvas, this.lastMoveDown)
        } else {
            // for later
        }
    }

}