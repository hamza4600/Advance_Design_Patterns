// InterPreter Pattern
// allow to create a language that can be used to interpret a set of instructions
// used in applications that need to interpret a set of instructions
// example of interpreter pattern is a compiler that takes a set of instructions and converts them into machine code

// example of interpreter pattern is a calculator that takes a set of instructions and calculates the result

// example of interpreter pattern is a programming language that takes a set of instructions and executes them
// some application are very complex and have a lot of features , and it is not possible to implement all of them in a single class , so we can use the interpreter pattern to create a language that can be used to interpret a set of instructions


class Interpreter {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    interpret() {
        this.commands.forEach(command => command.execute());
    }
}

class Command {
    constructor(receiver, action, value) {
        this.receiver = receiver;
        this.action = action;
        this.value = value;
    }

    execute() {
        // this[this.action](this.value);
        this.receiver[this.action](this.value);
    }
}

class Receiver {
    constructor() {
        this.value = 0;
    }

    increment(value) {
        this.value += value;
    }

    decrement(value) {
        this.value -= value;
    }
}

function test() {
    const interpreter = new Interpreter();
    const receiver = new Receiver();

    // can be written as:
    const increment = new Command(receiver, 'increment', 5);
    interpreter.addCommand(increment);

    interpreter.addCommand(new Command(receiver, 'decrement', 2));
    interpreter.addCommand(new Command(receiver, 'increment', 3));

    interpreter.interpret();
    console.log(interpreter.commands); // [Command, Command, Command]
    console.log(receiver.value);
}

// test();

// Other examples:

class Calculator {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    execute() {
        this.commands.forEach(command => command.execute());
    }
}

class AddCommand {
    constructor(receiver, value) {
        this.receiver = receiver;
        this.value = value;
    }

    execute() {
        this.receiver.add(this.value);
    }
}

class SubtractCommand {
    constructor(receiver, value) {
        this.receiver = receiver;
        this.value = value;
    }

    execute() {
        this.receiver.subtract(this.value);
    }
}

class CalculatorReceiver {
    constructor() {
        this.value = 0;
    }

    add(value) {
        this.value += value;
    }

    subtract(value) {
        this.value -= value;
    }
}

function test2() {
    const calculator = new Calculator();
    const receiver = new CalculatorReceiver();

    calculator.addCommand(new AddCommand(receiver, 5));
    calculator.addCommand(new SubtractCommand(receiver, 2));
    calculator.addCommand(new AddCommand(receiver, 3));

    calculator.execute();
    console.log(calculator.commands); // [AddCommand, SubtractCommand, AddCommand]
    console.log(receiver.value);
}

// test2();

// social media example


class SocialMedia {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    execute() {
        this.commands.forEach(command => command.execute());
    }
}

class LikeCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {
        this.receiver.like();
    }
}

class CommentCommand {
    constructor(receiver, comment) {
        this.receiver = receiver;
        this.comment = comment;
    }

    execute() {
        this.receiver.comment(this.comment);
    }
}

class SocialMediaReceiver {
    constructor() {
        this.likes = 0;
        this.comments = [];
    }

    like() {
        this.likes++;
    }

    comment(comment) {
        this.comments.push(comment);
    }
}

function test3() {
    const socialMedia = new SocialMedia();
    const receiver = new SocialMediaReceiver();

    socialMedia.addCommand(new LikeCommand(receiver));
    socialMedia.addCommand(new CommentCommand(receiver, 'Hello World'));
    socialMedia.addCommand(new LikeCommand(receiver));

    socialMedia.execute();
    console.log(socialMedia.commands); // [LikeCommand, CommentCommand, LikeCommand]
    console.log(receiver.likes);
    console.log(receiver.comments);
}

// test3();

