// Day Two 
//Factory Method Pattern
// Creat a new Object as Instructed bt client 
// used in application where the application manage and manintain collection of different object but at same time have many different types of object

// Creator 
// Abstract Product 
// Concrete Product


class Factory {
    constructor() {
        this.createEmployee = function (type) {
            let employee;
            if (type === "fulltime") {
                employee = new FullTime();
            }
            else if (type === "parttime") {
                employee = new PartTime();
            }
            else if (type === "temporary") {
                employee = new Temporary();
            }
            else if (type === "contractor") {
                employee = new Contractor();
            }
            employee.type = type;

            employee.say = function () {
                console.log(this.type + ": rate " + this.hourly + "/hour");
            };
            return employee;
        };
    }
}

class FullTime {
    constructor() {
        this.hourly = "$12";
    }
}

class PartTime {
    constructor() {
        this.hourly = "$11";
    }
}

class Temporary {
    constructor() {
        this.hourly = "$10";
    }
}

class Contractor {
    constructor() {
        this.hourly = "$15";
    }
}

function run() {
    let employees = [];
    let factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (let i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}

// run();
