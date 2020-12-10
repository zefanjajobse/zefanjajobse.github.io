/// <reference path="ScoringItem.ts"/>
class PowerUp extends ScoringItem {
    constructor(name: string, xPosition: number, yPosition: number, speed: number, image: HTMLImageElement, points: number) {
        super(name, xPosition, yPosition, speed, image, points)
    }
}