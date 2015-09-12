/// <reference path="module2.ts" />
/// <reference path="../../typings/toastr/toastr.d.ts" />

interface IRectangle {
    height: number,
    width: number,
    getArea(): number
}

module App.Shapes {
    export class Rectangle implements IRectangle {
        constructor(public height: number, public width: number) {
        }

        getArea() : number {
            return this.height * this.width;
        }
    }

    export var rect: IRectangle = new Rectangle(10, 4);
}

// todo: uncomment for Node; can't include module2.ts at runtime for now (must be a way...)
// todo: comment it for html load (module2.js can be loaded in the script tag)
/*
module App.Shapes {
    export class Circle {
        constructor(public radius: number) {
        }
    }
}
*/

declare var toastr: Toastr;

module myProgram {
    function run() {
        toastr.info("hello1");

        var myRectangle: App.Shapes.Rectangle = App.Shapes.rect;
        console.info(myRectangle.height, myRectangle.getArea());

        var yourRectangle = new App.Shapes.Rectangle(9,6);
        console.info(yourRectangle.height);

        var aCircle = new App.Shapes.Circle(5);
        console.info(aCircle.radius);
    }

    run();
}

module Program2 {
    import shapes = App.Shapes;

    function run() {
        var myRectangle: IRectangle = shapes.rect;
        console.info(myRectangle.height, myRectangle.getArea());

        var yourRectangle = new shapes.Rectangle(9,6);
        console.info(yourRectangle.height);
    }

    run();
}
