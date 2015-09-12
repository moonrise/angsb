/// <reference path="../../typings/toastr/toastr.d.ts" />

import mod2 = require("amdmod2");

declare var toastr: Toastr;

interface IRectangle {
    height: number,
    width: number,
    getArea(): number
}

class Rectangle implements IRectangle {
    constructor(public height:number, public width:number) {
    }

    getArea():number {
        return this.height * this.width;
    }
}

var rect:IRectangle = new Rectangle(10, 4);

export function run() {
    toastr.info("AMD loaded and running...");

    var myRectangle:Rectangle = rect;
    console.info(myRectangle.height, myRectangle.getArea());

    var yourRectangle = new Rectangle(9, 6);
    console.info(yourRectangle.height);

    var aCircle = new mod2.Circle(5);
    console.info(aCircle.radius);
}
