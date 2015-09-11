console.info("overview");
var x = 5;
var y;
var z = x + 5;
var o1;
var o2;
var o3;
var a1;
var a2;
var a3;
var f1;
var f2;
f2 = function (n) { return 5; };
console.log(f2());
var A = (function () {
    function A() {
        this.init = function (n) { };
    }
    A.prototype.foo = function () {
        this.init2 = function (n) { return ""; };
    };
    return A;
})();
// lamda equivalent (arrow function)
var f = function (w, h) { return w * h; };
f = function (w, h) { return w * h; };
var f3 = function (w, h) { return w * h; };
// this form is not liked!
//f = function (w:number, h:number) => w*h;
var hello;
hello = function (name) { console.log("hello " + (name || "nobody")); };
// this is not liked
//hello = (name?:string) { console.log("hello " + (name || "nobody")); }
hello("me");
hello();
var computeArea;
computeArea = function (rect) {
    if (rect.h === undefined) {
        return rect.w * rect.w;
    }
    return rect.w * rect.h;
};
// this is interesting! interface for function def?
var af = computeArea;
console.info(af({ w: 5 }));
console.info(af({ w: 5, h: 10 }));
var p1 = {
    name: 'me',
    //age: 5,
    greet: function (s) { console.log(s + " " + this.name); }
};
p1.greet('hello');
//# sourceMappingURL=overview.js.map