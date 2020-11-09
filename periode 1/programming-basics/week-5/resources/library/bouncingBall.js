const balls = []; // array containing multiple balls
const canvas = document.getElementById("canvas"); // reference to the drawing canvas in HMLT
const ctx = canvas.getContext("2d"); // the context of the drawing canvas

loop(); // infinite loop for 'moving' the balls

/**
 * Function to create a new Ball
 * @param {*} radius - radius of the ball
 * @param {*} colour - filling colour of the ball
 * @param {*} xVelocity - speed of the ball on the x-axis
 * @param {*} yVelocity - speed of the ball on the y-axis
 */
function createNewBall(radius, colour, xVelocity, yVelocity) {
  let ball = {
    xPos: randomNumber(0, canvas.width),
    yPos: randomNumber(0, canvas.height),
    radius: radius,
    colour: colour,
    xVel: xVelocity,
    yVel: yVelocity,
  };
  // push the ball into the array
  balls.push(ball);
}

/**
 * function to draw a circle (ball) on the canvas
 */
function draw() {
  const sAngle = 0;
  const eAngle = 2 * Math.PI;

  // draw each ball from the ball array
  balls.forEach((element) => {
    ctx.fillStyle = element.colour;
    ctx.beginPath();
    ctx.arc(
      element.xPos,
      element.yPos,
      element.radius,
      sAngle,
      eAngle
    );
    ctx.closePath();
    ctx.fill();
  });
}

/**
 * Function to loop infinetely through a sequence of actions
 */
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  moveBall();
  requestAnimationFrame(loop);
}

/**
 * Function to move the ball and let it 'bounche' to the boundaries of the canvas
 */
function moveBall() {
  balls.forEach((element) => {
    if (
      element.xPos + element.radius > canvas.width ||
      element.xPos - element.radius < 0
    ) {
      element.xVel = -element.xVel;
    }
    if (
      element.yPos + element.radius > canvas.height ||
      element.yPos - element.radius < 0
    ) {
      element.yVel = -element.yVel;
    }

    element.xPos += element.xVel;
    element.yPos += element.yVel;
  });
}

/**
 * Renders a random number between min and max
 * @param {number} min - minimal time
 * @param {number} max - maximal time
 */
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
