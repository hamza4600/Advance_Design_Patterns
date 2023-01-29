// Vistor Pattern
// allow to create a new operation without changing the classes of the elements on which it operates
// used in applications that need to perform an operation on a set of objects
// lets you separate algorithms from the objects on which they operate.


// // example of visitor pattern is a shopping cart that contains a set of products , and we want to calculate the total price of the products in the shopping cart , so we can use the visitor pattern to create a new operation without changing the classes of the elements on which it operates

// // example of visitor pattern is a document that contains a set of elements , and we want to convert the document to a different format , so we can use the visitor pattern to create a new operation without changing the classes of the elements on which it operates

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    visit(visitor) {
        this.products.forEach(product => product.accept(visitor));
    }
}

class Product {
    constructor(price) {
        this.price = price;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}

class Visitor {
    constructor() {
        this.total = 0;
    }

    visit(product) {
        this.total += product.price;
    }
}

function test() {

    const visitor = new Visitor();
    const shoppingCart = new ShoppingCart();
    const product1 = new Product(5);
    const product2 = new Product(10);
    shoppingCart.addProduct(product1);
    shoppingCart.addProduct(product2);
    shoppingCart.visit(visitor);
    console.log(visitor);
    console.log(shoppingCart.products);

}

// test();

// 
var Employee = function (name, salary, vacation) {
    var self = this;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getName = function () {
        return name;
    };

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (sal) {
        salary = sal;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function (vac) {
        vacation = vac;
    };
};

var ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

var ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

function run() {

    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 20000, 21),
        new Employee("Boss", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        console.log(emp.getName() + ": $" + emp.getSalary() +
            " and " + emp.getVacation() + " vacation days");
    }
}


