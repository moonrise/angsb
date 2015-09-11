var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        var Circle = (function () {
            function Circle(radius) {
                this.radius = radius;
            }
            return Circle;
        })();
        Shapes.Circle = Circle;
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
//# sourceMappingURL=module2.js.map