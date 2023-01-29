// State Pattern
// allow to create an object that represents a particular state and with a consistent interface allows to transition from one state to another 

// State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class

// used in software when we have an object that can change its behavior at runtime depending on its internal state , for example , a light switch can be in one of two states , on or off , and depending on its state , it will behave differently , for example , if the light switch is in the on state , it will turn the light on , and if the light switch is in the off state , it will turn the light off

class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'STOP';
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'READY';
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return 'GO';
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.current = this.states[0];
        this.start = null;
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }

    startSyetem() {
        this.start = setInterval(() => {
            this.change();
            console.log(this.sign());
        }
            , 1000);
    }

    stop() {
        console.log('stop');
        clearInterval(this.start);
    }

}

function test() {
    const traffic = new TrafficLight();
    traffic.startSyetem();

    setTimeout(() => {
        traffic.stop();
    }
        , 4000);

}

// test();


// anothe example

class State {
    constructor(color) {
        this.color = color;
    }

    handle(context) {
        console.log(`Turning to ${this.color} light`);
        context.setState(this);
    }
}


class Red extends State { // extends State means Red is a subclass of State , and Red inherits all the properties and methods of State
    constructor() {
        super('red');
    }

    handle(context) {
        console.log('Turning to red light');
        context.setState(this);
    }
}

class Yellow extends State {
    constructor() {
        super('yellow');
    }

    handle(context) {
        console.log('Turning to yellow light');
        context.setState(this);
    }
}

class Green extends State {
    constructor() {
        super('green');
    }

    handle(context) {
        console.log('Turning to green light');
        context.setState(this);
    }
}

class TrafficLight2 {
    constructor() {
        this.states = [new Red(), new Yellow(), new Green()];
        this.current = this.states[0];
    }

    setState(state) {
        this.current = state;
    }

    init() {
        this.current.handle(this);
    }
}

function test2() {
    const traffic = new TrafficLight2();
    traffic.init();
    traffic.setState(new Yellow());
    traffic.init();
    traffic.setState(new Green());
    traffic.init();
}

test2();