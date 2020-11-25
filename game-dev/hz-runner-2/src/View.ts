// responsible for holding the score and is connected to the levels and gameover screens
abstract class View {

    // keeps the score of all the levels
    protected _score: number;

    public constructor() {
        // Score is zero at start - score of level
        this._score = 0;
    }

    public get score() : number {
        return this._score
    }
    
    /**
     * this is there against errors in Game, they need to be there otherwise the code says it doesnt exist. ment for levels/gameover.
     */
    public update(canvas: HTMLCanvasElement) {
    }
    public isComplete(): Boolean {
        return false
    }
    public draw(canvas: HTMLCanvasElement, game: Game, totalScore: number): void {
    }
}