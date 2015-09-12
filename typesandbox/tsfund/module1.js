/// <reference path="module2.ts" />
/// <reference path="../../typings/toastr/toastr.d.ts" />
var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        var Rectangle = (function () {
            function Rectangle(height, width) {
                this.height = height;
                this.width = width;
            }
            Rectangle.prototype.getArea = function () {
                return this.height * this.width;
            };
            return Rectangle;
        })();
        Shapes.Rectangle = Rectangle;
        Shapes.rect = new Rectangle(10, 4);
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
var myProgram;
(function (myProgram) {
    function run() {
        toastr.info("hello1");
        var myRectangle = App.Shapes.rect;
        console.info(myRectangle.height, myRectangle.getArea());
        var yourRectangle = new App.Shapes.Rectangle(9, 6);
        console.info(yourRectangle.height);
        var aCircle = new App.Shapes.Circle(5);
        console.info(aCircle.radius);
    }
    run();
})(myProgram || (myProgram = {}));
var Program2;
(function (Program2) {
    var shapes = App.Shapes;
    function run() {
        var myRectangle = shapes.rect;
        console.info(myRectangle.height, myRectangle.getArea());
        var yourRectangle = new shapes.Rectangle(9, 6);
        console.info(yourRectangle.height);
    }
    run();
})(Program2 || (Program2 = {}));
//# sourceMappingURL=module1.js.map