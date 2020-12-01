class Fruit {
    constructor(name, lifeSpan, xPos, yPos) {
        this._name = name;
        this._lifeSpan = lifeSpan;
        this._xPos = xPos;
        this._yPos = yPos;
    }
    get name() {
        return this._name;
    }
    get lifeSpan() {
        return this._lifeSpan;
    }
    get xPos() {
        return this._xPos;
    }
    get yPos() {
        return this._yPos;
    }
    getImageWidth() {
        return this._image.width;
    }
    getImageHeight() {
        return this._image.height;
    }
    move(canvas) {
    }
    draw(ctx) {
        ctx.drawImage(this._image, this._xPos, this._yPos);
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class Apple extends Fruit {
    constructor(name, lifeSpan, xPos, yPos, xVelocity, yVelocity) {
        super(name, lifeSpan, xPos, yPos);
        this._image = this.loadNewImage("./assets/apple-sm.png");
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }
    move(canvas) {
        if (this._yPos <= 0) {
            this.yVelocity = Math.abs(this.yVelocity);
        }
        else if (this._yPos >= canvas.height - this._image.height) {
            this.yVelocity = -Math.abs(this.yVelocity);
        }
        else if (this._xPos >= canvas.width - this._image.width) {
            this.xVelocity = -Math.abs(this.xVelocity);
        }
        else if (this._xPos <= 0) {
            this.xVelocity = Math.abs(this.xVelocity);
        }
        this._yPos += this.yVelocity;
        this._xPos += this.xVelocity;
    }
}
class Game {
    constructor(canvasId) {
        this.fruits = [];
        this.loop = () => {
            this.draw();
            this.counter++;
            for (let i = 0; i < this.fruits.length; i++) {
                if (this.counter >= this.fruits[i].lifeSpan) {
                    this.fruits.splice(i, 1);
                }
            }
            this.move();
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            this.fruits.forEach(fruit => {
                if (event.clientX >= fruit.xPos &&
                    event.clientX < fruit.xPos + fruit.getImageWidth() &&
                    event.clientY >= fruit.yPos &&
                    event.clientY <= fruit.yPos + fruit.getImageHeight()) {
                    if (fruit.name == 'kiwi') {
                        this.score++;
                    }
                    else if (fruit.name == 'apple') {
                        this.score--;
                    }
                }
            });
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        for (let index = 0; index < this.randomNumber(Game.minAmountOfKiwis, Game.maxAmountOfKiwis); index++) {
            this.fruits.push(this.fruitFactory('kiwi'));
        }
        this.fruits.push(this.fruitFactory('apple'));
        document.addEventListener("click", this.mouseHandler);
        this.counter = 0;
        this.score = 0;
        this.loop();
    }
    fruitFactory(name) {
        if (name == "kiwi") {
            return new Kiwi(name, this.randomNumber(Game.minAmountOfTimeAliveFruit, Game.maxAmountOfTimeAliveFruit), this.randomNumber(0, this.canvas.width - 200), this.randomNumber(0, this.canvas.height - 200));
        }
        else {
            return new Apple(name, this.randomNumber(Game.minAmountOfTimeAliveFruit, Game.maxAmountOfTimeAliveFruit), this.randomNumber(0, this.canvas.width - 200), this.randomNumber(0, this.canvas.height - 200), this.randomNumber(Game.minSpeedApple, Game.maxSpeedApple), this.randomNumber(Game.minSpeedApple, Game.maxSpeedApple));
        }
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        if (this.fruits.length != 0) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.fruits.forEach(element => {
                element.draw(ctx);
            });
            this.writeTextToCanvas(ctx, `Score is: ${this.score}`, 40, 100, 40);
        }
        else {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.writeTextToCanvas(ctx, "Game over", 60, this.canvas.width / 2, this.canvas.height / 2);
            this.writeTextToCanvas(ctx, `Your score is: ${this.score}`, 40, this.canvas.width / 2, this.canvas.height / 2 + 50);
        }
    }
    move() {
        this.fruits.forEach(element => {
            if (element.name === "apple") {
                element.move(this.canvas);
            }
        });
    }
    writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
Game.minAmountOfKiwis = 3;
Game.maxAmountOfKiwis = 10;
Game.minAmountOfTimeAliveFruit = 0;
Game.maxAmountOfTimeAliveFruit = 350;
Game.minSpeedApple = -5;
Game.maxSpeedApple = 5;
class Kiwi extends Fruit {
    constructor(name, lifeSpan, xPos, yPos) {
        super(name, lifeSpan, xPos, yPos);
        this._image = this.loadNewImage("./assets/kiwi-sm.png");
    }
}
let init = () => {
    const KiwiWars = new Game(document.getElementById("canvas"));
};
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map