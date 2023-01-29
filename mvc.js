// MVC Design Pattern

// Model View Controller Design Pattern
// is a software design pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. The model manages the data of the application. The view is responsible for the application's user interface. The controller manages the input of the application, and it is the glue between the model and the view.

// example is a calculator application. The model is responsible for the calculation logic. The view is responsible for the user interface. The controller is responsible for the input logic.

// another example is a web application. The model is responsible for the data. The view is responsible for the user interface. The controller is responsible for the input logic. The controller receives the input from the user, and it sends the input to the model. The model processes the input, and it sends the result to the view. The view displays the result to the user.

class Model {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        this.result /= num;
    }
}

class View {
    // show in console 
    showResult(result) {
        console.log(result);
    }

}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    add(num) {
        this.model.add(num);
        this.view.showResult(this.model.result);
    }

    subtract(num) {
        this.model.subtract(num);
        this.view.showResult(this.model.result);
    }

    multiply(num) {
        this.model.multiply(num);
        this.view.showResult(this.model.result);
    }

    divide(num) {
        this.model.divide(num);
        this.view.showResult(this.model.result);
    }
}

//  application

class Application {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.controller = new Controller(this.model, this.view);
    }
}

function test() {
    const app = new Application();
    app.controller.add(5);
    app.controller.subtract(3);
    app.controller.multiply(2);
    app.controller.divide(4);
}

test();