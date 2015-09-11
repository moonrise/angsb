'use strict';

interface IEngine {
    start() : void;
    stop() : void;
}

interface ITruck extends IEngine {
    fourByFour: boolean;
    //loadStuff(cb:(seq:number, stuff:string) => void, ...stuff:string[]) : void;
}

interface ITruck extends IEngine {
    //fourByFour: boolean;
    loadStuff(cb:(seq:number, stuff:string) => void, ...stuff:string[]) : void;
}

class Auto {
    private _engine: string;

    constructor(engine: string) {
        this._engine = engine;
    }

    get engine(): string {
        return this._engine;
    }

    set engine(value:string) {
        if (value === void 0) throw "empty setter value!";
        this._engine = value;
    }
}

class Car {
    //engine: string = "x";
    f1: number = 2;

    constructor(public engine:string = "y") {
        //this.engine = engine;
    }

    start() {
    }
}

class Engine {
    constructor(public horsePower: number, public engineType:string) {
    }
}

class Vehicle implements IEngine {
    private _engine: Engine;

    constructor(engine:Engine) {
        this._engine = engine;
    }

    public get engine():Engine {
        console.info("get property: " + this._engine);
        return this._engine;
    }

    public set engine(value:Engine) {
        console.info("set property: " + value);
        this._engine = value;
    }

    start() : void {
        console.info("Vehicle " + this._engine.engineType + " started...");
    }

    stop():void {
    }
}

class Truck extends Vehicle implements ITruck {
    constructor(engine:Engine, public fourByFour:boolean) {
        super(engine);
        console.info('Truck instantiated ', engine.engineType, fourByFour);
    }

    loadStuff(callback: (seq:number, stuff:string) => void, ...stuff: string[]) : void {
        for (var i:number=0; i<stuff.length; i++) {
            callback(i, stuff[i]);
        }

        for (var s in stuff) {
            callback(-1, s);        // TODO: why s goes like 0, 1, 2?
            callback(-2, stuff[s]);
        }
    }

    start() : void {
        console.info("Truck started...");
        super.start();
    }
}

var v1 : Vehicle = new Vehicle(new Engine(200, "Subaru"));
console.log(v1.engine.engineType, v1.engine.horsePower);
v1.start();

var t1 : Truck = new Truck(new Engine(300, "Ford"), true);
t1.loadStuff((seq:number, name:string) => {
    console.info("called back with " + seq, name);
}, "bag", "bike", "food");

var v2:Vehicle = t1;

// case of casting
var t2: Truck = <Truck>v2;
t2.start();

var t3: ITruck = <ITruck>t2;
t3.start();
