class Game {

    /**
     * @internal Holds the canvas HTML element where this game should draw on. 
     * This variable knows the screen's size.
     * 
     * @see [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
     */
    private readonly canvas: HTMLCanvasElement;
    
    
    /**
     * @internal attribute that holds the RenderContext to draw on. This will
     * be used in the `draw()` method.
     * 
     * @see [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
     */
    private readonly ctx: CanvasRenderingContext2D;

    // The game screen components
    private title: TextString;
    private word: TextString;

    // The hangman parts
    private base: Rectangle;
    // TODO declare the other parts of the hangman
    private verticalPole: Line;
    private horizantalPole: Line;
    private verticalString: Line;
    private head: Ellipse;
    private body: Line;
    private leftHand: Line;
    private rightHand: Line;
    private leftLeg: Line;
    private rightLeg: Line;
    /**
     * Construct a new Game.
     * 
     * @param {HTMLCanvasElement} canvasId 
     */
    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        // Resize the canvas to fit the entire window
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Set the context of the canvas
        this.ctx = this.canvas.getContext('2d');

        // Initialize the game items
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;

        this.title = new TextString(cx, 70, "Hangman, the game");
        this.word = new TextString(cx, 220, "_ _ _ _ _ _ _ _");

        // The base of the hangman
        this.base = new Rectangle(cx - 300, cy * 1.75, 600, 50);
        this.base.fillStyle = "brown";
        // TODO create the other parts of the hangman
        // line == x1 y1 - begin -- x2 y2 - end
        this.verticalPole = new Line(cx + 250, cy * 1.75, cx + 250, cy / 1.50)
        this.horizantalPole = new Line(cx + 250, cy / 1.50, cx, cy / 1.50)
        this.verticalString = new Line(cx, cy / 1.50, cx, cy / 1.25)
        this.head = new Ellipse(cx, cy / 1.15 , 40)
        this.body = new Line(cx, cy / 1.05, cx, cy * 1.25)
        this.leftHand = new Line(cx, cy / 1.05, cx - 50, cy * 1.1)
        this.rightHand = new Line(cx, cy / 1.05, cx + 50, cy * 1.1)
        this.leftLeg = new Line(cx, cy * 1.25, cx - 50, cy * 1.40)
        this.rightLeg = new Line(cx, cy * 1.25, cx + 50, cy * 1.40)

        // Draw the canvas
        this.drawCanvas();

        // Attach an eventlistener to the keyUp event
        window.addEventListener("keypress", this.keyPress);
    }


    /**
     * (Re)draws the canvas.
     */
    private drawCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.title.drawText(this.ctx);
        this.word.drawText(this.ctx);
        // Draw the hangman
        this.base.drawRectangle(this.ctx);
        // TODO draw the other parts of the hangman
        this.verticalPole.drawLine(this.ctx)
        this.horizantalPole.drawLine(this.ctx)
        this.verticalString.drawLine(this.ctx)
        this.head.drawCircle(this.ctx)
        this.body.drawLine(this.ctx)
        this.leftHand.drawLine(this.ctx)
        this.rightHand.drawLine(this.ctx)
        this.leftLeg.drawLine(this.ctx)
        this.rightLeg.drawLine(this.ctx)
    }

    /**
     * @internal Arrow method that catches keyup events
     * WARNING: DO NOT USE OR REMOVE THIS METHOD
     */
    private keyPress = (ev: KeyboardEvent) => {
        // TODO handle key pressed events
        console.log(`Key ${ev.key} has been pressed`);
    }


}

// DO NOT CHANGE THE CODE BELOW!

// Declare the game object as global variable for debugging purposes
let game = null;

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', function () {
    game = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
});
