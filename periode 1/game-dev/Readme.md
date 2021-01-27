typescript builder template:
https://github.com/HZ-HBO-ICT/ts-skeleton-app

private maakt niet uit voor UML want word niet gezien

let test = -10
console.log(-test) == +10
// -- == +

class:
class Game {
    public static readonly gameName: string = "test"

    private name: string;
    protected: xPos: number;
    public: image; HTMLImageElement;

    public constructor(name: string) {
        this.name = name
    }

    public move(canvas: HTMLCanvasElement) {

    }
}

Abstract class:
abstract class Fruit {
    Game.gameName
}

extends Class: 
/// <reference path="Fruit.ts"/>
class Apple extends Fruit {
    constructor(name:string) {
        // send to main class
        super(name)
    }
}

aanroepbaar buiten de (new Game()) object:
    public static randomNumber(numberOne: number, numberTwo: number) {

    }