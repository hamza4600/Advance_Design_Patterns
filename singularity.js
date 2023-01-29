
// Singleton Pattern
// The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.
// The Singleton Pattern is used in:
// - system where we need to ensure that only one instance of a class is created.
// - when we need to have a global access point to an object from a well-known access point.
// - when we need to have a limited number of instances of a class.

// example of singleton pattern is the database connection of entire application that no connnections are lost

let Singleton = (function () {
    let instance;

    function createInstance() {
        let object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
// this is called IIFE (Immediately Invoked Function Expression)
// it is used to create a private scope and it is also called self executing anonymous function
// jquery is also using this pattern

function runS() {
    let instance1 = Singleton.getInstance();
    let instance2 = Singleton.getInstance();
    console.log("Same instance? " + (instance1 === instance2));
}

runS();
