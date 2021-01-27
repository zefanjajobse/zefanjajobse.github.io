/// <reference path="ScoringItem.ts"/>
/**
 * declare powerup - if hit player becomes smaller
 */
class PowerUp extends ScoringItem {
    
    /**
     * declare the values used
     * @param name name of the gameObject
     * @param xPosition starting X position
     * @param yPosition starting Y position
     * @param speed startingspeed
     * @param image image used for the gameObject
     * @param points how much points its worth
     */
    constructor(name: string, xPosition: number, yPosition: number, speed: number, image: HTMLImageElement, points: number) {
        super(name, xPosition, yPosition, speed, image, points)
    }
}