var a = 7;
//var f: function(a:number) => number;
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.info('Engine started: ' + this.engine);
    };
    Car.prototype.stop = function () {
        console.info('Engine stopped: ' + this.engine);
    };
    return Car;
})();
console.log("start...");
var car = new Car('V8');
car.start();
car.stop();
console.info("end...");
//# sourceMappingURL=test.js.map