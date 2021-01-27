/// <reference path="ScoringObject.ts"/>

class LightningBolt extends ScoringObject {

    public constructor (canvas: HTMLCanvasElement, lanes: number[]) {
        // first run parent (abstract - Scoring object) than continue with this.image:
        super(canvas, lanes);
        this.image = this.loadNewImage("assets/img/objects/titled_yellow_power_icon.png");
        this.points = -10;
    }

}