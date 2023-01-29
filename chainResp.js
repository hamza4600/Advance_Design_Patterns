// Chain of Responsibility Pattern
// allow to create a chain of objects that will receive a request and process it , each object in the chain will decide either to process the request or to pass it to the next object in the chain

// used in application where we have a request that needs to be processed by a number of objects , and each object in the chain can decide whether to process the request or to pass it to the next object in the chain

// example of chain of responsibility pattern is a game where we have a number of objects that can handle a request , such as a player , a weapon , and an enemy , and each object can decide whether to process the request or to pass it to the next object in the chain , such as a player can decide whether to process the request or to pass it to the weapon , and the weapon can decide whether to process the request or to pass it to the enemy

class Player {
    constructor(name) {
        this.name = name;
    }

    handle(request) {
        console.log(`${this.name} handles ${request}`);
    }
}

class Weapon {
    constructor(name) {
        this.name = name;
    }

    handle(request) {
        console.log(`${this.name} handles ${request}`);
    }
}

class Enemy {
    constructor(name) {
        this.name = name;
    }

    handle(request) {
        console.log(`${this.name} handles ${request}`);
    }
}

class Game {
    constructor() {
        this.players = [];
        this.weapons = [];
        this.enemies = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    addWeapon(weapon) {
        this.weapons.push(weapon);
    }

    addEnemy(enemy) {
        this.enemies.push(enemy);
    }

    handle(request) {
        this.players.forEach(player => player.handle(request));
        this.weapons.forEach(weapon => weapon.handle(request));
        this.enemies.forEach(enemy => enemy.handle(request));
    }
}

function test() {
    const game = new Game();

    const player1 = new Player('player1');
    const player2 = new Player('player2');
    const player3 = new Player('player3');

    const weapon1 = new Weapon('weapon1');
    const weapon2 = new Weapon('weapon2');
    const weapon3 = new Weapon('weapon3');

    const enemy1 = new Enemy('enemy1');
    const enemy2 = new Enemy('enemy2');
    const enemy3 = new Enemy('enemy3');

    game.addPlayer(player1);
    game.addPlayer(player2);
    game.addPlayer(player3);

    game.addWeapon(weapon1);
    game.addWeapon(weapon2);
    game.addWeapon(weapon3);

    game.addEnemy(enemy1);
    game.addEnemy(enemy2);
    game.addEnemy(enemy3);

    game.handle('request1');
}

// test();

// another example 

class CumalitiveSum {
    constructor(intialValue = 0) {
        this.sum = intialValue;
    }

    add(value) {
        this.sum += value;
        return this;  // chain occurs here
    }
}

function test2() {
    const sum = new CumalitiveSum();

    sum.add(10).add(20).add(30);
    console.log(sum.sum);
}   

// test2();

// shopping chart example

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    }
}

class Discount {
    calc(products) {
        const ndiscount = new NumberDiscount();
        const pdiscount = new PriceDiscount();
        const none = new NoneDiscount();

        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);

        return ndiscount.exec(products);
    }
}

class NumberDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    exec(products) {
        let result = 0;

        if (products.length > 3) {
            result = 0.05;
        } else {
            result = this.next.exec(products);
        }

        return result;
    }
}

class PriceDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    exec(products) {
        let result = 0;

        const total = products.reduce((a, b) => a + b);

        if (total >= 500) {
            result = 0.1;
        } else {
            result = this.next.exec(products);
        }

        return result;
    }
}

class NoneDiscount {
    exec(products) {
        return 0;
    }
}

function test3() {
    const cart = new ShoppingCart();
    cart.addProduct(100);
    cart.addProduct(200);
    cart.addProduct(300);

    const discount = new Discount();
    const result = discount.calc(cart.products);

    console.log(cart.products);
    console.log(result);
}

// test3();

// ATM machine example work on same principle under the hood untial a certain amount of money is reached
 
