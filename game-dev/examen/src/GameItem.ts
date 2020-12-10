abstract class GameItem {
    protected _name: string;
    protected _xPosition: number;
    protected _yPosition: number;
    protected _speed: number;

    constructor(name: string, xPosition: number, yPosition: number, speed: number) {
        this._name = name;
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._speed = speed;
    }
}