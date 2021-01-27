/**
 * main gameItem class where both scoring item and player are based on
 */
abstract class GameItem {
    protected _name: string;
    protected _xPosition: number;
    protected _yPosition: number;
    protected _speed: number;

    /**
     * declare the values used for both the player and the scoringItems
     * @param name name of the gameObject
     * @param xPosition starting X position
     * @param yPosition starting Y position
     * @param speed startingspeed
     */
    constructor(name: string, xPosition: number, yPosition: number, speed: number) {
        this._name = name;
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._speed = speed;
    }
}