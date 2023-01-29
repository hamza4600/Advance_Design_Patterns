//  Mediator Pattern
// provide a central authority that controls how a set of objects interact with each other  , it reduces the dependencies between communicating objects , and it promotes loose coupling 

// used in applications that are composed of a number of objects that need to communicate with each other , and we want to reduce the dependencies between these objects , and we want to promote loose coupling between them

// example of mediator pattern is a chat room , where a number of users can communicate with each other , and the chat room is the central authority that controls how these users interact with each other , and it reduces the dependencies between these users , and it promotes loose coupling between them

// example of mediator pattern is a traffic control system , where a number of traffic lights can communicate with each other , and the traffic control system is the central authority that controls how these traffic lights interact with each other , and it reduces the dependencies between these traffic lights , and it promotes loose coupling between them

class Mediator {
    constructor() {
        this.users = [];
        this.sendMessage = this.sendMessage.bind(this);
        this.groupChat = this.groupChat.bind(this);
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message, sender) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }

    groupChat(message, sender, receiver) {
        receiver.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }

}

class User {
    constructor(name) {
        this.name = name;
    }

    receive(message) {
        console.log(`${this.name} received ${message}`);
    }

    send(message, sender) {
        sender.sendMessage(message, this);
    }

}

function test() {
    const mediator = new Mediator();

    const john = new User('John');
    const jane = new User('Jane');
    const jack = new User('Jack');

    mediator.addUser(john);
    mediator.addUser(jane);
    mediator.addUser(jack);

    john.sendMessage = mediator.sendMessage;
    jane.sendMessage = mediator.sendMessage;
    jack.sendMessage = mediator.sendMessage;

    john.send('Hello', mediator);
    jane.send('Hi', mediator);
    jack.send('Hey', mediator);

    const group = [john, jane];
    jack.groupChat = mediator.groupChat;
    jack.groupChat('Hey guys', mediator, group);
}

// test();