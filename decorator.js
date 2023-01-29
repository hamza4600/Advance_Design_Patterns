// Decorator Pattern
// allow adding new functionality to an object without changing its structure
// object behavior dynamically ability  to add new functionality to an object without changing its structure 
// multiple decorators can be added to an object
// decorators can be removed from an object

// In JavaScript, a decorator pattern can be implemented using a higher-order function that takes an object as an argument and returns a new object that has the same behavior but with additional functionality.

// comon example is security managment information depend on user role , if user is admin he can do everything , if user is guest he can only read , if user is editor he can read and write , if user is moderator he can read , write and delete , if user is owner he can do everything

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

function userCanRead(user) {
    return user.role === 'admin' || user.role === 'editor' || user.role === 'moderator' || user.role === 'owner';
}

function userCanWrite(user) {
    return user.role === 'admin' || user.role === 'editor' || user.role === 'moderator' || user.role === 'owner';
}

function userCanDelete(user) {
    return user.role === 'admin' || user.role === 'owner';
}

function userCanEdit(user) {
    return user.role === 'admin' || user.role === 'owner';
}

//Data base 
const users = [
    new User('John', 'admin'),
    new User('Jane', 'editor'),
    new User('Alice', 'moderator'),
    new User('Sam', 'owner')

];

// Main Data base of company that we want to protect
const dataBase = [
    {
        id: 1,
        name: 'John',
        age: 25,
        salary: 1000
    },
    {
        id: 2,
        name: 'Jane',
        age: 30,
        salary: 2000
    },
    {
        id: 3,
        name: 'Bob',
        age: 35,
        salary: 3000
    },
];

// a function that check the user role and only owner can edit the data base 
function editDataBase(user, instruction) {
    if (userCanEdit(user)) {
        // edit data base
        instruction();

    } else {
        console.log('You are not allowed to edit the data base');
    }
}

// other can view the data base
function viewDataBase(user, dataBase) {
    if (userCanRead(user)) {
        // view data base
        console.log(dataBase);
    } else {
        console.log('You are not allowed to view the data base');
    }
}

function deleteDataBase(user, dataBase) {
    if (userCanDelete(user)) {
        // delete data base
        console.log('Data base deleted');
    } else {
        console.log('You are not allowed to delete the data base');
    }
}

function test() {

    // John is admin he can edit the data base
    editDataBase(users[0], () => {
        dataBase[0].name = 'John Doe';
    });

    // Jane is editor she can view the data base
    // viewDataBase(users[1], dataBase);

    // Alice is moderator she can delete the data base
    deleteDataBase(users[2], dataBase);

    // Sam is owner he can edit the data base
    editDataBase(users[3], () => {
        dataBase[2].name = 'Bob Doe';
    });

    // Sam is owner he can view the data base
    // viewDataBase(users[3], dataBase);

    // Sam is owner he can delete the data base
    deleteDataBase(users[3], dataBase);

    // Sam is owner he can view the data base
    viewDataBase(users[3], dataBase);
}

// test();



// Another example of decorator pattern is a function that takes a function as an argument and returns a new function that has the same behavior but with additional functionality.

function decorator(func) {
    return function () {
        console.log('before');
        func();
        console.log('after');
    }
}

function sayHello() {
    console.log('Hello');
}

const sayHelloWithDecorator = decorator(sayHello);

// sayHelloWithDecorator();

