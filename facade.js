// Facase Pattern
// allow to create a simple interface to a complex system of classes , library or framework
// used in systems that at high level have a complex structure but at low level have a simple structure
// preent in a system that are build around a multi-layer architecture
// frequently used with other design patterns like singleton , factory , facade , decorator , adapter , proxy , composite , and bridge

// simple it provide a high level interface that makes the system easier to use

// example of facade pattern is a computer , where the facade is the keyboard and mouse , and the complex system is the CPU , memory , hard drive , and so on

// example of facade pattern is a car , where the facade is the steering wheel , and the complex system is the engine , transmission , brakes , and so on

class Computer {
    getElectricShock() {
        console.log('Ouch!');
    }

    makeSound() {
        console.log('Beep beep!');
    }

    showLoadingScreen() {
        console.log('Loading..');
    }

    bam() {
        console.log('Ready to be used!');
    }

    closeEverything() {
        console.log('Bup bup bup buzzzz!');
    }

    sooth() {
        console.log('Zzzzz');
    }

    pullCurrent() {
        console.log('Haaah!');
    }
}

class ComputerFacade {
    constructor(computer) {
        this.computer = computer;
    }

    turnOn() {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    turnOff() {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}

function test() {
    const computer = new ComputerFacade(new Computer());
    computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
    computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz
}

// test();

// anopther example real world

class Mortgage {
    constructor(name) {
        this.name = name;
    }

    applyFor(amount) {
        // access multiple subsystems...
        let result = 'approved';
        if (!new Bank().verify(this.name, amount)) {
            result = 'denied';
        } else if (!new Credit().get(this.name)) {
            result = 'denied';
        } else if (!new Background().check(this.name)) {
            result = 'denied';
        }
        return `${this.name} has been ${result} for a ${amount} mortgage`;
    }
}

class Bank {
    verify(name, amount) {
        // complex logic ...
        return true;
    }
}

class Credit {
    get(name) {
        // complex logic ...
        return true;
    }
}

class Background {
    check(name) {
        // complex logic ...
        return true;
    }
}

function test() {
    const mortgage = new Mortgage('Joan Templeton');
    const result = mortgage.applyFor('$100,000');

    console.log(result); // Joan Templeton has been approved for a $100,000 mortgage
}

test();