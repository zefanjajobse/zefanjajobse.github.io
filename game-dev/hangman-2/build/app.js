class Ellipse {
    constructor(x, y, radiusX, radiusY) {
        this.rotation = 0;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.clockwise = false;
        this.lineWidth = 1;
        this.strokeStyle = "white";
        this.fill = true;
        this.fillStyle = "white";
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = (radiusY ? radiusY : radiusX);
    }
    drawCircle(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radiusX, this.startAngle, this.endAngle);
        if (this.fill) {
            ctx.fillStyle = this.fillStyle;
            ctx.fill();
        }
        else {
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.strokeStyle;
            ctx.stroke();
        }
        ctx.restore();
    }
}
class Game {
    constructor(canvasId) {
        this.keyPress = (ev) => {
            if (ev.key.match(/[a-z]/) && this.gameState === 0) {
                const notUsed = this.guessedLetters.every((item) => {
                    return (ev.key !== item);
                });
                if (notUsed) {
                    this.guessedLetters.push(ev.key);
                    let containsLetter = false;
                    this.lettersInWord.forEach((element, index) => {
                        if (ev.key === element) {
                            containsLetter = true;
                            this.correctLetters[index] = element;
                        }
                    });
                    const isWinState = this.correctLetters.every((item) => {
                        return item.match(/[a-z]/i);
                    });
                    if (isWinState) {
                        this.gameState = 1;
                    }
                    if (containsLetter) {
                        this.word.text = this.correctLetters.join(" ");
                        this.drawCanvas();
                    }
                    else {
                        this.attempts -= 1;
                        this.drawCanvas();
                    }
                }
            }
        };
        this.counter = () => {
            this.time += 1;
        };
        this.resetGame = (ev) => {
            if (this.gameState !== 0) {
                this.attempts = 5;
                const selectedWord = this.selectword(this.words);
                this.lettersInWord = selectedWord.split("");
                this.correctLetters = this.lettersInWord.map(element => {
                    return "_";
                });
                this.guessedLetters = [];
                this.gameState = 0;
                this.word.text = this.correctLetters.join(" ");
                this.drawCanvas();
                this.time = 0;
                this.timer = setInterval(this.counter, 1000);
            }
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
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
        ];
        const selectedWord = this.selectword(this.words);
        this.lettersInWord = selectedWord.split("");
        this.correctLetters = this.lettersInWord.map(element => {
            return "_";
        });
        this.guessedLetters = [];
        this.gameState = 0;
        this.highScore = [];
        this.time = 0;
        this.timer = setInterval(this.counter, 1000);
        this.won = new TextString(cx, cy * 1.70, "You win, click the website to restart");
        this.lost = new TextString(cx, cy * 1.70, "You Lost, click the website to restart");
        this.title = new TextString(cx, 70, "Hangman, the game");
        this.word = new TextString(cx, 220, this.correctLetters.join(" "));
        this.base = new Rectangle(cx - 300, cy * 1.75, 600, 50);
        this.base.fillStyle = "brown";
        this.verticalPole = new Line(cx + 250, cy * 1.75, cx + 250, cy / 1.50);
        this.verticalPole.strokeStyle = "white";
        this.verticalPole.lineWidth = 5;
        this.horizantalPole = new Line(cx + 250, cy / 1.50, cx, cy / 1.50);
        this.horizantalPole.strokeStyle = "white";
        this.horizantalPole.lineWidth = 5;
        this.verticalString = new Line(cx, cy / 1.50, cx, cy / 1.25);
        this.head = new Ellipse(cx, cy / 1.15, 40);
        this.body = new Line(cx, cy / 1.05, cx, cy * 1.25);
        this.body.strokeStyle = "white";
        this.body.lineWidth = 2;
        this.leftHand = new Line(cx, cy / 1.05, cx - 50, cy * 1.1);
        this.leftHand.strokeStyle = "white";
        this.leftHand.lineWidth = 2;
        this.rightHand = new Line(cx, cy / 1.05, cx + 50, cy * 1.1);
        this.rightHand.strokeStyle = "white";
        this.rightHand.lineWidth = 2;
        this.leftLeg = new Line(cx, cy * 1.25, cx - 50, cy * 1.40);
        this.leftLeg.strokeStyle = "white";
        this.leftLeg.lineWidth = 2;
        this.rightLeg = new Line(cx, cy * 1.25, cx + 50, cy * 1.40);
        this.rightLeg.strokeStyle = "white";
        this.rightLeg.lineWidth = 2;
        this.drawCanvas();
        window.addEventListener("keypress", this.keyPress);
        window.addEventListener("click", this.resetGame);
    }
    drawCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.title.drawText(this.ctx);
        this.word.drawText(this.ctx);
        this.base.drawRectangle(this.ctx);
        if (this.attempts <= 4) {
            this.verticalPole.drawLine(this.ctx);
            this.horizantalPole.drawLine(this.ctx);
        }
        if (this.attempts <= 3) {
            this.verticalString.drawLine(this.ctx);
        }
        if (this.attempts <= 2) {
            this.head.drawCircle(this.ctx);
            this.body.drawLine(this.ctx);
        }
        if (this.attempts <= 1) {
            this.leftHand.drawLine(this.ctx);
            this.rightHand.drawLine(this.ctx);
        }
        if (this.attempts <= 0) {
            this.leftLeg.drawLine(this.ctx);
            this.rightLeg.drawLine(this.ctx);
            this.gameState = -1;
            console.log("you lost");
            this.lost.drawText(this.ctx);
        }
        if (this.gameState !== 0) {
            clearInterval(this.timer);
        }
        if (this.gameState === 1) {
            console.log("you win");
            this.won.drawText(this.ctx);
            const playerName = prompt("you Won, give a name for this game (highscore will be shown in console)", "Player");
            this.highScore.push({ time: this.timer, gameName: playerName });
            console.table(this.highScore);
        }
    }
    selectword(words) {
        return words[Math.floor(Math.random() * words.length)];
    }
}
let game = null;
window.addEventListener('load', function () {
    game = new Game(document.getElementById('canvas'));
});
class Line {
    constructor(x1, y1, x2, y2) {
        this.lineWidth = 1;
        this.strokeStyle = "white";
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    drawLine(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
        ctx.restore();
    }
}
class Rectangle {
    constructor(x, y, width, height) {
        this.lineWidth = 1;
        this.strokeStyle = "white";
        this.fill = true;
        this.fillStyle = "white";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    drawRectangle(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        if (this.fill) {
            ctx.fillStyle = this.fillStyle;
            ctx.fill();
        }
        else {
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.strokeStyle;
            ctx.stroke();
        }
        ctx.restore();
    }
}
class TextString {
    constructor(x, y, text) {
        this.font = "Edmunds";
        this.fontSize = 60;
        this.fillStyle = "white";
        this.textAlign = "center";
        this.textBaseline = "alphabetic";
        this.x = x;
        this.y = y;
        this.text = text;
    }
    drawText(ctx) {
        ctx.save();
        ctx.font = `${this.fontSize}px ${this.font}`;
        ctx.fillStyle = this.fillStyle;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}
//# sourceMappingURL=app.js.map