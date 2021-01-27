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
    
    // declare string of words
    private words: string[];
    // declare letters in word and guessed letter lists
    private lettersInWord: string[];
    private correctLetters: string[];
    private attempts: number;
    private gameState: number;
    private guessedLetters: string[];

    // declare won/lost strings for later
    private won: TextString;
    private lost: TextString;

    private highScore: object[];
    private timer: number;
    private time: number;
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

        // list of words that can be used
        this.attempts = 5;
        this.words = [
            "wish",
            "subsequent",
            "unbiased",
            "fragile",
            "son",
            "exciting",
            "science",
            "expand",
            "knit",
            "hook",
            "beds",
            "giddy",
        ]
        // select a random word from that list
        const selectedWord:string = this.selectword(this.words);
        
        // show "_" based on the amount of letters
        this.lettersInWord = selectedWord.split("");
        this.correctLetters = this.lettersInWord.map(element => {
          return "_"
        });
        this.guessedLetters = [];
        this.gameState = 0;

        // setup highscore
        this.highScore = [];
        this.time = 0;
        this.timer = setInterval(this.counter, 1000);
        
        // declare won/lost values
        this.won = new TextString(cx, cy * 1.70, "You win, click the website to restart");
        this.lost = new TextString(cx, cy * 1.70, "You Lost, click the website to restart");

        // show amount of letters and title
        this.title = new TextString(cx, 70, "Hangman, the game");
        this.word = new TextString(cx, 220, this.correctLetters.join(" "));

        // The base of the hangman
        this.base = new Rectangle(cx - 300, cy * 1.75, 600, 50);
        this.base.fillStyle = "brown";
        // the pole that hangs the hangman
        this.verticalPole = new Line(cx + 250, cy * 1.75, cx + 250, cy / 1.50)
        this.verticalPole.strokeStyle = "white";
        this.verticalPole.lineWidth = 5;

        this.horizantalPole = new Line(cx + 250, cy / 1.50, cx, cy / 1.50)
        this.horizantalPole.strokeStyle = "white";
        this.horizantalPole.lineWidth = 5;
        // the rope
        this.verticalString = new Line(cx, cy / 1.50, cx, cy / 1.25)
        
        // the hangman itself
        this.head = new Ellipse(cx, cy / 1.15 , 40)

        this.body = new Line(cx, cy / 1.05, cx, cy * 1.25)
        this.body.strokeStyle = "white";
        this.body.lineWidth = 2;

        this.leftHand = new Line(cx, cy / 1.05, cx - 50, cy * 1.1)
        this.leftHand.strokeStyle = "white";
        this.leftHand.lineWidth = 2;

        this.rightHand = new Line(cx, cy / 1.05, cx + 50, cy * 1.1)
        this.rightHand.strokeStyle = "white";
        this.rightHand.lineWidth = 2;

        this.leftLeg = new Line(cx, cy * 1.25, cx - 50, cy * 1.40)
        this.leftLeg.strokeStyle = "white";
        this.leftLeg.lineWidth = 2;
        
        this.rightLeg = new Line(cx, cy * 1.25, cx + 50, cy * 1.40)
        this.rightLeg.strokeStyle = "white";
        this.rightLeg.lineWidth = 2;
        
        // Draw the canvas
        this.drawCanvas();

        // Attach an eventlistener to the keyUp event
        window.addEventListener("keypress", this.keyPress);
        
        // use this if game is done for restart
        window.addEventListener("click", this.resetGame);
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
        // draw the rest based on the amount of attempts left
        if (this.attempts <= 4) {
            this.verticalPole.drawLine(this.ctx)
            this.horizantalPole.drawLine(this.ctx)
        }
        if (this.attempts <= 3) {
            this.verticalString.drawLine(this.ctx)
        }
        if (this.attempts <= 2) {
            this.head.drawCircle(this.ctx)
            this.body.drawLine(this.ctx)
        }
        if (this.attempts <= 1) {
            this.leftHand.drawLine(this.ctx)
            this.rightHand.drawLine(this.ctx)
        }
        if (this.attempts <= 0) {
            this.leftLeg.drawLine(this.ctx)
            this.rightLeg.drawLine(this.ctx)
            this.gameState = -1
            console.log("you lost")
            this.lost.drawText(this.ctx)
        }

        // if game is done
        if (this.gameState !== 0) {
            clearInterval(this.timer)
        }

        // if gameState is set to 1 by keypress' winstate check
        if (this.gameState === 1) {
            console.log("you win")
            this.won.drawText(this.ctx)
            const playerName:string = prompt("you Won, give a name for this game (highscore will be shown in console)", "Player")
            this.highScore.push({time: this.timer, gameName:playerName})
            // print highscore to console
            console.table(this.highScore)
        }
    }

    /**
     * returns a random word from the list
     * @param words wordList
     */
    private selectword(words: string[]) {
        return words[Math.floor(Math.random() * words.length)];
    }

    /**
     * @internal Arrow method that catches keyup events
     */
    private keyPress = (ev: KeyboardEvent) => {
        // dont react to numbers etc
        if (ev.key.match(/[a-z]/) && this.gameState === 0) {
            // check if letter hasn't been used, otherwise do nothing
            const notUsed:Boolean = this.guessedLetters.every((item) => {
                return (ev.key !== item)
              })
            if (notUsed) {
                // add letter to guessedletter if used
                this.guessedLetters.push(ev.key)
                // check if letter is in word that needs to be guessed
                let containsLetter:Boolean = false
                this.lettersInWord.forEach((element, index) => {
                    if (ev.key === element) {
                        containsLetter = true
                        this.correctLetters[index] = element
                    }
                })
                // show you win when every letter is there
                const isWinState:Boolean = this.correctLetters.every((item) => {
                  // /[(bewtween a and z)]/(not case sensitive)
                    return item.match(/[a-z]/i)
                })
                if(isWinState) {
                    this.gameState = 1
                }

                // do something if correct/incorrect
                if (containsLetter) {
                    // draw the letter to canvas if correct
                    this.word.text = this.correctLetters.join(" ")
                    this.drawCanvas();
                } else {
                    // lower attempts if incorrect
                    this.attempts -= 1;
                    this.drawCanvas();
                }
            }
        }
    }

    /**
     * increments the timer by one every second
     */
    private counter = () => {
        this.time += 1;
    }

    /**
     * reset game on mouseclick
     * @param ev clickEvent - only runs when gameState !== 0 (not won/lost)
     */
    private resetGame = (ev: MouseEvent) => {
        if (this.gameState !== 0) {
            // reset values
            this.attempts = 5;
            const selectedWord:string = this.selectword(this.words);
            this.lettersInWord = selectedWord.split("");
            this.correctLetters = this.lettersInWord.map(element => {
                return "_"
            });
            this.guessedLetters = [];
            this.gameState = 0;
            this.word.text = this.correctLetters.join(" ")

            // draw to canvas
            this.drawCanvas();

            // reset timer
            this.time = 0
            this.timer = setInterval(this.counter, 1000);
        }
    }

}

// DO NOT CHANGE THE CODE BELOW!

// Declare the game object as global variable for debugging purposes
let game = null;

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', function () {
    game = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
});
