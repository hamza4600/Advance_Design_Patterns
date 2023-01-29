

// Prototype Pattern
// The Prototype Pattern is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
// The Prototype Pattern is used to:
// - avoid subclasses of an object creator in the client application, like the factory method pattern does.
// - avoid the inherent cost of creating a new object in the standard way (e.g., using the 'new' keyword) when it is prohibitively expensive for a given application.
// - when the class to instantiate is determined at run-time, for example, by dynamic loading; or
// - to avoid building a class hierarchy of factories that parallels the class hierarchy of products; these factories are then used to encapsulate complex creation graphs.


class CustomerPrototype {
    constructor(proto) {
        this.proto = proto;

        this.clone = function () {
            let customer = new Customer();

            customer.first = proto.first;
            customer.last = proto.last;
            customer.status = proto.status;

            return customer;
        };
    }
}

class Customer {
    constructor(first, last, status) {
        this.first = first;
        this.last = last;
        this.status = status;

        this.say = function () {
            console.log("name: " + this.first + " Last name :" + this.last + ", status: " + this.status);
        };
    }
}

function runT() {
    let proto = new Customer("Hamza", "Khan", "pending");
    let prototype = new CustomerPrototype(proto);
    // we can also use this way 
    // let prototype = new CustomerPrototype({ first: "Hamza", last: "Khan", status: "pending" });

    let customer = prototype.clone();
    customer.say();
}
// advantage of prototype pattern is that we can use the same object multiple time
// runT();
