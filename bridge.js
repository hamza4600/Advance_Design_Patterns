
//  Bridge Pattern
// it allow us to decouple an abstraction from its implementation so that the two can vary independently.
// two componets to work together each componet having its own interface    
// also refer as double Adapter pattern

// example is an application that is using two different databases and we want to use the same code for both the databases

class MySQL {
    constructor() {
        this.name = 'MySQL';
        this.toString = function () {
            return this.name;
        };
    }
}

class Oracle {
    constructor() {
        this.name = 'Oracle';
        this.toString = function () {
            return this.name;
        };
    }
}

class Connection {
    constructor(db) {
        this.database = db;
    }

    connect() {
        return 'Connected: ' + this.database.toString();
    }
}

function runB() {
    let oracle = new Oracle();
    let mySQL = new MySQL();

    let oracleConnection = new Connection(oracle);
    let mySQLConnection = new Connection(mySQL);

    console.log(oracleConnection.connect());
    console.log(mySQLConnection.connect());
}

runB();

// Javascript does not have abstract classes 

// Another example is input and output streams

let Gesture = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); };
    this.swipe = function () { this.output.move(); };
    this.pan = function () { this.output.drag(); };
    this.pinch = function () { this.output.zoom(); }
}

let Mouse = function (output) {
    this.output = output;

    this.click = function () { this.output.write("Mouse click"); };
    this.move = function () { this.output.write("Mouse move"); };
    this.drag = function () { this.output.write("Mouse drag"); };
    this.wheel = function () { this.output.write("Mouse wheel"); };
    this.down = function () { this.output.write("Mouse down"); };
    this.up = function () { this.output.write("Mouse up"); };
    this.zoom = function () { this.output.write("Zoom over"); };
}

let Screen = function () {
    this.write = function (msg) { console.log(msg); };
}

function runC() {
    let screen = new Screen();
    let mouse = new Mouse(screen);
    let gesture = new Gesture(mouse);

    gesture.tap();
    gesture.swipe();
    gesture.pan();
    gesture.pinch();
}

runC();


//  Aonthe Example 

// input devices

var Gestures = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};

var MouseA = function (output) {
    this.output = output;

    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};

// output devices

var ScreenA = function () {
    this.click = function () { console.log("Screen select"); }
    this.move = function () { console.log("Screen move"); }
    this.drag = function () { console.log("Screen drag"); }
    this.zoom = function () { console.log("Screen zoom in"); }
};

var Audio = function () {
    this.click = function () { console.log("Sound oink"); }
    this.move = function () { console.log("Sound waves"); }
    this.drag = function () { console.log("Sound screetch"); }
    this.zoom = function () { console.log("Sound volume up"); }
};

function run() {

    var screen = new ScreenA();
    var audio = new Audio();

    var hand = new Gestures(screen);
    var mouse = new MouseA(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}

run();