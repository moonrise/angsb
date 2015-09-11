var a:number = 7;

//var f: function(a:number) => number;


class Car {
    engine: string;

    constructor (engine: string) {
        this.engine = engine;
    }

    start() {
        console.info('Engine started: ' + this.engine);
    }

    stop() {
        console.info('Engine stopped: ' + this.engine);
    }
}

console.log("start...");

var car = new Car('V8');
car.start();
car.stop();

console.info("end...")

