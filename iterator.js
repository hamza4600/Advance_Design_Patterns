// Iterator Pattern
// allow to create an iterator that can be used to iterate over a collection of items
// used in applications that need to iterate over a collection of items

// used in applications that need to iterate over a collection of items like an array or an object

class Iterator {
    constructor(items) {
        this.index = 0;
        this.items = items;
    }

    next() {
        const item = this.items[this.index];
        this.index += 1;
        return item;
    }

    hasNext() {
        return this.index < this.items.length;
    }
}

function test() {
    const items = [1, 2, 3, 4, 5];
    const iterator = new Iterator(items);

    while (iterator.hasNext()) {
        console.log(iterator.next(), ' iterator.hasNext()');
    }
}

// test();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    [Symbol.iterator]() {
        let current = this.head;

        return {
            next() {
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return { done: false, value };
                }
                return { done: true };
            }
        };
    }
}

function test2() {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    for (const value of list) {
        console.log(value);
    }
}

test2();