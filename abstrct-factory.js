
/*
    Creat a new Object , cacheing  , sharing , or re-using the existing object and compolex logic consider using the Factory Pattern 
*/


// Abstract Factory Pattern
// The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. 
// The Abstract Factory Pattern is often implemented with Factory Methods, but it can also be implemented using Prototype.
function Employee(name, type = "worker") {
    this.name = name;
    this.type = type;

    this.say = function () {
        console.log("I am " + this.name + " and I am a " + this.type);
    }
}

function EmployeeFactory() {

    this.create = function (name) {
        return new Employee(name);
    };
}

function Vendor(name) {
    this.name = name;
    this.type = "vendor";

    this.say = function () {
        console.log("I am " + this.name + " and I am a " + this.type);
    }

}

function VendorFactory() {
    this.create = function (name) {
        return new Vendor(name);
    };
}

function log() {
    const persons = [];
    let emplryFactory = new EmployeeFactory();
    let vendorFactory = new VendorFactory();

    persons.push(emplryFactory.create('John Doe'));
    persons.push(emplryFactory.create('Jane dada'));
    persons.push(vendorFactory.create('John Smith'));
    persons.push(vendorFactory.create('Jane PizSmith'));

    for (let i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

}

// log();
