/// <reference path="Fruit.ts"/>

class Kiwi extends Fruit{
    constructor(name: string, lifeSpan: number, xPos: number, yPos: number) {
        super(name, lifeSpan, xPos, yPos)
        this._image = this.loadNewImage("./assets/kiwi-sm.png")
    }
}