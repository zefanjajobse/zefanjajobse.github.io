/// <reference path="Car.ts" />
/// <reference path="KeyboardListener.ts" /> 
// compiles those files first ^^
class Game {
  // Necessary canvas attributes
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  // KeyboardListener so the player can move
  private keyboardListener: KeyboardListener;

  // the state of the game: begin, dice and end
  private gameState: string;
  private winner: string;

  private redCar: Car;
  private greenCar: Car;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth; // make the canvas the same size as the window size
    this.canvas.height = window.innerHeight;

    this.keyboardListener = new KeyboardListener();

    this.gameState = "begin";

    // declare the cars
    this.redCar = new Car("The Red Barron", window.innerWidth/9, window.innerHeight/9, "red")

    this.greenCar = new Car("The green guy", window.innerWidth/9, window.innerHeight/1.5, "green")

    this.loop();
  }

  /**
   * Function to give a number between 1 and 6
   * @returns {number} number - number between 1 and 6
   */
  private rollDice(): number {
    return this.randomNumber(1, 6);
  }

  /**
   * Method for the Game Loop
   * Based on the game state some actions have to be executed
   */
  private loop = () => { // loop needs arrow notation for requestAnimationFrame
    this.draw();
    requestAnimationFrame(this.loop);
  };

  /**
   * Function to draw all the cars on the canvas
   */
  private draw() {
    // clear the screen before showing the next state
    this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    // write the (still static) cars to the canvas with the gamename
    this.writeTextToCanvas("Formula 1", 50, window.innerWidth/2, 50)
    this.redCar.draw(this.ctx);
    this.greenCar.draw(this.ctx)
    // show different text based on the gameState
    if (this.gameState == "begin") {
      // if R is pressed, show next gameState
      this.writeTextToCanvas("Press 'R' to roll the dice", 50, window.innerWidth/2, window.innerHeight-20)
      if (this.keyboardListener.isKeyDown(82)) { //R
        this.redCar.distance = this.rollDice()
        this.greenCar.distance = this.rollDice()
        // check next keypress if distance is the same
        if (this.redCar.distance !== this.greenCar.distance) {
          this.gameState = "dice"
        }
      }
    } else if (this.gameState === "dice") {
      if (this.keyboardListener.isKeyDown(38)) { //up
        this.gameState = "rolling" 
      } else if (this.keyboardListener.isKeyDown(40)) {
        this.gameState = "backwards"
      }
    } else if (this.gameState === "rolling") {
      this.greenCar.xPosition += this.greenCar.distance
      this.redCar.xPosition += this.redCar.distance
      // check who won
      if (this.greenCar.xPosition >= window.innerWidth-200) {
        this.winner = this.greenCar.name
        this.gameState = "end"
      } else if (this.redCar.xPosition >= window.innerWidth-200) {
        this.winner = this.redCar.name
        this.gameState = "end"
      }
      if (!this.keyboardListener.isKeyDown(38)) { //up
        this.gameState = "dice" 
      }
    } else if (this.gameState === "backwards") {
      this.greenCar.xPosition -= this.greenCar.distance
      this.redCar.xPosition -= this.redCar.distance
      // check who won
      if (!this.keyboardListener.isKeyDown(40)) { //up
        this.gameState = "dice" 
      }
    } else if (this.gameState === "end") {
      // show the winner
      this.writeTextToCanvas(`${this.winner} won`, 50, window.innerWidth/2, window.innerHeight-20)
      // reset the game
      if (this.keyboardListener.isKeyDown(32)) { //SPACE
        this.gameState = "begin"
        // reset car if game is reset
        this.redCar.xPosition = window.innerWidth/9
        this.greenCar.xPosition = window.innerWidth/9
      }
    }
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
