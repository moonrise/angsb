'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Auto = (function () {
    function Auto(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === void 0)
                throw "empty setter value!";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
})();
var Car = (function () {
    function Car(engine) {
        if (engine === void 0) { engine = "y"; }
        this.engine = engine;
        //engine: string = "x";
        this.f1 = 2;
        //this.engine = engine;
    }
    Car.prototype.start = function () {
    };
    return Car;
})();
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
})();
var Vehicle = (function () {
    function Vehicle(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Vehicle.prototype, "engine", {
        get: function () {
            console.info("get property: " + this._engine);
            return this._engine;
        },
        set: function (value) {
            console.info("set property: " + value);
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.start = function () {
        console.info("Vehicle " + this._engine.engineType + " started...");
    };
    Vehicle.prototype.stop = function () {
    };
    return Vehicle;
})();
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        _super.call(this, engine);
        this.fourByFour = fourByFour;
        console.info('Truck instantiated ', engine.engineType, fourByFour);
    }
    Truck.prototype.loadStuff = function (callback) {
        var stuff = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            stuff[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < stuff.length; i++) {
            callback(i, stuff[i]);
        }
        for (var s in stuff) {
            callback(-1, s); // TODO: why s goes like 0, 1, 2?
            callback(-2, stuff[s]);
        }
    };
    Truck.prototype.start = function () {
        console.info("Truck started...");
        _super.prototype.start.call(this);
    };
    return Truck;
})(Vehicle);
var v1 = new Vehicle(new Engine(200, "Subaru"));
console.log(v1.engine.engineType, v1.engine.horsePower);
v1.start();
var t1 = new Truck(new Engine(300, "Ford"), true);
t1.loadStuff(function (seq, name) {
    console.info("called back with " + seq, name);
}, "bag", "bike", "food");
var v2 = t1;
// case of casting
var t2 = v2;
t2.start();
var t3 = t2;
t3.start();
//# sourceMappingURL=container.js.map