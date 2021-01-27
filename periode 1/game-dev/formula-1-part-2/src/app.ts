/// <reference path="Car.ts" />
/// <reference path="KeyboardListener.ts" />

class Game {
  // Necessary canvas attributes
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  private cheatNotUsed: boolean

  // KeyboardListener so the player can move
  private keyboardListener: KeyboardListener;

  // the state of the game: begin, dice and end
  private gameState: GameState;
  private winner: string;

  // Car instances, one for each player
  private car1: Car;
  private car2: Car;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.keyboardListener = new KeyboardListener();

    this.car1 = new Car("Bullet", "red", 100, 200);
    this.car2 = new Car("Greek Arrow", "green", 100, 500);
    console.log(this.car1);

    this.cheatNotUsed = true
    this.gameState = GameState.Begin;

    this.loop();
  }

  /**
   * Function to give a number between 1 and 6
   * @returns {number} number - number between 1 and 6
   */
  private rollDice(): number {
    return this.randomNumber(9, 15);
  }

  /**
   * Method for the Game Loop
   * Based on the game state some actions have to be executed
   */
  private loop = () => {
    this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    if (this.gameState == GameState.Begin) {
      this.beginState();
    } else if (this.gameState == GameState.Dice) {
      this.diceState();
    } else if (this.gameState == GameState.Animate) {
      this.animate()
    } else if (this.gameState == GameState.End) {
      this.endState();
    }
    this.draw();
    requestAnimationFrame(this.loop);
  };

  /**
   * show the end result of the game
   */
  private endState() {
    // Calculate the winner
    if (this.car1.distance > this.car2.distance) {
      this.winner = this.car1.name;
    } else if (this.car1.distance < this.car2.distance) {
      this.winner = this.car2.name;
    } else {
      this.winner = "undecided";
    }
    // show the max speed the car has reached + name
    this.writeTextToCanvas(
      `Player 1: ${this.car1.distance}`,
      40,
      this.canvas.width / 2,
      200,
      "center",
      "white"
    );
    this.writeTextToCanvas(
      `Player 2: ${this.car2.distance}`,
      40,
      this.canvas.width / 2,
      500,
      "center",
      "white"
    );
    // show message if one cheated with the N/B buttons
    if (this.car1.getUpgrade() !== 0) {
      this.writeTextToCanvas(
        `${this.car1.name} cheated!`,
        60,
        this.canvas.width / 2,
        this.canvas.height - 50,
        "center",
        "red"
      );

    } else if (this.car2.getUpgrade() !== 0) {
      this.writeTextToCanvas(
        `${this.car2.name} cheated!`,
        60,
        this.canvas.width / 2,
        this.canvas.height - 50,
        "center",
        "red"
      );
      // else show that one won
    } else {
      this.writeTextToCanvas(
        `The winner is ${this.winner}`,
        60,
        this.canvas.width / 2,
        this.canvas.height - 50,
        "center",
        "red"
      );
    }

    // restart game on spacebar
    if (this.keyboardListener.isKeyDown(32)) {
      this.gameState = GameState.Begin
      this.cheatNotUsed = true
      this.car1.setUpgrade(0)
      this.car2.setUpgrade(0)
      this.car1.xPosition = 100
      this.car2.xPosition = 100
    }
  }

  /**
   * move the car forwards until over the finish line
   */
  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.car1.drive()
    this.car2.drive()
    this.writeTextToCanvas(
      `Player 1:`,
      40,
      this.canvas.width / 2,
      200,
      "center",
      "white"
    );
    this.writeTextToCanvas(
      `Player 2:`,
      40,
      this.canvas.width / 2,
      500,
      "center",
      "white"
    );
    // check if one has won and add button to cheat
    if (this.car1.xPostition >= this.canvas.width-230 || this.car2.xPostition >= this.canvas.width-230) { // -230 because 200 is the size of the image, and the draw starts at the left corner
      this.gameState = GameState.End
    } else if (this.keyboardListener.isKeyDown(66) && this.cheatNotUsed) { //B
      this.car1.setUpgrade(this.rollDice())
      // dont allow more than one keypress
      this.cheatNotUsed = false
    } else if (this.keyboardListener.isKeyDown(78) && this.cheatNotUsed) { //N
      this.car2.setUpgrade(this.rollDice())
      this.cheatNotUsed = false
    }
  }

  /**
   * roll the dice to get the speed of the cars
   */
  private diceState() {
    this.car1.distance = this.rollDice();
    this.car2.distance = this.rollDice();
    this.gameState = GameState.Animate;
  }

  /**
   * wait for user input and show first message
   */
  private beginState() {
    this.writeTextToCanvas(
      "Press R to Roll the dice",
      30,
      this.canvas.width / 2,
      this.canvas.height - 50
    );
    if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_R)) {
      this.gameState = GameState.Dice;
    }
  }

  /**
   * Function to draw all the cars on the canvas, the finish line and the name of the game.
   */
  private draw() {
    this.writeTextToCanvas(
      "Formula 1",
      40,
      this.canvas.width / 2,
      50,
      "center",
      "white"
    );
    this.finishLine()
    this.car1.draw(this.ctx);
    this.car2.draw(this.ctx);
  }

  /**
   * draw the finish line
   */
  private finishLine() {
    this.ctx.beginPath()
    this.ctx.setLineDash([30,30])
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 15;
    this.ctx.moveTo(this.canvas.width-250, 0)
    this.ctx.lineTo(this.canvas.width-250, this.canvas.height)
    this.ctx.stroke()
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
  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = "center",
    color: string = "red"
  ) {
    this.ctx.font = `${fontSize}px Minecraft`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }
  /**
   * Renders a random number between min and max
   * @param {number} min - minimal time
   * @param {number} max - maximal time
   */
  public randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}

/**
 * Start the game whenever the entire DOM is loaded
 */
let init = () =>
  new Game(document.getElementById("canvas") as HTMLCanvasElement);

// Add EventListener to load the game whenever the browser is ready
window.addEventListener("load", init);
