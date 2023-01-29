// Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation

// used in application where we need to save the state of an object so that we can restore it later
// in text editord we can save the state of the text so that we can restore it later

class Persion {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }

    hydrate() {
        let memento = JSON.stringify(this);
        return memento;
    }

    dehydrate(memento) {
        let m = JSON.parse(memento);
        this.name = m.name;
        this.age = m.age;
        this.address = m.address;
        this.phone = m.phone;
    }
}

// caretaker
class CareTaker {
    constructor() {
        this.mementos = {};
    }

    add(id, memento) {
        this.mementos[id] = memento;
    }

    get(id) {
        return this.mementos[id];
    }
}

function run() {
    let persion = new Persion('saeed', 30, 'tehran', '09123456789');
    let persion2 = new Persion('Hamza', 20, 'USA', '091234526564');

    let careTaker = new CareTaker();
    careTaker.add(1, persion.hydrate());
    careTaker.add(2, persion2.hydrate());

    persion.dehydrate(careTaker.get(1));
    persion2.dehydrate(careTaker.get(2));

    console.log(careTaker.mementos);

    persion.name = 'Xaveror';
    careTaker.add(1, persion.hydrate()); // update
    persion.name = 'ali';
    careTaker.add(2, persion.hydrate());  // we can add new memento to careTaker

    console.log(careTaker.mementos);

}

// run();

// it is similar to the observer pattern but the difference is that the observer pattern is used when one object needs to be notified of any changes in another object