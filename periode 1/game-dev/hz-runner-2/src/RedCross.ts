/// <reference path="ScoringObject.ts"/>

class RedCross extends ScoringObject {

    public constructor (canvas: HTMLCanvasElement, lanes: number[]) {
        // first run parent (abstract - Scoring object) than continue with this.image:
        super(canvas, lanes);
        this.image = this.loadNewImage("assets/img/objects/tilted_cross.png");
        this.points = -5;
    }

}