console.info("overview");

var x = 5;
var y:number;
var z = x + 5;

var o1 : {};
var o2 : Object;
var o3 : {x:number, y:number};

var a1 : any[];
var a2 : string[];
var a3 : Array<string>;

var f1 : (n:number) => void;
var f2 : (o?:{x:number, y?:number}) => number;

f2 = function(n) { return 5;}
console.log(f2());

class A {
    init : (n:number) => void = function(n) { };
    init2 : (n:number) => string;

    foo() {
        this.init2 = function(n:number) { return ""; }
    }
}

// lamda equivalent (arrow function)
var f = function(w:number, h:number) { return w*h; }
f = (w:number, h:number) => w*h;
var f3 = (w:number, h:number) => { return w*h; }

// this form is not liked!
//f = function (w:number, h:number) => w*h;

var hello: (name?:string) => void;
hello = (name?:string) => { console.log("hello " + (name || "nobody")); }

// this is not liked
//hello = (name?:string) { console.log("hello " + (name || "nobody")); }

hello("me");
hello();

var computeArea : (rect: {w:number, h?:number}) => number;
computeArea = function(rect) {      // notice rect is not typed, but typed
    if (rect.h === undefined) {
        return rect.w * rect.w;
    }
    return rect.w * rect.h;
}

interface Rectangle {
    w: number;
    h?: number;
}

interface AreaFunction {
    //(rect: {w:number, h?:number}): number;
    (rect: Rectangle): number;
}

// this is interesting! interface for function def?
var af: AreaFunction = computeArea;

console.info(af({w:5}));
console.info(af({w:5, h:10}));

interface Person {
    name: string;
    age?: number;
    greet: (msg: string) => void;
}

var p1: Person = {
    name: 'me',
    //age: 5,
    greet: function(s: string) { console.log(s + " " + this.name); }
}

p1.greet('hello');