


// Adapter Pattern
// The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces. 
// The Adapter Pattern is used to:
// - make existing classes work with others without modifying their source code.
// - work with classes that don't have compatible interfaces.
// - wrap an existing class with a new interface.
// - help a class adopt an interface that's already in use.

// example of adapter pattern is the jquery library that is using this pattern to make the code compatible with all the browsers 


class OldCalc {
    constructor() {
        this.operations = function (term1, term2, operation) {
            switch (operation) {
                case 'add': return term1 + term2;
                case 'sub': return term1 - term2;
                default: return NaN;
            }
        };
    }
}

class NewCalc {
    constructor() {
        this.add = function (term1, term2) { return term1 + term2; };
        this.sub = function (term1, term2) { return term1 - term2; };
    }
}

// newCalc is not compatible with oldCalc so we need to create an adapter to make it compatible
// we can now use newCalc with oldCalc without changing the oldCalc code (open closed principle)  
class CalcAdapter {
    constructor() {
        let newCalc = new NewCalc();

        this.operations = function (term1, term2, operation) {
            switch (operation) {
                case 'add': return newCalc.add(term1, term2);
                case 'sub': return newCalc.sub(term1, term2);
                default: return NaN;
            }
        };
    }
}

function runA() {
    let oldCalc = new OldCalc();
    console.log(oldCalc.operations(10, 5, 'add'));

    let newCalc = new NewCalc();
    console.log(newCalc.add(10, 5));

    let adaptedCalc = new CalcAdapter();
    console.log(adaptedCalc.operations(10, 5, 'add'));
}

// runA();
