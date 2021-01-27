/// <reference path="View.ts"/>

class GameComplete extends View {
    
    /**
     * no need to update physics when gameOver
     * @param canvas 
     */
    public update(canvas: HTMLCanvasElement) {
    }
    
    /**
     * isComplete is ment for next level, there is no next level after GameOver
     */
    public isComplete(): Boolean {
        return false
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
        game.writeTextToCanvas(ctx, "No more levels!", canvas.width / 2, 30, 20);

        // write the score to the canvas
        game.writeTextToCanvas(ctx, `Your highscore: ${totalScore}`, canvas.width / 2, 60, 20)
    }
}
