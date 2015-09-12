/// <reference path="../../typings/toastr/toastr.d.ts" />
define(["require", "exports", "amdmod2"], function (require, exports, mod2) {
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
    var rect = new Rectangle(10, 4);
    function run() {
        toastr.info("AMD loaded and running...");
        var myRectangle = rect;
        console.info(myRectangle.height, myRectangle.getArea());
        var yourRectangle = new Rectangle(9, 6);
        console.info(yourRectangle.height);
        var aCircle = new mod2.Circle(5);
        console.info(aCircle.radius);
    }
    exports.run = run;
});
//# sourceMappingURL=amdmod1.js.map