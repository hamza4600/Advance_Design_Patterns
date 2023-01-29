// JavaScript Design Patterns

// Gang of Four Design Patterns (GoF)
// basic of Architectural Patterns (AP)
// basic of Creational Patterns (CP)
// basic of Structural Patterns (SP)
// basic of Behavioral Patterns (BP)
// basic of Model View Controller (MVC)

function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}


function AdvanceShpping() {
    this.login = function (crediantials) {
        console.log('login ::');
        console.log(crediantials);
    }

    this.setStart = function (start) {
        console.log('setStart  ' + start);
    }

    this.setDestination = function (destination) {
        console.log('setDestination ', destination);
    }

    this.calculate = function (weight) {
        console.log('calculate Weight :: ', weight);
        return "$39.50";
    }
}

function ShipingAdapter(credentials) {
    var shipping = new AdvanceShpping();
    shipping.login(credentials);

    return {
        request: function (start, destination, weight) {
            shipping.setStart(start);
            shipping.setDestination(destination);
            return shipping.calculate(weight); // return the result
        }
    }
}

function run() {
    let shipping = new Shipping();
    let credentials = { token: '30a8-6ee1' };
    let adapter = new ShipingAdapter(credentials);
    // original shipping object and interface
    var cost = shipping.request('78701', '10010', '2 lbs');
    console.log('Old cost: ' + cost);
    // new Shipping with adapter
    cost = adapter.request('78701', '10010', '2 lbs');
    console.log('New cost: ' + cost);

}

// run();

// Builder Pattern
// allowes you to create complex objects step by step 
// the pattern allows you to produce different types and representations of an object using the same construction code


function Shop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function () {
        this.car = new Car();
    };

    this.step2 = function () {
        this.car.addParts();
    };

    this.get = function () {
        return this.car;
    };
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function () {
        this.truck = new Truck();
    };

    this.step2 = function () {
        this.truck.addParts();
    };

    this.get = function () {
        return this.truck;
    };
}

function Car() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 4;
    };

    this.say = function () {
        log.add("I am a " + this.doors + "-door car");
    };
}

function Truck() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 2;
    };

    this.say = function () {
        log.add("I am a " + this.doors + "-door truck");
    };
}

// log helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + " "; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);

    car.say();
    truck.say();

    log.show();
}

// run();




