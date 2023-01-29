// Observer Pattern
//  design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

// used when we have a one-to-many dependency between objects , such that when one object changes state , all of its dependents are notified and updated automatically  , for example , when we have a subject that is being observed by multiple observers , and when the subject changes its state , all the observers are notified and updated automatically


class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    fire(action) {
        this.observers.forEach(observer => observer.update(action));
    }
}

class Observer {
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state;
                break;
            case 'DECREMENT':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state += action.payload;
                break;
            default:
                this.state = this.initialState;
        }
    }
}

function test() {
    const stream$ = new Subject();

    const obs1 = new Observer(10);
    const obs2 = new Observer(19);

    stream$.subscribe(obs1);
    stream$.subscribe(obs2);
    console.log(stream$.observers)

    stream$.fire({ type: 'INCREMENT' }); // will trigger obs1.update() and obs2.update()
    stream$.fire({ type: 'INCREMENT' });

    console.log(stream$.observers)
    stream$.fire({ type: 'ADD', payload: 10 });

    console.log(obs1.state);
    console.log(obs2.state);

    stream$.unsubscribe(obs2);

    stream$.fire({ type: 'DECREMENT' });  // obs2 is not notified

    console.log(obs1.state);

    console.log(stream$.observers)
}

// test();

// another example

class Click {
    constructor() {
        this.handlers = [];
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(handler => handler !== fn);
    }

    fire(o, thisObj) {
        const scope = thisObj || {};
        this.handlers.forEach((item) => {
            item.call(scope, o);
        });
    }
}

// log helper

const log = (msg) => console.log(msg);
// usage

const clickHandler = (item) => log(`fired: ${item}`);

function test2() {

    const click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');

}

test2();